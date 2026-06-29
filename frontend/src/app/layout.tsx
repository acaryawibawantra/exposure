import type { Metadata } from "next";
import { Outfit, Fredoka, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const freakyFreedom = localFont({
  src: "../../public/fonts/Freaky Freedom.ttf",
  variable: "--font-freaky-freedom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EXPOSURE Solstice 2026 - Leaderboard",
  description: "Upload QRIS transaction proofs, collect points, and win exciting Grand Prizes at the EXPOSURE Solstice 2026 event!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${fredoka.variable} ${plusJakartaSans.variable} ${freakyFreedom.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
