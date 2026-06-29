"use client";

import MainBackground from "@/components/MainBackground";
import GlassCard from "@/components/GlassCard";
import LeaderboardTable from "@/components/LeaderboardTable";
import DesktopHeader from "@/components/DesktopHeader";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [introState, setIntroState] = useState<'start' | 'intro' | 'main'>('start');

  useEffect(() => {
    // Urutan animasi: 
    // 0ms: start (background kosong)
    // 500ms: intro (logo muncul)
    // 3000ms: main (logo hilang, masuk ke konten utama)
    const t1 = setTimeout(() => setIntroState('intro'), 500);
    const t2 = setTimeout(() => setIntroState('main'), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <MainBackground>
      {/* INTRO SCREEN (Hanya di Mobile) */}
      <div
        className={`md:hidden absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${introState === 'main' ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        {/* Wadah Logo Intro + Shimmer */}
        <div className={`relative w-[85%] max-w-sm drop-shadow-2xl flex items-center justify-center transition-all duration-1000 transform ${introState === 'start' ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
          <img
            src="/icons/logo-mobile.svg"
            alt="Exposure Solstice 2026"
            className="w-full object-contain"
          />
        </div>
      </div>

      <main
        className={`flex-1 flex flex-col w-full relative z-10 transition-opacity duration-1000 ${introState === 'main' ? 'opacity-100' : 'opacity-0 md:opacity-100'
          }`}
      >
        {/* ========================================= */}
        {/* LAYOUT MOBILE (Hanya tampil di layar HP)    */}
        {/* 1 Layar penuh, tidak di-scroll            */}
        {/* ========================================= */}
        <div className="flex md:hidden flex-col items-center justify-between h-[100dvh] pt-12 pb-10 px-6 relative z-10">

          {/* Header Mobile (Logo Atas) */}
          <div className="w-full flex justify-center mt-2 shrink-0">
            <img src="/icons/logo-icon-mobile.svg" alt="Logo Exposure Mobile" className="h-16 w-24 object-contain" />
          </div>

          {/* Center Graphic (Spend More To Win Prizes) */}
          <div className="w-full flex-1 flex flex-col items-center justify-center -my-4 z-20">
            <img src="/icons/hero-mobile.svg" alt="Spend More To Win Prizes" className="w-[90%] max-w-[90%] object-contain scale-[1.15]" />
          </div>

          {/* Tombol Bawah (Di atas rumput) */}
          <div className="w-full max-w-sm flex flex-col gap-4 mb-12 shrink-0 z-30 px-2">
            {/* Tombol Putih */}
            <button
              onClick={() => router.push("/leaderboard")}
              className="w-full py-3 rounded-2xl bg-white text-black font-freaky text-2xl tracking-wide shadow-[0_6px_0_0_#9ca3af] active:shadow-none active:translate-y-[6px] transition-all duration-75 cursor-pointer"
            >
              SPENDING LEADERBOARD
            </button>

            {/* Tombol Kuning */}
            <button
              onClick={() => router.push("/submit")}
              className="w-full py-3 rounded-2xl bg-[#FFD747] text-black font-freaky text-2xl tracking-wide shadow-[0_6px_0_0_#9ca3af] active:shadow-none active:translate-y-[6px] transition-all duration-75 cursor-pointer"
            >
              SUBMIT YOUR RECEIPT
            </button>
          </div>

        </div>

        {/* ========================================= */}
        {/* LAYOUT DESKTOP (Hanya tampil di PC/Tablet)  */}
        {/* Scroll panjang ke bawah                   */}
        {/* ========================================= */}
        <div className="hidden md:flex flex-col w-full">
          {/* SECTION 1: HEADER & LEADERBOARD (Kira-kira 1 layar penuh) */}
          <section className="w-full min-h-[100dvh] flex flex-col items-center justify-start pt-8 md:pt-12 px-4 md:px-10 max-w-7xl mx-auto">

            {/* Desktop Header */}
            <DesktopHeader
              onLeaderboardClick={() => router.push("/")}
              onSubmitClick={() => router.push("/submit")}
            />

            {/* Logo EXPOSURE & Judul */}
            <div className="flex flex-col items-center justify-center w-full mb-6">
              {/* Group Logo: logo-desktop2.svg + matahari berputar */}
              <div className="relative w-[55%] max-w-xl mb-3">
                {/* Base Logo */}
                <img
                  src="/icons/logo-desktop2.svg"
                  alt="Exposure Solstice 2026"
                  className="w-full object-contain drop-shadow-xl"
                />
                {/* Matahari berputar — diposisikan di lubang huruf O */}
                <img
                  src="/icons/logo-matahari.svg"
                  alt="Matahari"
                  className="absolute animate-spin-slow"
                  style={{
                    /* Sesuaikan nilai ini sampai matahari tepat di lubang O */
                    top: "10%",
                    left: "35%",
                    width: "20%",
                    transformOrigin: "center center",
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-freaky text-white tracking-wider uppercase text-center">
                TRANSACTION LEADERBOARD
              </h1>
            </div>

            {/* LIVE LEADERBOARD & TIMER */}
            <div className="flex flex-row items-center justify-center gap-6 mb-8 w-full">
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#FF4C8B] animate-pulse shadow-[0_0_10px_#FF4C8B]"></div>
                <h2 className="text-2xl md:text-4xl font-freaky font-black tracking-wide text-black drop-shadow-sm">
                  LIVE LEADERBOARD
                </h2>
              </div>

              <GlassCard className="flex flex-row items-center gap-4 px-6 py-2 rounded-xl">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-black leading-none">02</span>
                  <span className="text-[10px] font-bold text-black/60 tracking-wider">DAYS</span>
                </div>
                <div className="text-2xl font-black text-black/20 leading-none">:</div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-black leading-none">16</span>
                  <span className="text-[10px] font-bold text-black/60 tracking-wider">HOURS</span>
                </div>
                <div className="text-2xl font-black text-black/20 leading-none">:</div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-black leading-none">45</span>
                  <span className="text-[10px] font-bold text-black/60 tracking-wider">MINUTES</span>
                </div>
              </GlassCard>
            </div>

            {/* TABEL LEADERBOARD */}
            <LeaderboardTable className="w-full max-w-5xl mb-10" />
          </section>

          {/* SECTION 2: PRIZES (Terletak di dalam lembah rumput) */}
          <section className="w-full min-h-[50vh] flex flex-col items-center justify-start pt-10 pb-20 px-4 md:px-6 relative z-30">
            <h2 className="text-5xl md:text-[5rem] font-black font-freaky text-white mb-15 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] tracking-wider">
              PRIZES!
            </h2>
            <GlassCard className="w-full max-w-5xl h-[300px] md:h-[400px] rounded-[2rem] flex flex-col items-center justify-center p-8 shadow-2xl">
              {/* Tempat aset visual tumpukan hadiah nanti */}
              <div className="text-white/40 text-xl font-bold tracking-widest uppercase">
                [ Area Gambar Hadiah ]
              </div>
            </GlassCard>
          </section>

          {/* SECTION 3: FOOTER / WATERMARK */}
          <section className="w-full flex flex-col items-center justify-end pb-8 mt-auto relative z-30">
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src="/icons/logo-icon-mobile.svg"
                alt="Exposure Logo Small"
                className="h-20 md:h-16 w-auto object-contain opacity-80"
              />
              <p className="text-white font-bold text-sm drop-shadow-md">
                Copyright @ EXPOSURE 2026
              </p>
            </div>
          </section>
        </div>

      </main>
    </MainBackground>
  );
}
