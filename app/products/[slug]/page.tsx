import { getProducts } from "@/lib/sheets";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await getProducts();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="py-32 text-center">Product not found</div>;
  }

  /* =========================
     PARSE DATA FROM SHEETS
  ========================= */

  const overview: string[] = product.overview?.split("|") ?? [];

  const specs =
    product.specifications?.split("|").map((row: string) => {
      const [label, value] = row.split(":");
      return { label, value };
    }) ?? [];

  /* ========================= */

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <Link
          href="/products"
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
        {/* BREADCRUMB */}
        <div className="mb-10 text-sm text-gray-500">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <span className="mx-2">/</span>
          {product.name}
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* IMAGE */}
          <div className="relative bg-gray-50 rounded-xl p-10">
            <div className="relative w-full aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* OVERVIEW */}
            {overview.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Product Overview</h2>

                <ul className="space-y-3 text-gray-700">
                  {overview.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SPECIFICATIONS */}
            {specs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Specification</h2>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <tbody>
                      {specs.map((s, i) => (
                        <tr key={i} className="odd:bg-gray-50">
                          <td className="p-4 font-medium text-gray-700 w-1/2">
                            {s.label}
                          </td>

                          <td className="p-4 text-gray-600">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
