import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../services/firebase";

export default function useStockActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "stockActivities"),
      orderBy("createdAt", "desc"),
      limit(20)
    );

    const unsub = onSnapshot(q, snap => {
      const rows = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivities(rows);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { activities, loading };
}
