import Image from "next/image";

const clients = [
  "/images/clients/client1.png",
  "/images/clients/client2.png",
  "/images/clients/client3.png",
  "/images/clients/client4.png",
  "/images/clients/client5.png",
  "/images/clients/client6.png",
];

export default function Clients() {
  return (
    <section id="client" className="py-20 bg-white">
      <div className="container-custom text-center">
        <p className="text-secondary uppercase tracking-wide text-sm font-semibold">
          Trusted By
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Perusahaan yang Pernah Bekerja Sama dengan Kami
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center mt-14">
          {clients.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition duration-300"
            >
              <div className="relative w-44 h-16 md:w-52 md:h-20">
                <Image
                  src={logo}
                  alt="Client Logo"
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
