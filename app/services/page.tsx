import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

const services = [
  {
    title: "Jasa HVAC",
    description:
      "Perusahaan menyediakan layanan lengkap di bidang pendingin dan tata udara (HVAC) untuk kebutuhan industri dan komersial.",
    image: "/images/services/hvac.jpg",
    items: [
      "Chiller",
      "Cool Storage",
      "AHU",
      "Retrofit Fan",
      "Ducting System",
      "Industrial Air Conditioning",
      "Air Drier",
    ],
  },
  {
    title: "Jasa Mekanikal & Plumbing",
    description:
      "Fokus pada desain, instalasi, perawatan, dan perbaikan sistem mekanikal dan plumbing industri.",
    image: "/images/services/mechanical.jpg",
    items: [
      "Water pump system",
      "Lift & escalator",
      "Piping steam",
      "Air compressor",
      "Maintenance genset & hydrant",
      "Wastewater treatment",
      "Cooling tower",
      "Instalasi & modifikasi mesin industri",
    ],
  },
  {
    title: "Jasa Electrical & Control",
    description:
      "Solusi instalasi kelistrikan serta sistem automation untuk kebutuhan industri modern.",
    image: "/images/services/electrical.jpg",
    items: [
      "Instalasi kabel TM–TR/MV–LV",
      "Instalasi panel listrik",
      "Penyalur petir & grounding",
      "Sistem pencahayaan dan outlet",
      "Sound & paging system",
      "Automation system (PLC & sensor)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-24">
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

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase">
            Our Services
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4">
            Professional Engineering Services
          </h1>

          <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed">
            Kami menyediakan layanan engineering terintegrasi untuk mendukung
            efisiensi operasional dan keberlanjutan sistem industri Anda.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-32">
          {services.map((service, i) => (
            <div key={i} className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image */}
              <div
                className={`lg:col-span-7 relative h-[240px] sm:h-[320px] lg:h-[420px] rounded-2xl overflow-hidden ${
                  i % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {service.title}
                </h2>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  {service.description}
                </p>

                {/* List layanan */}
                <ul className="mt-6 space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className="text-primary mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
