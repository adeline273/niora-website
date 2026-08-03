import type { Metadata } from "next";
import { Newsreader, Libre_Franklin } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niora Systems — Infrastructure for Reliable Medicine Procurement",
  description:
    "Niora develops infrastructure that helps make pharmaceutical procurement more predictable, transparent, and accountable.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${libreFranklin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
