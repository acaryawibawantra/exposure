"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import SubmitBackground from "@/components/SubmitBackground";

export default function TransitionPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulasi transisi selama 3 detik sebelum otomatis ke halaman Done
    const timer = setTimeout(() => {
      router.push("/submit/done");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SubmitBackground>
      <div className="flex flex-col items-center justify-center min-h-[100dvh] w-full px-6 relative z-10 text-white">
        {/* ========================================= */}
        {/* LAYOUT MOBILE  ini di ganti, sesuaiiin sama di figma cuma transisis image awan besar geser dari kanan dan kiri aja                           */}
        {/* ========================================= */}
        <div className="flex md:hidden flex-col items-center justify-center text-center gap-6">
          {/* Logo Atas */}
          <div className="flex items-center gap-2 mb-8">
            <img src="/icons/logo-icon-mobile.svg" alt="Exposure" className="h-16 w-auto object-contain" />
          </div>

          <h2 className="text-2xl font-black font-freaky tracking-wider uppercase">
            PROCESSING TRANSACTION...
          </h2>
          <p className="text-sm font-jakarta opacity-80">
            Mohon tunggu sebentar, transaksi Anda sedang diproses.
          </p>
        </div>

        {/* ========================================= */}
        {/* LAYOUT DESKTOP   ini juga ganti seusiaiin sama di figma, image matahari nya udah ada                         */}
        {/* ========================================= */}
        <div className="hidden md:flex flex-col items-center justify-center text-center gap-8">
          <div className="flex items-center gap-3 mb-6">
            <img src="/icons/logo-icon-mobile.svg" alt="Exposure" className="h-20 w-auto object-contain" />
          </div>

          {/* Slicing Area untuk animasi matahari berputar di desktop */}
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center animate-spin-slow">
            <img src="/icons/logo-matahari.svg" alt="Processing" className="w-16 h-16 object-contain" />
          </div>

          <h1 className="text-4xl font-black font-freaky tracking-widest uppercase">
            PROCESSING TRANSACTION...
          </h1>
          <p className="text-base font-jakarta opacity-80 max-w-md">
            Mohon jangan menutup halaman ini selama transaksi Anda sedang divalidasi.
          </p>
        </div>
      </div>
    </SubmitBackground>
  );
}
