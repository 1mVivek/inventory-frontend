import { getToken } from "./auth";

const BASE_URL = "https://inventory-backend-wikc.onrender.com";

async function authFetch(url, options = {}) {
  const token = await getToken();

  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
}

// Inventory APIs
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
  return authFetch(`/items/${id}`, { method: "DELETE" });
}
