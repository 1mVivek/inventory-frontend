const BASE_URL = "https://backend-1-c9cz.onrender.com";

// PRODUCTS
export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function addProduct(product) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

// ACTIVITY
export async function getActivity() {
  const res = await fetch(`${BASE_URL}/activity`);
  return res.json();
}
