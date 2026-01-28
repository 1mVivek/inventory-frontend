import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";

/**
 * Logs stock activity (IN / OUT)
 */
export async function addStockActivity({
  productId,
  productName,
  type,
  quantity,
}) {
  if (!productId || !productName || !type || !quantity) {
    throw new Error("Invalid stock activity data");
  }

  await addDoc(collection(db, "stockActivities"), {
    productId,
    productName,
    type, // "IN" or "OUT"
    quantity,
    createdAt: serverTimestamp(),
  });
}
