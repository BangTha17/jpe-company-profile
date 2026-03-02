import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo/logo-footer.png"
              alt="JPE Logo"
              width={160}
              height={40}
              className="h-20 w-auto mb-6"
            />

            <p className="text-white/70 text-sm leading-relaxed">
              PT Jaya Perkasa Engitech adalah perusahaan yang bergerak di bidang
              General Contractor for Industrial Equipment.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5">Navigation</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <Link href="#hero" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="#services-products" className="hover:text-white">
                  Services & Products
                </Link>
              </li>

              <li>
                <Link href="#whychoose" className="hover:text-white">
                  Why Choose Us
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-white">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>HVAC System</li>
              <li>Mechanical Works</li>
              <li>Electrical Installation</li>
              <li>Maintenance Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5">Contact</h4>

            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                Jl. Kavling Hankam 5 Blok E No. 190 rt. 007 rw.021, Kel. Setia
                Mekar, Kec. Tambun Selatan, Kab. Bekasi 17519
              </li>
              <li>+622138319057 (Office)</li>
              <li>+6281213647404 (Rahmat.H)</li>
              <li>+6281806618006 (Didin)</li>
              <li>ho@jayaperkasaengitech.com</li>
              <li>Admin@jayaperkasaengitech.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} PT Jaya Perkasa Engitech. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
