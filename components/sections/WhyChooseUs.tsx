import { Users, Factory, ShieldCheck, HardHat } from "lucide-react";

const strengths = [
  {
    icon: Users,
    title: "Professional Engineering Team",
    desc: "Supported by experienced engineers delivering reliable industrial solutions.",
  },
  {
    icon: Factory,
    title: "Industrial Project Experience",
    desc: "Handled various HVAC, mechanical, and electrical projects across industries.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    desc: "Committed to high standards of workmanship and long-term performance.",
  },
  {
    icon: HardHat,
    title: "Safety First Approach",
    desc: "Prioritizing safety procedures and operational standards in every project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom text-center">
        <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
          Why Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Reliable Partner for Industrial Solutions
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
