import localforage from "localforage";

export const db = localforage.createInstance({
  name: "stock-management-app",
  storeName: "inventory",
});
