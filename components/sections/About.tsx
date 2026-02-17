import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/images/project/banner.jpg"
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

          <p className="mt-6 text-gray-600">
            PT Jaya Perkasa Engitech is an industrial equipment contractor
            specializing in HVAC, mechanical, and electrical systems for
            manufacturing and commercial facilities. We deliver reliable
            engineering solutions supported by experienced professionals and
            quality workmanship.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Professional Engineering Team</li>
            <li>✔ Industrial Project Experience</li>
            <li>✔ Quality & Safety Commitment</li>
          </ul>

          <Link
            href="/about"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
