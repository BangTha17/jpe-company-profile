import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom text-center">
        <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
          Our Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Engineering Solutions We Provide
        </h2>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm
  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative w-full h-40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600">{service.desc}</p>

                <Link
                  href="/services"
                  className="inline-block mt-6 text-primary font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-primary font-semibold transition-all duration-300"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              See More Services
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
