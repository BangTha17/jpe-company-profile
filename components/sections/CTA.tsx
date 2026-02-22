import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight">
          Ready to Start Your Industrial Project With Us?
        </h2>

        <p className="mt-6 text-white/80 max-w-2xl mx-auto">
          We provide reliable engineering solutions tailored to your operational
          needs. Let’s discuss how we can support your next project.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="
    bg-secondary px-8 py-3 rounded-md font-semibold
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-lg
    active:translate-y-0
  "
          >
            Contact Us
          </Link>

          <Link
            href="/services"
            className="
    border border-white/70 px-8 py-3 rounded-md font-semibold
    transition-all duration-300 ease-out
    hover:bg-white hover:text-primary
    hover:-translate-y-0.5 hover:shadow-lg
    active:translate-y-0
  "
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
