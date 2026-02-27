import { getCatalog } from "@/lib/sheets";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const catalog = await getCatalog();
  const { cat } = await searchParams;
  const activeCategoryId = cat ?? catalog[0]?.id;
  const active = catalog.find(
    (c: any) => String(c.id) === String(activeCategoryId),
  );
  return (
    <section className="bg-white min-h-screen pt-15 pb-16 md:pt-15">
      {" "}
      <div className="container-custom py-14">
        {" "}
        {/* Back Navigation */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-gray-600 mb-12 transition-all duration-300"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span className="transition-colors duration-300 group-hover:text-primary">
            Back to Home
          </span>
        </Link>
        {/* TITLE */}{" "}
        <div className="mb-10">
          {" "}
          <p className="text-xs uppercase tracking-widest text-secondary font-semibold">
            {" "}
            Products{" "}
          </p>{" "}
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {" "}
            Product Explorer{" "}
          </h1>{" "}
        </div>{" "}
        {/* ====== LAYOUT ====== */}{" "}
        <div className="grid lg:grid-cols-[260px_1fr] gap-12">
          {" "}
          {/* ========================= CATEGORY SIDEBAR ========================= */}{" "}
          <aside className="hidden lg:block">
            {" "}
            <div className="space-y-6">
              {" "}
              <p className="text-xs uppercase tracking-wide text-gray-400">
                {" "}
                Category{" "}
              </p>{" "}
              <nav className="space-y-3">
                {" "}
                {catalog.map((category: any) => {
                  const activeState =
                    String(category.id) === String(activeCategoryId);
                  return (
                    <Link
                      key={category.id}
                      href={`/products?cat=${category.id}`}
                      className={`block text-sm ${activeState ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-800"}`}
                    >
                      {" "}
                      {category.name}{" "}
                    </Link>
                  );
                })}{" "}
              </nav>{" "}
            </div>{" "}
          </aside>{" "}
          {/* ========================= MAIN CONTENT ========================= */}{" "}
          <div>
            {" "}
            {/* MOBILE CATEGORY SWITCH */}{" "}
            <div className="lg:hidden mb-8">
              {" "}
              <form method="GET" action="/products">
                {" "}
                <select
                  name="cat"
                  defaultValue={activeCategoryId}
                  className="w-full border border-gray-300 px-4 py-3 text-sm"
                >
                  {" "}
                  {catalog.map((category: any) => (
                    <option key={category.id} value={category.id}>
                      {" "}
                      {category.name}{" "}
                    </option>
                  ))}{" "}
                </select>{" "}
                <button
                  type="submit"
                  className="w-full mt-2 border border-gray-300 py-2 text-sm"
                >
                  {" "}
                  View Category{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
            {/* CATEGORY TITLE */}{" "}
            <div className="mb-10">
              {" "}
              <h2 className="text-2xl font-semibold"> {active?.name} </h2>{" "}
              <div className="h-[1px] bg-gray-200 mt-4" />{" "}
            </div>{" "}
            {/* PRODUCT LIST */}{" "}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
              {" "}
              {active?.products?.map((product: any) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group block"
                >
                  {" "}
                  <div className="space-y-5">
                    {" "}
                    {/* IMAGE */}{" "}
                    <div className="relative h-56 bg-gray-50 border border-gray-200">
                      {" "}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8"
                      />{" "}
                    </div>{" "}
                    {/* TEXT */}{" "}
                    <div>
                      {" "}
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-black">
                        {" "}
                        {product.name}{" "}
                      </h3>{" "}
                    </div>{" "}
                  </div>{" "}
                </Link>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
