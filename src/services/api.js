import { getToken } from "./auth";

const BASE_URL = "https://inventory-backend-wick.onrender.com";

async function authFetch(url, options = {}) {
  const token = await getToken();
  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getItems() {
  const res = await authFetch("/items");
  return res.json();
}

export async function addItem(data) {
  const res = await authFetch("/items", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteItem(id) {
  await authFetch(`/items/${id}`, { method: "DELETE" });
}