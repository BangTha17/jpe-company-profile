const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID!;

/* ================= TYPES ================= */

export type Category = {
  id: number;
  name: string;
  slug: string;
  order: number;
  active: boolean | string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  category_id: number;
  image: string;
  overview: string;
  specifications: string;
  active: boolean | string;
  order: number;
};

/* ================= FETCH ================= */

async function fetchSheet(sheet: string) {
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}` +
    `/gviz/tq?tqx=out:json&sheet=${sheet}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const text = await res.text();

  const json = JSON.parse(text.substring(47).slice(0, -2));

  return json.table.rows;
}

/* ================= CATEGORIES ================= */

export async function getCategories(): Promise<Category[]> {
  const rows = await fetchSheet("categories");

  return rows.map((r: any) => ({
    id: Number(r.c[0]?.v),
    name: r.c[1]?.v,
    slug: r.c[2]?.v,
    order: Number(r.c[3]?.v),
    active: r.c[4]?.v,
  }));
}

/* ================= PRODUCTS ================= */

export async function getProducts(): Promise<Product[]> {
  const rows = await fetchSheet("products");

  return rows.map((r: any) => ({
    id: Number(r.c[0]?.v),
    name: r.c[1]?.v,
    slug: r.c[2]?.v,
    category_id: Number(r.c[3]?.v),
    image: r.c[4]?.v,
    overview: r.c[5]?.v,
    specifications: r.c[6]?.v,
    active: r.c[7]?.v,
    order: Number(r.c[8]?.v),
  }));
}

/* ================= JOIN ================= */

export async function getCatalog() {
  const categories = await getCategories();
  const products = await getProducts();

  const activeCategories = categories
    .filter((c) => c.active === true || c.active === "TRUE")
    .sort((a, b) => a.order - b.order);

  return activeCategories.map((category) => ({
    ...category,
    products: products
      .filter(
        (p) =>
          p.category_id === category.id &&
          (p.active === true || p.active === "TRUE"),
      )
      .sort((a, b) => a.order - b.order),
  }));
}
