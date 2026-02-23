"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services & Products", href: "#services-products" },
    { name: "Projects", href: "#projects" },
    { name: "Clients", href: "#client" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom relative flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo-nav.png"
            alt="PT Jaya Perkasa Engitech"
            width={300}
            height={80}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {menu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-colors duration-300
      ${
        scrolled
          ? "text-gray-800 hover:text-primary"
          : "text-white hover:text-secondary"
      }
      after:absolute after:left-0 after:bottom-0
      after:h-[2px] after:w-0
      after:bg-primary
      after:transition-all after:duration-300
      hover:after:w-full`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <span
            className={`absolute h-[2px] w-6 transition-all duration-300 ${
              scrolled || open ? "bg-gray-800" : "bg-white"
            } ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span
            className={`absolute h-[2px] w-6 transition-all duration-300 ${
              scrolled || open ? "bg-gray-800" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute h-[2px] w-6 transition-all duration-300 ${
              scrolled || open ? "bg-gray-800" : "bg-white"
            } ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      <div
        className={`
    md:hidden
    fixed left-0 top-20 w-full
    bg-white shadow-xl
    transition-all duration-300 ease-out
    ${
      open
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }
  `}
      >
        <ul className="container-custom py-6 flex flex-col gap-6 text-gray-700 font-medium">
          {menu.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="
        block py-2
        transition-all duration-200
        hover:text-primary
        hover:translate-x-2
      "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
