import { Users, Factory, ShieldCheck, HardHat } from "lucide-react";

const strengths = [
  {
    icon: Users,
    title: "Tim Engineering Profesional",
    desc: "Didukung tenaga ahli berpengalaman dalam memberikan solusi industri yang andal.",
  },
  {
    icon: Factory,
    title: "Pengalaman Proyek Industri",
    desc: " Menangani berbagai proyek HVAC, mekanikal, dan elektrikal di berbagai sektor industri.",
  },
  {
    icon: ShieldCheck,
    title: "Kualitas & Keandalan",
    desc: "Berkomitmen pada standar kerja tinggi dan kinerja jangka panjang.",
  },
  {
    icon: HardHat,
    title: "Keselamatan Sebagai Prioritas",
    desc: "Memastikan keselamatan kerja dalam setiap proyek yang dikerjakan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="whychoose" className="py-20 bg-white">
      <div className="container-custom text-center">
        <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
          Why Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Mitra Terpercaya untuk Solusi Industri Anda
        </h2>

        <div className="grid gap-10 mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="text-center px-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
