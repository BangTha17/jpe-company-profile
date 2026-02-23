import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/images/banner/banner.jpg"
            alt="Company Project"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div>
          <p className="text-secondary font-semibold mb-3 uppercase tracking-wide text-sm">
            About Company
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            PT Jaya Perkasa Engitech
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            PT Jaya Perkasa Engitech adalah perusahaan yang bergerak di bidang
            <span className="font-semibold">
              {" "}
              General Contractor for Industrial Equipment
            </span>
            . Dengan semangat kewirausahaan, kami berkomitmen untuk terus
            membangun, berkarya, dan unggul dalam menghadapi dinamika industri
            serta persaingan bisnis yang semakin berkembang.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Tenaga Profesional & Berpengalaman</li>
            <li>✔ Solusi Industrial Equipment Terpercaya</li>
            <li>✔ Komitmen Kualitas & Profesionalisme</li>
          </ul>

          <Link
            href="#projects"
            className="
    inline-block mt-8
    bg-primary text-white
    px-6 py-3 rounded-md font-semibold
    w-full sm:w-auto
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-lg
    active:translate-y-0
  "
          >
            Lihat Proyek Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
