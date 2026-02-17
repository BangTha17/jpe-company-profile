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
              PT Jaya Perkasa Engitech provides reliable engineering and
              industrial solutions including HVAC, mechanical, and electrical
              systems for various industries.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
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
              <li>Bekasi, West Java, Indonesia</li>
              <li>+62 812-xxxx-xxxx</li>
              <li>info@jpe.co.id</li>
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
