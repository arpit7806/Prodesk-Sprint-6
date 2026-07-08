const BASE_URL = "https://dummyjson.com";

export async function getAllProducts(limit = 30) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }
  const data = await res.json();
  return data.products;
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}: ${res.status}`);
  }
  return res.json();
}
