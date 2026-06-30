"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import SubmitBackground from "@/components/SubmitBackground";

const TRANSITION_MS = 2800;

const CLOUD_ROWS = [
  { top: "-5%", scale: 1.3 },
  { top: "18%", scale: 1.5 },
  { top: "40%", scale: 1.4 },
  { top: "62%", scale: 1.6 },
  { top: "82%", scale: 1.35 },
];

export default function TransitionPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/submit/done");
    }, TRANSITION_MS);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SubmitBackground>
      {/* ========================================= */}
      {/* LAYOUT MOBILE — logo + cloud transition   */}
      {/* ========================================= */}
      <div className="md:hidden relative min-h-[100dvh] w-full overflow-hidden">
        {/* Soft pastel backdrop matching Figma */}
        <div className="fixed inset-0 z-[5] bg-[#faf9f6]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_35%,rgba(216,180,254,0.35),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(251,182,206,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_90%,rgba(134,239,172,0.2),transparent_45%)]" />
        </div>

        {/* Logo */}
        <div className="relative z-20 flex justify-center pt-14">
          <img
            src="/icons/logo-icon-mobile.svg"
            alt="Exposure"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Cloud transition overlay */}
        <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
          {/* Big clouds sliding in from left & right */}
          <img
            src="/svg/awan.svg"
            alt=""
            aria-hidden
            className="absolute top-[12%] left-0 w-[130vw] max-w-none animate-cloud-from-left"
          />
          <img
            src="/svg/awan.svg"
            alt=""
            aria-hidden
            className="absolute top-[30%] right-0 w-[130vw] max-w-none animate-cloud-from-right"
          />
          <img
            src="/svg/awan.svg"
            alt=""
            aria-hidden
            className="absolute top-[55%] right-0 w-[130vw] max-w-none animate-cloud-from-left"
          />
          <img
            src="/svg/awan.svg"
            alt=""
            aria-hidden
            className="absolute top-[70%] right-0 w-[130vw] max-w-none animate-cloud-from-right"
          />

          {/* Cloud wall that fills the screen left → right */}
          {/* <div className="absolute inset-0 animate-cloud-fill-ltr">
            <div className="absolute inset-0 w-[160vw] h-full">
              {CLOUD_ROWS.map((row, i) => (
                <img
                  key={i}
                  src="/svg/awan.svg"
                  alt=""
                  aria-hidden
                  className="absolute left-0 w-full max-w-none h-auto"
                  style={{
                    top: row.top,
                    transform: `scale(${row.scale})`,
                    transformOrigin: "left center",
                  }}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* ========================================= */}
      {/* LAYOUT DESKTOP                           */}
      {/* ========================================= */}
      <div className="hidden md:flex flex-col items-center justify-center min-h-[100dvh] w-full px-6 relative z-10 text-white text-center gap-8">
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/icons/logo-icon-mobile.svg"
            alt="Exposure"
            className="h-20 w-auto object-contain"
          />
        </div>

        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center animate-spin-slow">
          <img
            src="/icons/logo-matahari.svg"
            alt="Processing"
            className="w-16 h-16 object-contain"
          />
        </div>

        <h1 className="text-4xl font-black font-freaky tracking-widest uppercase">
          PROCESSING TRANSACTION...
        </h1>
        <p className="text-base font-jakarta opacity-80 max-w-md">
          Mohon jangan menutup halaman ini selama transaksi Anda sedang divalidasi.
        </p>
      </div>
    </SubmitBackground>
  );
}
