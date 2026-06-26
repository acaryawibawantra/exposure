import type { Metadata } from "next";
import { Outfit, Fredoka } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const freakyFreedom = localFont({
  src: "../../public/fonts/Freaky Freedom.ttf",
  variable: "--font-freaky-freedom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EXPOSURE Solstice 2026 - Leaderboard",
  description: "Upload bukti transaksi QRIS Anda, kumpulkan poin, dan menangkan Grand Prize menarik di event EXPOSURE Solstice 2026!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${fredoka.variable} ${freakyFreedom.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
