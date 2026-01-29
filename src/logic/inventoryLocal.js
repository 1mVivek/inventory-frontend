import { db } from "../storage/localDB";
import { v4 as uuid } from "uuid";

/* =========================
   GET ALL PRODUCTS
========================= */
export async function getProducts() {
  return (await db.getItem("products")) || [];
}

/* =========================
   ADD PRODUCT
========================= */
export async function addProduct(product) {
  const products = await getProducts();
  products.push({ ...product, id: uuid(), quantity: 0 });
  await db.setItem("products", products);
}

/* =========================
   STOCK IN
========================= */
export async function stockIn(productId, qty) {
  const products = await getProducts();
  const logs = (await db.getItem("stockLogs")) || [];

  const p = products.find(p => p.id === productId);
  if (!p) throw new Error("Product not found");

  p.quantity += qty;

  logs.unshift({
    id: uuid(),
    productId,
    type: "IN",
    quantity: qty,
    createdAt: new Date(),
  });

  await db.setItem("products", products);
  await db.setItem("stockLogs", logs);
}

/* =========================
   STOCK OUT
========================= */
export async function stockOut(productId, qty) {
  const products = await getProducts();
  const logs = (await db.getItem("stockLogs")) || [];

  const p = products.find(p => p.id === productId);
  if (!p || p.quantity < qty) throw new Error("Insufficient stock");

  p.quantity -= qty;

  logs.unshift({
    id: uuid(),
    productId,
    type: "OUT",
    quantity: qty,
    createdAt: new Date(),
  });

  await db.setItem("products", products);
  await db.setItem("stockLogs", logs);
}
