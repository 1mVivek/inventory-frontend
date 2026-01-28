import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export default function useDashboardStats() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    outOfStock: 0,
    inventoryValue: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const snapshot = await getDocs(collection(db, "products"));

      let totalProducts = 0;
      let lowStock = 0;
      let outOfStock = 0;
      let inventoryValue = 0;

      snapshot.forEach(doc => {
        const p = doc.data();
        totalProducts++;
        inventoryValue += (p.price || 0) * (p.quantity || 0);

        if (p.quantity === 0) outOfStock++;
        else if (p.quantity <= p.lowStockLimit) lowStock++;
      });

      setStats({
        totalProducts,
        lowStock,
        outOfStock,
        inventoryValue
      });
    };

    fetchStats();
  }, []);

  return stats;
}
