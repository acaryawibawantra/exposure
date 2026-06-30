"use client";

import React from "react";

interface SubmitBackgroundProps {
  children: React.ReactNode;
}

export default function SubmitBackground({ children }: SubmitBackgroundProps) {
  return (
    <div className="relative w-full flex flex-col bg-linear-to-b from-[#4fa3e3] via-[#b39ddb] via-[#f48fb1] via-[#ffe082] to-[#81c784] min-h-[100dvh] md:h-[100vh] overflow-y-auto md:overflow-hidden overflow-x-hidden">
      {/* 
      */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Layer 1: Base Background SVG */}
        <img
          src="/svg/background.svg"
          alt="Base Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Layer 1.1: Awan Kiri */}
        <div className="absolute top-[25vh] md:top-[25vh] left-0 w-[100%] md:w-[60%] lg:w-[60%] -translate-x-1/2">
          <img
            src="/svg/awan-kanan.svg"
            alt="Awan Kiri"
            className="w-full h-auto object-contain animate-float-drift-r"
          />
        </div>

        {/* Layer 1.2: Awan Kanan */}
        <div className="absolute top-[35vh] md:top-[20vh] right-0 w-[100%] md:w-[60%] lg:w-[60%] translate-x-1/2">
          <img
            src="/svg/awan-kiri.svg"
            alt="Awan Kanan"
            className="w-full h-auto object-contain animate-float-drift-l"
          />
        </div>

        {/* Layer 1.3: 4 Awan Kecil (Langit Atas) */}
        {/* Atas Kiri */}
        <div className="absolute top-[2vh] md:top-[2vh] left-[-10%] md:left-[25%] lg:left-[20%] w-[30%] md:w-[15%] lg:w-[20%]">
          <img
            src="/svg/awan-atas-kiri.svg"
            alt="Awan Atas Kiri"
            className="w-full h-auto object-contain animate-float-fast"
          />
        </div>
        {/* Atas Kanan */}
        <div className="absolute top-[0vh] md:top-[2vh] right-[-25%] md:right-[25%] lg:right-[20%] w-[50%] md:w-[15%] lg:w-[20%] scale-[1.1]">
          <img
            src="/svg/awan-atas-kanan.svg"
            alt="Awan Atas Kanan"
            className="w-full h-auto object-contain animate-float"
          />
        </div>
        {/* Bawah Kiri */}
        <div className="absolute top-[12vh] md:top-[20vh] left-[-20%] md:left-[10%] lg:left-[1%] w-[50%] md:w-[15%] lg:w-[20%] scale-[1.2]">
          <img
            src="/svg/awan-bawah-kiri.svg"
            alt="Awan Bawah Kiri"
            className="w-full h-auto object-contain animate-float-slow"
          />
        </div>
        {/* Bawah Kanan */}
        <div className="absolute top-[15vh] md:top-[20vh] right-[-25%] md:right-[10%] lg:right-[1%] w-[50%] md:w-[15%] lg:w-[20%] scale-[1.2]">
          <img
            src="/svg/awan-bawah-kanan.svg"
            alt="Awan Bawah Kanan"
            className="w-full h-auto object-contain animate-float-fast"
          />
        </div>

        {/* Layer 1.4: Bintang-bintang */}
        <img
          src="/svg/bintang.svg"
          alt="Bintang Pusat"
          className="absolute top-[7vh] md:top-[7vh] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[70vh] object-contain opacity-80 animate-twinkle"
        />

        {/* Layer 2: Rumput Lembah (Mobile) */}
        <img
          src="/svg/rumput-full-mobile.svg"
          alt="Rumput Bawah Mobile"
          className="md:hidden absolute bottom-[-5%] left-0 w-[110%] h-auto object-contain object-bottom scale-[1.05] origin-bottom"
        />

        {/* Layer 3: Rumput Kiri Desktop - Pinned low and scaled down specifically for Submit Page */}
        <img
          src="/svg/rumput-kiri.svg"
          alt="Rumput Kiri Desktop"
          className="hidden md:block absolute bottom-[0%] left-[-4%] w-[55%] lg:w-[70%] scale-[1.25] object-contain object-left-bottom"
        />

        {/* Layer 4: Rumput Kanan Desktop - Pinned low and scaled down specifically for Submit Page */}
        <img
          src="/svg/rumput-kanan.svg"
          alt="Rumput Kanan Desktop"
          className="hidden md:block absolute bottom-[0%] right-[-10%] w-[55%] lg:w-[60%] scale-[1.25] object-contain object-right-bottom"
        />

        {/* Layer 5: Rumput Dasar Desktop - Kept low (h-[26vh]) specifically for Submit Page */}
        <img
          src="/svg/rumput.svg"
          alt="Rumput Dasar Desktop"
          className="hidden md:block absolute bottom-[-10%] left-0 w-[105%] h-[15vh] lg:h-[26vh] scale-[1.05] object-cover object-top"
        />

        {/* Layer 6: Cahaya Lembah (Ellipse) - Positioned low */}
        <img
          src="/svg/Ellipse.svg"
          alt="Cahaya Lembah"
          className="absolute left-1/2 -translate-x-1/2 bottom-[-20%] lg:top-[-10%] w-[180%] md:w-[120%] lg:w-[120%] max-w-none object-contain pointer-events-none saturate-100 brightness-100"
        />

        {/* Layer 6.5: Awan Kecil (Depan Cahaya) */}
        <div className="absolute bottom-[15%] md:bottom-[15%] lg:bottom-[20%] left-[5%] md:left-[10%] lg:left-[15%] w-[80%] md:w-[25%] lg:w-[20%] opacity-100">
          <img
            src="/svg/awan-kecil.svg"
            alt="Awan Kecil Kiri"
            className="w-full h-auto object-contain animate-float-drift-r"
          />
        </div>
      </div>

      {/* SCROLLABLE MAIN CONTENT LAYER (Z-INDEX: 10) */}
      <div className="relative z-10 flex-1 flex flex-col w-full min-h-0">
        {children}
      </div>
    </div>
  );
}
