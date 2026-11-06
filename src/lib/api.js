const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts(category = "") {
  try {
    const url = category
      ? `${BASE_URL}/products?category=${encodeURIComponent(category)}`
      : `${BASE_URL}/products`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error in getProducts:", error);
    return [];
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`${BASE_URL}/categories`, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error in getCategories:", error);
    return [];
  }
}

export async function getCategoryBySlug(slug) {
  try {
    const res = await fetch(`${BASE_URL}/categories/${encodeURIComponent(slug)}`, {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {}

  // Fallback: look up in categories list
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug || c.id === slug) || null;
}

export async function getProductBySlugOrId(identifier) {
  // Try by numeric ID first if it's numeric
  if (!isNaN(identifier)) {
    try {
      const res = await fetch(`${BASE_URL}/products/${identifier}`, {
        next: { revalidate: 60 },
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {}
  }

  // Fallback: fetch all and find by slug or string id
  const all = await getProducts();
  return (
    all.find(
      (p) =>
        p.slug === identifier ||
        String(p.id) === String(identifier)
    ) || null
  );
}
