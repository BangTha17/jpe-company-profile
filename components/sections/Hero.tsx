import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[620px] md:h-[85vh] flex items-center justify-center text-center text-white pt-28 pb-16 md:pt-0 md:pb-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/banner/banner.jpg)",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container-custom px-4 md:px-0">
        <p className="text-white/80 tracking-widest uppercase text-xs md:text-sm mb-4">
          Trusted Engineering Solutions
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Bergabung Bersama Kami
          <span className="block md:inline"> Membangun Sebuah Proyek</span>
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://wa.me/62213831905756?text=Halo%20PT%20Jaya%20Perkasa%20Engitech,%20saya%20ingin%20konsultasi."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary px-6 py-3 rounded-md font-semibold w-full sm:w-auto
transition-all duration-300 ease-out
hover:-translate-y-0.5 hover:shadow-lg
active:translate-y-0"
          >
            Bergabung Sekarang
          </Link>

          <Link
            href="#services-products"
            className="border border-white/70 px-6 py-3 rounded-md font-semibold
transition-all duration-300 ease-out
hover:bg-white hover:text-primary
hover:-translate-y-0.5 hover:shadow-lg
active:translate-y-0
w-full sm:w-auto"
          >
            Jelajahi
          </Link>
        </div>
      </div>
    </section>
  );
}
