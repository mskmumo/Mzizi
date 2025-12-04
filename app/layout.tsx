import type { Metadata } from "next";
import Script from "next/script";
import { Arimo } from "next/font/google";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mizizi – Digital Heritage Experience | Kamba & Kikuyu Culture",
  description:
    "Explore Kenya's rich cultural heritage through interactive experiences. Discover Kamba and Kikuyu traditions, music, art, cuisine, and stories preserved for future generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.variable} ${azeretMono.variable} bg-cream text-deep-loam antialiased`}
      >
        <Script
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
          strategy="beforeInteractive"
        />
        <Header />
        <main className="space-y-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
