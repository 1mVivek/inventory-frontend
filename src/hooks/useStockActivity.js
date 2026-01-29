import { useEffect, useState } from "react";
import { getStockActivities } from "../storage/stockActivityStore";

export default function useStockActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getStockActivities();
      setActivities(data);
      setLoading(false);
    }

    load();
  }, []);

  return { activities, loading };
}