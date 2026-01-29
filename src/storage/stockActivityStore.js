import localforage from "localforage";

const STORE_KEY = "stockActivities";

/**
 * Get all stock activities
 */
export async function getStockActivities() {
  const data = await localforage.getItem(STORE_KEY);
  return data || [];
}

/**
 * Add a stock activity (IN / OUT)
 */
export async function addStockActivity(activity) {
  const current = await getStockActivities();

  const newActivity = {
    id: crypto.randomUUID(),
    ...activity,
    createdAt: Date.now(),
  };

  const updated = [newActivity, ...current];
  await localforage.setItem(STORE_KEY, updated);

  return newActivity;
}

/**
 * Clear all activities (debug only)
 */
export async function clearStockActivities() {
  await localforage.removeItem(STORE_KEY);
}
