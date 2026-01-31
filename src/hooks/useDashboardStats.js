import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function useDashboardStats() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalStock: 0,
    inventoryValue: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const products = await getProducts();

        const totalProducts = products.length;
        const totalStock = products.reduce(
          (sum, p) => sum + Number(p.stock || 0),
          0
        );
        const inventoryValue = products.reduce(
          (sum, p) => sum + Number(p.price || 0) * Number(p.stock || 0),
          0
        );

        setStats({ totalProducts, totalStock, inventoryValue });
      } catch (err) {
        console.error("Dashboard stats error:", err);
      }
    };

    loadStats();
  }, []);

  return stats;
}
