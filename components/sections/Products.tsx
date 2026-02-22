import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-custom text-center">
        {/* SECTION HEADER */}
        <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
          Our Products
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Products We Provide
        </h2>

        {/* PRODUCT GRID */}
        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="
                group bg-white rounded-xl overflow-hidden
                border border-gray-100
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* CATEGORY BADGE */}
                <span
                  className="
                    absolute top-3 left-3
                    bg-white/90 backdrop-blur
                    text-xs font-semibold
                    px-3 py-1 rounded-full
                    text-primary
                  "
                >
                  {product.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {product.desc}
                </p>

                <Link
                  href={`/products/${product.id}`}
                  className="
    inline-block mt-4 text-primary font-semibold text-sm
    transition-transform duration-300
    group-hover:translate-x-1
  "
                >
                  View Product →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEE ALL */}
        <div className="mt-14">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-primary font-semibold transition-all duration-300"
          >
            <span className="group-hover:translate-x-0.5 transition-transform">
              See All Products
            </span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
