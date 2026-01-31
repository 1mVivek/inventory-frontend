import { useEffect, useState } from "react";
import { getItems } from "../services/api";

export default function useDashboardStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getItems().then(items => {
      const totalProducts = items.length;
      const lowStock = items.filter(i => i.stock < 5).length;
      const outOfStock = items.filter(i => i.stock === 0).length;
      const inventoryValue = items.reduce(
        (sum, i) => sum + i.price * i.stock,
        0
      );

      setStats({
        totalProducts,
        lowStock,
        outOfStock,
        inventoryValue,
      });
    });
  }, []);

  return stats;
}
