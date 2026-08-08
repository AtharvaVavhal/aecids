import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "AECIDS — Adaptive Explainable Edge-Cloud IDS",
  description:
    "Engineering Design & Innovation Project | Adaptive Explainable Edge–Cloud Intrusion Detection System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-root text-gray-50`}>
        <header className="fixed inset-x-0 top-0 z-50">
          <Navbar />
        </header>

        <LenisProvider>
          <main>{children}</main>
        </LenisProvider>

        <div id="modal-root" />
      </body>
    </html>
  );
}