import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight">
          Siap Memulai Proyek Industri Bersama Kami?
        </h2>

        <p className="mt-6 text-white/80 max-w-2xl mx-auto">
          Kami menyediakan solusi engineering yang andal dan sesuai dengan
          kebutuhan operasional Anda. Mari diskusikan bagaimana kami dapat
          mendukung proyek Anda selanjutnya.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="https://wa.me/6281213647404?text=Halo%20PT%20Jaya%20Perkasa%20Engitech,%20saya%20ingin%20konsultasi."
            target="_blank"
            rel="noopener noreferrer"
            className="
    bg-secondary px-8 py-3 rounded-md font-semibold
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-lg
    active:translate-y-0
  "
          >
            Hubungi Kami
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
            Layanan Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
