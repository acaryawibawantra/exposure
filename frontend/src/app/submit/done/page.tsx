"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SubmitBackground from "@/components/SubmitBackground";

export default function DonePage() {
  const router = useRouter();

  return (
    <SubmitBackground>
      <div className="w-full min-h-[100dvh] flex flex-col items-center justify-start md:justify-center px-4 pt-6 pb-8 md:py-10 relative z-10 text-white">

        {/* ========================================= */}
        {/* LAYOUT MOBILE */}
        {/* ========================================= */}
        <div className="flex md:hidden flex-col items-center w-full max-w-[544px] gap-5">
          {/* Header Mobile (Back & Logo) */}
          <div className="w-full flex items-center justify-between px-2">
            <button
              onClick={() => router.push("/submit")}
              className="text-black hover:opacity-80 p-2"
            >
              <img src="/icons/back.svg" alt="Back" className="w-9 h-9 object-contain" />
            </button>
            <img src="/icons/logo-icon-mobile.svg" alt="Exposure" className="h-14 w-auto object-contain" />
            <div className="w-12"></div>
          </div>

          {/* Slicing Area: Ticket Card Mobile */}
          <div className="w-full aspect-[397/613] relative text-neutral-800 flex flex-col pt-[3%] pb-[4%] select-none">
            {/* Card Background SVG */}
            <div className="absolute inset-0 -z-10">
              <img
                src="/svg/Background-sukses.svg"
                alt="Ticket Background"
                className="w-full h-full object-fill drop-shadow-2xl"
              />
            </div>

            {/* Top Content Container (White Area) */}
            <div className="h-[78%] flex flex-col items-center justify-between px-5 pt-7 pb-4">
              {/* Checkmark Icon */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#16964C] text-white flex items-center justify-center border-[8px] border-white shadow-[0_8px_18px_rgba(0,0,0,0.28)] flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.4} stroke="currentColor" className="w-9 h-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="w-[275px] text-[22px] font-black font-freaky text-[#102F4C] uppercase text-center tracking-[0.04em] leading-[1.12] drop-shadow-[0_3px_0_rgba(11,43,69,0.18)]">
                TRANSAKSI ANDA BERHASIL TERCATAT!
              </h2>

              {/* Description */}
              <p className="max-w-[330px] text-[12px] text-neutral-700 font-jakarta font-medium leading-[1.35] text-center px-1">
                Bukti transaksi Anda telah kami terima dan sedang diverifikasi. Peringkat Anda di Leaderboard akan diperbarui setelah proses verifikasi selesai.
              </p>

              {/* Pink Dots Separator */}
              <div className="flex justify-center gap-1.5 w-full overflow-hidden flex-shrink-0">
                {[...Array(17)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#F59AC6] flex-shrink-0 shadow-[0_2px_5px_rgba(213,84,142,0.25)]" />
                ))}
              </div>

              {/* Transaction Details & Ranking */}
              <div className="w-[86%] flex flex-col gap-2">
                {/* Total */}
                <div className="w-full min-h-[44px] bg-[#F5F5F7] rounded-[14px] px-4 py-2 flex justify-between items-center font-jakarta shadow-[0_8px_18px_rgba(0,0,0,0.13)]">
                  <span className="text-neutral-700 text-[16px] font-medium leading-tight">Total</span>
                  <span className="font-extrabold text-neutral-900 text-[21px] leading-none">Rp500.000</span>
                </div>
                {/* Cumulative */}
                <div className="w-full min-h-[52px] bg-[#F5F5F7] rounded-[14px] px-4 py-2 flex justify-between items-center gap-4 font-jakarta shadow-[0_8px_18px_rgba(0,0,0,0.13)]">
                  <span className="max-w-[150px] text-neutral-700 text-[16px] font-medium leading-[1.1]">Total Akumulasi Transaksimu!</span>
                  <span className="font-extrabold text-neutral-900 text-[21px] leading-none whitespace-nowrap">Rp1.300.000</span>
                </div>
                {/* Ranking Highlight Box - Solid Yellow */}
                <div
                  className="w-full rounded-[14px] px-3 pt-2.5 pb-3 flex flex-col gap-3 font-jakarta shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
                  style={{ backgroundColor: "#FFEF88" }}
                >
                  <div className="flex justify-between items-center px-1" >
                    <span className="font-extrabold text-neutral-900 text-[16px] leading-none" >Ranking kamu saat ini!</span>
                    <span className="font-black text-neutral-900 text-[23px] leading-none">#6</span>
                  </div>
                  {/* Pink Button inside Ranking Box - Solid Pink */}
                  <button
                    onClick={() => router.push("/")}
                    className="w-full py-2.5 rounded-md text-neutral-900 font-jakarta font-semibold text-[16px] leading-none transition-colors shadow-[0_5px_0_0_#d47d94] active:shadow-none active:translate-y-[5px] duration-75 cursor-pointer"
                    style={{ backgroundColor: "#F4A5B8" }}
                  >
                    Cek Leaderboard Exposure di sini →
                  </button>
                </div>
              </div>
            </div>

            {/* Divider Container */}
            <div className="h-[2%] flex items-center">
              <div className="w-full border-t-[3px] border-dashed border-neutral-900 mx-7" />
            </div>

            {/* Bottom Content Container (Yellow/Cream Area) */}
            <div className="h-[18%] flex items-start justify-center px-6 pt-7">
              <h3 className="w-[200px] font-freaky text-[23px] text-[#102F4C] leading-[1.22] text-center uppercase drop-shadow-[0_3px_0_rgba(11,43,69,0.18)]">
                CLAIM YOUR 50K DISCOUNT!
              </h3>
            </div>
          </div>

          {/* Submit More Button */}
          <button
            onClick={() => router.push("/submit")}
            className="w-full py-4 rounded-[22px] bg-[#FFD747] text-neutral-900 font-freaky text-[27px] leading-none shadow-[0_7px_0_0_#9ca3af] active:shadow-none active:translate-y-[7px] transition-all duration-75 cursor-pointer"
          >
            SUBMIT MORE RECEIPT
          </button>
        </div>

        {/* ========================================= */}
        {/* LAYOUT DESKTOP */}
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

          {/* Slicing Area: Ticket Card Desktop */}
          <div className="w-full max-w-[397px] aspect-[397/613] relative text-neutral-800 flex flex-col pt-[3%] pb-[4%] select-none">
            {/* Card Background SVG */}
            <div className="absolute inset-0 -z-10">
              <img
                src="/svg/Background-sukses.svg"
                alt="Ticket Background"
                className="w-full h-full object-fill drop-shadow-2xl"
              />
            </div>

            {/* Top Content Container (White Area) */}
            <div className="h-[71%] flex flex-col items-center justify-between px-6 pt-4 pb-2">
              {/* Checkmark Icon */}
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center border-[3px] border-white shadow-md flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-base font-black font-freaky text-neutral-800 tracking-wide uppercase leading-tight text-center">
                TRANSAKSI ANDA BERHASIL TERCATAT!
              </h2>

              {/* Description */}
              <p className="text-[10px] text-neutral-500 font-jakarta leading-relaxed text-center px-1">
                Bukti transaksi Anda telah kami terima dan sedang diverifikasi. Peringkat Anda di Leaderboard akan diperbarui setelah proses verifikasi selesai.
              </p>

              {/* Pink Dots Separator */}
              <div className="flex justify-center gap-1.5 w-full overflow-hidden flex-shrink-0">
                {[...Array(17)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-pink-300 flex-shrink-0" />
                ))}
              </div>

              {/* Transaction Details & Ranking */}
              <div className="w-full flex flex-col gap-1">
                {/* Total */}
                <div className="w-full bg-[#F5F5F7] rounded-xl px-4 py-1.5 flex justify-between items-center font-jakarta">
                  <span className="text-neutral-500 text-[10px]">Total</span>
                  <span className="font-extrabold text-neutral-800 text-xs">Rp500.000</span>
                </div>
                {/* Cumulative */}
                <div className="w-full bg-[#F5F5F7] rounded-xl px-4 py-1.5 flex justify-between items-center font-jakarta">
                  <span className="text-neutral-500 text-[10px]">Total Akumulasi Transaksimu!</span>
                  <span className="font-extrabold text-neutral-800 text-xs">Rp1.300.000</span>
                </div>
                {/* Ranking Highlight Box - Solid Yellow */}
                <div
                  className="w-full rounded-xl p-2 flex flex-col gap-2 font-jakarta shadow-inner"
                  style={{ backgroundColor: "#FFE64A" }}
                >
                  <div className="flex justify-between items-center px-1">
                    <span className="font-bold text-neutral-800 text-[10px]">Ranking kamu saat ini!</span>
                    <span className="font-black text-neutral-900 text-sm">#6</span>
                  </div>
                  {/* Pink Button inside Ranking Box - Solid Pink */}
                  <button
                    onClick={() => router.push("/")}
                    className="w-full py-1.5 rounded-lg text-neutral-800 font-extrabold text-[10px] tracking-wider transition-colors shadow-[0_2.5px_0_0_#d37c8e] active:shadow-none active:translate-y-[2.5px] duration-75 cursor-pointer"
                    style={{ backgroundColor: "#F4A5B8" }}
                  >
                    Cek Leaderboard Exposure di sini →
                  </button>
                </div>
              </div>
            </div>

            {/* Divider Container */}
            <div className="h-[2%] flex items-center">
              <div className="w-full border-t border-dashed border-neutral-300 mx-5" />
            </div>

            {/* Bottom Content Container (Yellow/Cream Area) */}
            <div className="h-[20%] flex items-center justify-center px-6">
              <h3 className="font-freaky text-lg text-neutral-800 tracking-wider text-center uppercase">
                CLAIM YOUR 50K DISCOUNT!
              </h3>
            </div>
          </div>

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
