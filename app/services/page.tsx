import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const services = [
  {
    slug: "electrical",
    title: "Electrical",
    description:
      "Instalasi dan maintenance sistem kelistrikan industri untuk operasional yang aman dan stabil.",
    image: "/images/services/electrical.jpg",
  },
  {
    slug: "hvac",
    title: "HVAC",
    description:
      "Solusi sistem pendingin dan tata udara industri dengan efisiensi energi optimal.",
    image: "/images/services/hvac.jpg",
  },
  {
    slug: "mechanical",
    title: "Mechanical",
    description:
      "Perawatan mesin dan sistem mekanikal industri guna menjaga produktivitas.",
    image: "/images/services/mechanical.jpg",
  },
  {
    slug: "pip",
    title: "Piping",
    description:
      "Instalasi sistem perpipaan industri termasuk steam dan utilitas produksi.",
    image: "/images/services/piping.jpg",
  },
];
export default function ServicesPage() {
  return (
    <section className="py-20 md:py-24">
      {" "}
      <div className="container-custom">
        {" "}
        {/* Back */}{" "}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-gray-600 mb-12"
        >
          {" "}
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />{" "}
          <span className="group-hover:text-primary transition-colors">
            {" "}
            Back to Home{" "}
          </span>{" "}
        </Link>{" "}
        {/* Header */}{" "}
        <div className="max-w-2xl mb-14 md:mb-16">
          {" "}
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase">
            {" "}
            Our Services{" "}
          </p>{" "}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
            {" "}
            Engineering Service Capabilities{" "}
          </h1>{" "}
          <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
            {" "}
            Kami menghadirkan layanan engineering profesional untuk mendukung
            sistem industri yang efisien dan berkelanjutan.{" "}
          </p>{" "}
        </div>{" "}
        {/* GRID */}{" "}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {" "}
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group"
            >
              {" "}
              <div className="relative h-[260px] md:h-[320px] overflow-hidden rounded-2xl">
                {" "}
                {/* Image */}{" "}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />{" "}
                {/* Gradient overlay */}{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />{" "}
                {/* Content */}{" "}
                <div className="absolute bottom-0 p-6 md:p-7 text-white">
                  {" "}
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {" "}
                    {service.title}{" "}
                  </h2>{" "}
                  <p className="text-sm md:text-base text-white/90 mt-2 leading-relaxed">
                    {" "}
                    {service.description}{" "}
                  </p>{" "}
                  <span className="inline-block mt-4 text-sm font-medium border-b border-white/60 group-hover:border-white transition-all">
                    {" "}
                    Explore Services →{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </Link>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
