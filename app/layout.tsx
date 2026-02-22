import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PT Jaya Perkasa Engitech | Engineering Solutions",
  description:
    "PT Jaya Perkasa Engitech is a leading engineering and construction company.",
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
    <html lang="en">
      <body>
        {!isAdmin && <Navbar />}

        {children}

        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}