import {
  doc,
  getDoc,
  runTransaction,
  Timestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { addStockActivity } from "../storage/stockActivityStore";

/* ================================
   RECEIVE PURCHASE ORDER (STOCK IN)
================================ */

export async function receivePurchaseOrder(poId) {
  const poRef = doc(db, "purchaseOrders", poId);

  let poData;

  await runTransaction(db, async (transaction) => {
    const poSnap = await transaction.get(poRef);
    if (!poSnap.exists()) throw new Error("PO not found");

    poData = poSnap.data();

    if (poData.status === "received") {
      throw new Error("PO already received");
    }

    for (const item of poData.items) {
      const productRef = doc(db, "products", item.productId);
      const productSnap = await transaction.get(productRef);

      if (!productSnap.exists()) {
        throw new Error("Product not found");
      }

      const currentQty = productSnap.data().quantity || 0;

      transaction.update(productRef, {
        quantity: currentQty + item.quantity,
        updatedAt: Timestamp.now(),
      });

      const logRef = doc(db, "stockLogs", crypto.randomUUID());
      transaction.set(logRef, {
        productId: item.productId,
        type: "IN",
        quantity: item.quantity,
        reason: "Purchase Order",
        referenceId: poId,
        createdAt: Timestamp.now(),
      });
    }

    transaction.update(poRef, {
      status: "received",
      receivedAt: Timestamp.now(),
    });
  });

  // 🔹 LOCAL ACTIVITY LOG (OFFLINE SAFE)
  for (const item of poData.items) {
    await addStockActivity({
      productName: item.productId,
      type: "IN",
      quantity: item.quantity,
    });
  }
}

/* ================================
   SELL PRODUCT (STOCK OUT)
================================ */

export async function sellProduct(productId, quantity) {
  const productRef = doc(db, "products", productId);

  await runTransaction(db, async (transaction) => {
    const snap = await transaction.get(productRef);
    if (!snap.exists()) throw new Error("Product not found");

    const currentQty = snap.data().quantity;

    if (currentQty < quantity) {
      throw new Error("Insufficient stock");
    }

    transaction.update(productRef, {
      quantity: currentQty - quantity,
      updatedAt: Timestamp.now(),
    });

    const logRef = doc(db, "stockLogs", crypto.randomUUID());
    transaction.set(logRef, {
      productId,
      type: "OUT",
      quantity,
      reason: "Sale",
      createdAt: Timestamp.now(),
    });
  });

  // 🔹 LOCAL ACTIVITY LOG
  await addStockActivity({
    productName: productId,
    type: "OUT",
    quantity,
  });
}

/* ================================
   MANUAL STOCK ADJUST
================================ */

export async function adjustStock(productId, newQuantity) {
  const productRef = doc(db, "products", productId);

  let diff = 0;

  await runTransaction(db, async (transaction) => {
    const snap = await transaction.get(productRef);
    if (!snap.exists()) throw new Error("Product not found");

    const oldQty = snap.data().quantity;
    diff = newQuantity - oldQty;

    if (diff === 0) return;

    transaction.update(productRef, {
      quantity: newQuantity,
      updatedAt: Timestamp.now(),
    });

    const logRef = doc(db, "stockLogs", crypto.randomUUID());
    transaction.set(logRef, {
      productId,
      type: diff > 0 ? "IN" : "OUT",
      quantity: Math.abs(diff),
      reason: "Manual Adjustment",
      createdAt: Timestamp.now(),
    });
  });

  // 🔹 LOCAL ACTIVITY LOG
  if (diff !== 0) {
    await addStockActivity({
      productName: productId,
      type: diff > 0 ? "IN" : "OUT",
      quantity: Math.abs(diff),
    });
  }
}
