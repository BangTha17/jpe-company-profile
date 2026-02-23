import Link from "next/link";
import { Boxes, Wrench, ArrowRight } from "lucide-react";

export default function ServiceProduct() {
  return (
    <section id="services-products" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center">
          <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
            Our Services & Products
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Solusi yang Kami Sediakan
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-14 md:grid-cols-2">
          {/* PRODUCT */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm"
          >
            {/* hover overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

            <div className="relative p-10 md:p-12 translate-y-4 group-hover:translate-y-0 transition duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
                <Boxes className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">Products</h3>

              <p className="text-gray-600 mt-3 max-w-md">
                Jelajahi produk-produk industri kami yang dirancang untuk
                meningkatkan efisiensi dan kinerja operasional.
              </p>

              <div className="flex items-center gap-2 mt-10 text-primary font-semibold">
                Lihat Selengkapnya
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-2" />
              </div>
            </div>
          </Link>

          {/* SERVICE */}
          <Link
            href="/services"
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

            <div className="relative p-10 md:p-12 translate-y-4 group-hover:translate-y-0 transition duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
                <Wrench className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">Services</h3>

              <p className="text-gray-600 mt-3 max-w-md">
                Layanan profesional yang dirancang untuk memelihara dan
                mengoptimalkan sistem industri Anda.
              </p>

              <div className="flex items-center gap-2 mt-10 text-primary font-semibold">
                Lihat Selengkapnya
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
