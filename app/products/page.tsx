import { getCatalog } from "@/lib/sheets";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProductsPage() {
  const catalog = await getCatalog();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
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

        {/* HEADER */}
        <div className="text-center">
          <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
            Our Products
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Product Catalog
          </h1>
        </div>

        {/* CATEGORY LOOP */}
        <div className="mt-16 space-y-20">
          {catalog.map((category) => (
            <div key={category.id}>
              {/* CATEGORY TITLE */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {category.name}
                </h2>

                <span className="text-sm text-gray-400 hidden md:block">
                  Scroll →
                </span>
              </div>

              {/* HORIZONTAL SCROLL */}
              <div
                className="
                  flex gap-6 overflow-x-auto pb-2
                  snap-x snap-mandatory
                  scrollbar-hide
                "
              >
                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="
                      group relative overflow-hidden rounded-xl
                      min-w-[260px] md:min-w-[300px]
                      snap-start
                      flex-shrink-0
                    "
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-64 bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        loading="lazy"
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                    {/* TEXT */}
                    <div className="absolute bottom-0 left-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition duration-300">
                      <p className="text-sm text-white/80">{category.name}</p>

                      <h3 className="text-lg font-semibold mt-1">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
