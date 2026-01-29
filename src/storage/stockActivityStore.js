import localforage from "localforage";

const STORE_KEY = "stockActivities";

export async function addStockActivity(activity) {
  const existing = (await localforage.getItem(STORE_KEY)) || [];

  const newActivity = {
    id: crypto.randomUUID(),
    ...activity,
    createdAt: new Date().toISOString(),
  };

  await localforage.setItem(STORE_KEY, [
    newActivity,
    ...existing,
  ]);
}

export async function getStockActivities() {
  return (await localforage.getItem(STORE_KEY)) || [];
}

export async function clearStockActivities() {
  await localforage.removeItem(STORE_KEY);
}
