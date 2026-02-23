import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "PT Jaya Perkasa Engitech",
    template: "%s | PT Jaya Perkasa Engitech",
  },

  description:
    "PT Jaya Perkasa Engitech adalah perusahaan General Contractor Industrial Equipment yang menyediakan solusi HVAC, Mechanical, dan Electrical untuk berbagai kebutuhan industri.",

  keywords: [
    "General Contractor",
    "Industrial Equipment",
    "HVAC Indonesia",
    "Mechanical Engineering",
    "Electrical Contractor",
    "PT Jaya Perkasa Engitech",
  ],

  authors: [{ name: "PT Jaya Perkasa Engitech" }],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "PT Jaya Perkasa Engitech",
    description:
      "Solusi engineering industrial profesional meliputi HVAC, Mechanical, dan Electrical System.",
    url: "https://jayaperkasaengitech.com",
    siteName: "PT Jaya Perkasa Engitech",
    images: [
      {
        url: "/images/logo/logo-nav.png",
        width: 1200,
        height: 630,
        alt: "PT Jaya Perkasa Engitech",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  metadataBase: new URL("https://jayaperkasaengitech.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") || "";

  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="id">
      <body>
        {!isAdmin && <Navbar />}
        {children}
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}