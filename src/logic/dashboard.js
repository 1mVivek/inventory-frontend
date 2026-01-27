import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../services/firebase";

/* ===============================
   TOTAL PRODUCTS
================================ */
export async function getTotalProducts() {
  const snap = await getDocs(collection(db, "products"));
  return snap.size;
}

/* ===============================
   TOTAL STOCK QUANTITY
================================ */
export async function getTotalStockQuantity() {
  const snap = await getDocs(collection(db, "products"));
  let total = 0;

  snap.forEach(doc => {
    total += doc.data().quantity || 0;
  });

  return total;
}

/* ===============================
   LOW STOCK PRODUCTS
================================ */
export async function getLowStockProducts() {
  const q = query(
    collection(db, "products"),
    where("quantity", "<=", 10)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/* ===============================
   RECENT STOCK ACTIVITY
================================ */
export async function getRecentStockLogs() {
  const q = query(
    collection(db, "stockLogs"),
    orderBy("createdAt", "desc"),
    limit(5)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
