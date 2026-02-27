import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
/* ================================================= SERVICES DATA (WITH SUB SERVICE IMAGES) ================================================= */ const servicesData =
  {
    electrical: {
      title: "Electrical Services",
      description:
        "Layanan instalasi dan maintenance sistem kelistrikan industri untuk memastikan operasional yang aman dan stabil.",
      hero: "/images/services/electrical.jpg",
      items: [
        {
          title: "Annual Maintenance Trafo",
          image: "/images/services/electrical-trafo.jpg",
          desc: "Perawatan rutin trafo untuk menjaga stabilitas distribusi daya.",
        },
        {
          title: "Maintenance Panel Kubikel",
          image: "/images/services/electrical-panel.jpg",
          desc: "Inspeksi dan maintenance panel kubikel sesuai standar industri.",
        },
      ],
    },
    hvac: {
      title: "HVAC Services",
      description:
        "Solusi sistem pendingin dan tata udara industri dengan performa optimal.",
      hero: "/images/services/hvac.jpg",
      items: [
        {
          title: "Maintenance AC",
          image: "/images/services/hvac-ac.jpg",
          desc: "Perawatan sistem AC industri untuk efisiensi energi maksimal.",
        },
        {
          title: "Overhaul & Balancing Fan",
          image: "/images/services/hvac-fan.jpg",
          desc: "Optimasi airflow melalui balancing dan overhaul fan.",
        },
        {
          title: "Replacement Coil AHU",
          image: "/images/services/hvac-ahu.jpg",
          desc: "Penggantian coil AHU untuk meningkatkan performa pendinginan.",
        },
        {
          title: "Retrofit Fan AHU",
          image: "/images/services/hvac-retrofit.jpg",
          desc: "Upgrade fan AHU untuk efisiensi dan performa lebih tinggi.",
        },
      ],
    },
    mechanical: {
      title: "Mechanical Services",
      description:
        "Perawatan mesin industri untuk menjaga produktivitas operasional.",
      hero: "/images/services/mechanical.jpg",
      items: [
        {
          title: "Maintenance Genset Hydrant",
          image: "/images/services/mechanical-genset.jpg",
          desc: "Maintenance genset dan hydrant system secara berkala.",
        },
        {
          title: "Overhaul Mesin Supermixer",
          image: "/images/services/mechanical-mixer.jpg",
          desc: "Overhaul mesin produksi untuk menjaga performa optimal.",
        },
        {
          title: "Overhaul Pompa Water Supply",
          image: "/images/services/mechanical-pump.jpg",
          desc: "Perawatan pompa distribusi air industri.",
        },
      ],
    },
    pip: {
      title: "Piping Services",
      description:
        "Instalasi sistem perpipaan industri termasuk steam piping dan utilitas produksi.",
      hero: "/images/services/piping.jpg",
      items: [
        {
          title: "Instalasi Pipa Steam",
          image: "/images/services/piping-steam.jpg",
          desc: "Pemasangan sistem steam piping sesuai standar engineering.",
        },
      ],
    },
  };
/* ================================================= PAGE ================================================= */ export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const data = servicesData[service as keyof typeof servicesData];
  if (!data) notFound();
  return (
    <section className="pb-24">
      {" "}
      {/* HERO */}{" "}
      <div className="relative h-[260px] md:h-[420px] w-full">
        {" "}
        <Image
          src={data.hero}
          alt={data.title}
          fill
          className="object-cover"
        />{" "}
        <div className="absolute inset-0 bg-black/50" />{" "}
        <div className="absolute inset-0 flex items-end">
          {" "}
          <div className="container-custom pb-10 text-white">
            {" "}
            <h1 className="text-3xl md:text-5xl font-bold">
              {" "}
              {data.title}{" "}
            </h1>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* CONTENT */}{" "}
      <div className="container-custom mt-14 md:mt-16">
        {" "}
        {/* Back */}{" "}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-gray-600 mb-10"
        >
          {" "}
          <ArrowLeft size={18} /> Back to Services{" "}
        </Link>{" "}
        {/* Description */}{" "}
        <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
          {" "}
          {data.description}{" "}
        </p>{" "}
        {/* SUB SERVICES */}{" "}
        <div className="mt-16 space-y-20">
          {" "}
          <h2 className="text-2xl md:text-3xl font-semibold">
            {" "}
            Scope of Work{" "}
          </h2>{" "}
          {data.items.map((item, i) => (
            <div
              key={i}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {" "}
              {/* IMAGE */}{" "}
              <div className="relative h-[260px] md:h-[340px] overflow-hidden rounded-2xl">
                {" "}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />{" "}
                {/* subtle overlay */}{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />{" "}
              </div>{" "}
              {/* CONTENT */}{" "}
              <div className="max-w-lg">
                {" "}
                <p className="text-sm text-secondary font-semibold tracking-widest uppercase">
                  {" "}
                  Sub Service{" "}
                </p>{" "}
                <h3 className="text-2xl md:text-3xl font-semibold mt-3 tracking-tight">
                  {" "}
                  {item.title}{" "}
                </h3>{" "}
                <p className="text-gray-600 mt-5 leading-relaxed">
                  {" "}
                  {item.desc}{" "}
                </p>{" "}
                {/* visual accent */}{" "}
                <div className="mt-6 h-[2px] w-12 bg-primary transition-all duration-300 hover:w-20" />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
      </div>{" "}
    </section>
  );
}
