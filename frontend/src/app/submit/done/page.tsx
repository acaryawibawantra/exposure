"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SubmitBackground from "@/components/SubmitBackground";
import GlassCard from "@/components/GlassCard";

export default function DonePage() {
  const router = useRouter();

  return (
    <SubmitBackground>
      <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 py-10 relative z-10 text-white">

        {/* ========================================= */}
        {/* LAYOUT MOBILE  INI di ganti ya cok                           */}
        {/* ========================================= */}
        <div className="flex md:hidden flex-col items-center w-full max-w-sm gap-6">
          {/* Header Mobile (Back & Logo) */}
          <div className="w-full flex items-center justify-between px-2">
            <button
              onClick={() => router.push("/submit")}
              className="text-white hover:opacity-80 p-2"
            >
              <img src="/icons/back.svg" alt="Back" className="w-8 h-8 filter invert object-contain" />
            </button>
            <img src="/icons/logo-icon-mobile.svg" alt="Exposure" className="h-14 w-auto object-contain" />
            <div className="w-12"></div>
          </div>

          {/* Slicing Area: Done Card Mobile */}
          <GlassCard className="w-full rounded-[2rem] p-6 flex flex-col items-center text-center border border-white/20">
            <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>

            <h2 className="text-2xl font-black font-freaky text-white tracking-wide uppercase mb-3">
              TRANSAKSI ANDA BERHASIL TERCATAT!
            </h2>
            <p className="text-xs text-white/80 mb-6 font-jakarta">
              Bukti transaksi Anda telah kami terima dan sedang diverifikasi. Peringkat Anda di Leaderboard akan diperbarui setelah proses verifikasi selesai.
            </p>

            {/* Slicing Area: Details Box */}
            <div className="w-full bg-white/10 rounded-2xl p-4 flex flex-col gap-2 font-jakarta text-xs text-left mb-6">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Total</span>
                <span className="font-bold">Rp500.000</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Total Akumulasi Transaksimu!</span>
                <span className="font-bold">Rp1.300.000</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Ranking kamu saat ini!</span>
                <span className="font-bold text-[#FFE64A]">#6</span>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              onClick={() => router.push("/")}
              className="w-full py-2.5 rounded-xl bg-pink-400 text-white font-bold text-xs tracking-wider hover:bg-pink-500 transition-colors mb-4 font-jakarta"
            >
              Cek Leaderboard Exposure di sini →
            </button>
          </GlassCard>

          {/* Slicing Area: Discount Box */}
          <GlassCard className="w-full rounded-2xl p-4 text-center border border-white/20">
            <h3 className="font-freaky text-xl text-[#FFE64A]">CLAIM YOUR 50K DISCOUNT!</h3>
          </GlassCard>

          {/* Submit More Button */}
          <button
            onClick={() => router.push("/submit")}
            className="w-full py-3 rounded-2xl bg-[#FFD747] text-neutral-900 font-freaky text-2xl tracking-wide shadow-[0_6px_0_0_#9ca3af] active:shadow-none active:translate-y-[6px] transition-all duration-75 cursor-pointer"
          >
            SUBMIT MORE RECEIPT
          </button>
        </div>

        {/* ========================================= */}
        {/* LAYOUT DESKTOP       ini juga di ganti                     */}
        {/* ========================================= */}
        <div className="hidden md:flex flex-col items-center w-full max-w-2xl gap-8">
          {/* Header Desktop */}
          <div className="w-full flex justify-between items-center px-4">
            <img src="/icons/logo-icon-mobile.svg" alt="Exposure" className="h-16 w-auto object-contain" />
            <div className="flex gap-4">
              <button onClick={() => router.push("/")} className="px-4 py-2 bg-white/20 rounded-xl text-sm font-bold">SPENDING LEADERBOARD</button>
              <button onClick={() => router.push("/submit")} className="px-4 py-2 bg-[#FFD747] text-black rounded-xl text-sm font-bold">SUBMIT YOUR RECEIPT</button>
            </div>
          </div>

          {/* Slicing Area: Done Card Desktop */}
          <GlassCard className="w-full rounded-[2.5rem] p-10 flex flex-col items-center text-center border border-white/20 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>

            <h1 className="text-3xl font-black font-freaky text-white tracking-widest uppercase mb-4">
              TRANSAKSI ANDA BERHASIL TERCATAT!
            </h1>
            <p className="text-sm text-white/80 mb-8 max-w-lg font-jakarta leading-relaxed">
              Bukti transaksi Anda telah kami terima dan sedang diverifikasi. Peringkat Anda di Leaderboard akan diperbarui setelah proses verifikasi selesai.
            </p>

            {/* Slicing Area: Details Box */}
            <div className="w-full max-w-md bg-white/10 rounded-2xl p-6 flex flex-col gap-3 font-jakarta text-sm text-left mb-8">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Total</span>
                <span className="font-bold">Rp500.000</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Total Akumulasi Transaksimu!</span>
                <span className="font-bold">Rp1.300.000</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Ranking kamu saat ini!</span>
                <span className="font-bold text-[#FFE64A] text-base">#6</span>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              onClick={() => router.push("/")}
              className="w-full max-w-md py-3 rounded-xl bg-pink-400 text-white font-bold text-sm tracking-wider hover:bg-pink-500 transition-colors mb-6 font-jakarta"
            >
              Cek Leaderboard Exposure di sini →
            </button>
          </GlassCard>

          {/* Slicing Area: Discount Box */}
          <GlassCard className="w-full max-w-2xl rounded-2xl p-6 text-center border border-white/20">
            <h3 className="font-freaky text-2xl text-[#FFE64A] tracking-wider">CLAIM YOUR 50K DISCOUNT!</h3>
          </GlassCard>

          {/* Submit More Button */}
          <button
            onClick={() => router.push("/submit")}
            className="w-full max-w-md py-4 rounded-2xl bg-[#FFD747] text-neutral-900 font-freaky text-2xl tracking-wide shadow-[0_6px_0_0_#9ca3af] active:shadow-none active:translate-y-[6px] transition-all duration-75 cursor-pointer"
          >
            SUBMIT MORE RECEIPT
          </button>
        </div>
      </div>
    </SubmitBackground>
  );
}
