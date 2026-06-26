import React from "react";

interface MainBackgroundProps {
  children: React.ReactNode;
}

export default function MainBackground({ children }: MainBackgroundProps) {
  return (
    <div className="relative w-full flex flex-col bg-linear-to-b from-[#4fa3e3] via-[#b39ddb] via-[#f48fb1] via-[#ffe082] to-[#81c784] h-[100dvh] overflow-hidden md:h-auto md:min-h-[100dvh] md:overflow-x-hidden">
      {/* 
        LAYER DEKORASI BACKGROUND (Z-INDEX: 0)
        Tempat Anda memasukkan elemen-elemen SVG dari Figma:
        - Awan berpendar (glowing clouds)
        - Awan kartun atas
        - Bintang-bintang berkilau
        - Bukit Rumput bawah (Grainy Meadow)
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Layer 1: Base Background SVG */}
        <img
          src="/svg/background.svg"
          alt="Base Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Layer 1.1: Awan Kiri */}
        <img
          src="/svg/awan-kanan.svg"
          alt="Awan Kiri"
          className="absolute top-[25vh] md:top-[25vh] left-0 w-[100%] md:w-[60%] lg:w-[60%] -translate-x-1/2 object-contain animate-float"
        />

        {/* Layer 1.2: Awan Kanan */}
        <img
          src="/svg/awan-kiri.svg"
          alt="Awan Kanan"
          className="absolute top-[35vh] md:top-[20vh] right-0 w-[100%] md:w-[60%] lg:w-[60%] translate-x-1/2 object-contain animate-float-slow"
        />

        {/* Layer 1.3: 4 Awan Kecil (Langit Atas) */}
        {/* Atas Kiri */}
        <img
          src="/svg/awan-atas-kiri.svg"
          alt="Awan Atas Kiri"
          className="absolute top-[2vh] md:top-[2vh] left-[-10%] md:left-[25%] lg:left-[20%] w-[30%] md:w-[15%] lg:w-[20%] object-contain animate-float-fast"
        />
        {/* Atas Kanan */}
        <img
          src="/svg/awan-atas-kanan.svg"
          alt="Awan Atas Kanan"
          className="absolute top-[0vh] md:top-[2vh] right-[-25%] md:right-[25%] lg:right-[20%] w-[50%] md:w-[15%] lg:w-[20%] scale-[1.1] object-contain animate-float"
        />
        {/* Bawah Kiri */}
        <img
          src="/svg/awan-bawah-kiri.svg"
          alt="Awan Bawah Kiri"
          className="absolute top-[12vh] md:top-[20vh] left-[-20%] md:left-[10%] lg:left-[1%] w-[50%] md:w-[15%] lg:w-[20%] scale-[1.2] object-contain animate-float-slow"
        />
        {/* Bawah Kanan */}
        <img
          src="/svg/awan-bawah-kanan.svg"
          alt="Awan Bawah Kanan"
          className="absolute top-[15vh] md:top-[20vh] right-[-25%] md:right-[10%] lg:right-[1%] w-[50%] md:w-[15%] lg:w-[20%] scale-[1.2] object-contain animate-float-fast"
        />

        {/* Layer 1.4: Bintang-bintang */}
        <img
          src="/svg/bintang.svg"
          alt="Bintang"
          className="absolute top-[7vh] md:top-[5vh] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60vh] object-contain opacity-90 animate-twinkle"
        />


        {/* Layer 2: Rumput Lembah (Gabungan Mobile) */}
        <img
          src="/svg/rumput-full-mobile.svg"
          alt="Rumput Bawah Mobile"
          className="md:hidden absolute bottom-[-5%] left-0 w-[110%] h-auto object-contain object-bottom scale-[1.05] origin-bottom"
        />

        {/* Layer 3: Rumput Kiri Desktop */}
        <img
          src="/svg/rumput-kiri.svg"
          alt="Rumput Kiri Desktop"
          className="hidden md:block absolute bottom-[12%] lg:bottom-[30%] left-[-4%] w-[55%] lg:w-[70%] scale-[2] object-contain object-left-bottom"
        />

        {/* Layer 4: Rumput Kanan Desktop */}
        <img
          src="/svg/rumput-kanan.svg"
          alt="Rumput Kanan Desktop"
          className="hidden md:block absolute bottom-[12%] lg:bottom-[30%] right-[-10%] w-[55%] lg:w-[60%] scale-[2] object-contain object-right-bottom"
        />

        {/* Layer 5: Rumput Dasar Desktop */}
        <img
          src="/svg/rumput.svg"
          alt="Rumput Dasar Desktop"
          className="hidden md:block absolute bottom-[-5%] left-0 w-[105%] h-[20vh] lg:h-[55vh] scale-[1.05] object-cover object-top"
        />

        {/* Layer 6: Cahaya Lembah (Ellipse) di Atas Rumput */}
        <img
          src="/svg/Ellipse.svg"
          alt="Cahaya Lembah"
          className="absolute left-1/2 -translate-x-1/2 bottom-[-20%] md:bottom-[20%] lg:bottom-[-30%] w-[180%] md:w-[120%] lg:w-[120%] max-w-none object-contain pointer-events-none saturate-100 brightness-100"
        />

        {/* Layer 6.5: Awan Kecil (Depan Cahaya) */}
        <img
          src="/svg/awan-kecil.svg"
          alt="Awan Kecil Kiri"
          className="absolute bottom-[15%] md:bottom-[15%] lg:bottom-[20%] left-[5%] md:left-[10%] lg:left-[15%] w-[80%] md:w-[25%] lg:w-[20%] object-contain opacity-100 animate-float"
        />
      </div>

      {/* LAYER KONTEN UTAMA (Z-INDEX: 10) */}
      <div className="relative z-10 flex-1 flex flex-col w-full">
        {children}
      </div>
    </div>
  );
}
