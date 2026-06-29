"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SubmitBackground from "@/components/SubmitBackground";
import GlassCard from "@/components/GlassCard";
import DesktopHeader from "@/components/DesktopHeader";
import ReceiptCard, { ReceiptData } from "@/components/ReceiptCard";

const TENANTS_LIST = [
  "Union",
  "H&M",
  "Zara",
  "Starbucks",
  "Bakmi GM",
  "KFC",
  "McDonald's",
  "Sushitei",
  "Uniqlo",
  "IKEA",
  "Ace Hardware",
  "Other Tenant",
];

export default function SubmitPage() {
  const router = useRouter();

  // Form State
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [receipts, setReceipts] = useState<ReceiptData[]>([
    {
      id: "1",
      file: null,
      tenant: "",
      date: "2026-07-24", // Default date based on Figma design
    },
  ]);
  const [agreed, setAgreed] = useState(false);

  // Form handling state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Total Accumulation matching Figma design
  const totalAccumulation = 500000;

  // Formatter for Currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(val)
      .replace("Rp", "Rp"); // keeps standard formatting
  };

  const handleReceiptChange = (id: string, updatedFields: Partial<ReceiptData>) => {
    setReceipts((prev) =>
      prev.map((receipt) =>
        receipt.id === id ? { ...receipt, ...updatedFields } : receipt
      )
    );
  };

  const handleAddReceipt = () => {
    setReceipts((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        file: null,
        tenant: "",
        date: "2026-07-24",
      },
    ]);
  };

  const handleRemoveReceipt = (id: string) => {
    if (receipts.length === 1) return; // Always keep at least one
    setReceipts((prev) => prev.filter((r) => r.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validations
    if (!email.trim() || !username.trim() || !phone.trim()) {
      setError("Semua data identitas wajib diisi.");
      return;
    }

    if (!agreed) {
      setError("Anda harus menyetujui pernyataan validitas transaksi.");
      return;
    }

    // Verify all receipt entries are populated
    for (let i = 0; i < receipts.length; i++) {
      const receipt = receipts[i];
      if (!receipt.file) {
        setError(`Bukti pembayaran untuk Struk ${i + 1} belum diunggah.`);
        return;
      }
      if (!receipt.tenant) {
        setError(`Nama tenant untuk Struk ${i + 1} belum dipilih.`);
        return;
      }
      if (!receipt.date) {
        setError(`Tanggal transaksi untuk Struk ${i + 1} belum ditentukan.`);
        return;
      }
    }

    // Process submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setEmail("");
    setUsername("");
    setPhone("");
    setReceipts([
      {
        id: "1",
        file: null,
        tenant: "",
        date: "2026-07-24",
      },
    ]);
    setAgreed(false);
    setShowSuccess(false);
    setError(null);
  };

  return (
    <SubmitBackground>
      {/* Header Mobile Layout (Back arrow + Logos) */}
      <div className="md:hidden flex items-center justify-between px-6 pt-6 shrink-0 w-full relative z-20">
        <Link href="/" className="text-black hover:text-black/70 transition-colors p-2 -ml-2">
          {/* Custom Back Arrow */}
          <img src="/icons/back.svg" alt="Back" className="w-8 h-8 object-contain" />
        </Link>
        <div className="flex items-center gap-2">
          <img src="/icons/logo-icon-mobile.svg" alt="Exposure" className="h-15 w-auto object-contain" />
        </div>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      <div className="w-full flex-1 flex flex-col relative z-10 overflow-y-auto md:overflow-hidden min-h-0 no-scrollbar">
        {/* ========================================= */}
        {/* DESKTOP HEADER                            */}
        {/* ========================================= */}
        <div className="hidden md:block w-full max-w-7xl mx-auto px-10 pt-8 shrink-0">
          <DesktopHeader
            onLeaderboardClick={() => router.push("/")}
            onSubmitClick={() => { }}
          />
        </div>

        {/* ========================================= */}
        {/* MAIN CONTAINER FOR CONTENT                */}
        {/* ========================================= */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-7xl mx-auto px-4 md:px-10 pb-20 md:pb-6 flex-1 flex flex-col min-h-0"
        >
          {/* Error Message Alert */}
          {error && (
            <div className="w-full max-w-5xl mx-auto mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl relative">
              <span className="block sm:inline font-semibold font-jakarta">{error}</span>
            </div>
          )}

          {/* ========================================= */}
          {/* MOBILE VIEW LAYOUT                        */}
          {/* ========================================= */}
          <div className="flex md:hidden flex-col gap-6 w-full">
            {/* Header Title */}
            <div className="flex flex-col items-center text-center mt-2">
              <h3 className="text-3xl font-black font-freaky text-brand-magenta tracking-wider uppercase drop-shadow-sm">
                HELLO, EXPEEPS!
              </h3>
              {/* Instructions Box */}
              <div className="w-full bg-white rounded-xl p-4 mt-4 border border-black/5 shadow-md text-sm text-neutral-800 leading-relaxed font-jakarta">
                <span className="font-bold">Upload bukti pembayaranmu</span> sekarang dan raih kesempatan
                untuk masuk ke Leaderboard serta <span className="font-bold">menangkan Grand Prize</span>{" "}
                menarik di akhir acara 🏆
              </div>
            </div>

            {/* Identitas Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-black font-freaky text-[#951361] tracking-wide uppercase">
                IDENTITAS
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 font-jakarta">
                  <label className="text-sm font-bold text-neutral-800">Email Address*</label>
                  <input
                    type="email"
                    required
                    placeholder="Masukkan email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-2xl px-5 py-3 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-[#f48fb1] font-jakarta"
                  />
                </div>

                <div className="flex flex-col gap-1.5 font-jakarta">
                  <label className="text-sm font-bold text-neutral-800">Username*</label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan username Anda"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-2xl px-5 py-3 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-[#f48fb1] font-jakarta"
                  />
                  <span className="text-[10px] text-neutral-600 leading-tight">
                    *Username ini akan menjadi identitas Anda di Leaderboard dan digunakan untuk seluruh transaksi berikutnya
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 font-jakarta">
                  <label className="text-sm font-bold text-neutral-800">Nomor Telepon*</label>
                  <input
                    type="tel"
                    required
                    placeholder="Masukkan nomor telepon Anda"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-2xl px-5 py-3 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-[#f48fb1] font-jakarta"
                  />
                </div>
              </div>
            </div>

            {/* Bukti Transaksi Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-black font-freaky text-[#951361] tracking-wide uppercase">
                BUKTI TRANSAKSI
              </h2>
              <div className="flex flex-col">
                {receipts.map((receipt, index) => (
                  <ReceiptCard
                    key={receipt.id}
                    index={index}
                    data={receipt}
                    onChange={handleReceiptChange}
                    onRemove={receipts.length > 1 ? handleRemoveReceipt : undefined}
                    tenants={TENANTS_LIST}
                  />
                ))}

                {/* Add Receipt Button */}
                <button
                  type="button"
                  onClick={handleAddReceipt}
                  className="w-full py-2 rounded-2xl border-2 border-dashed border-neutral-500 bg-[#ffe082]/20 hover:bg-[#ffe082]/45 text-neutral-800 font-bold text-sm tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 font-jakarta"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Tambah bukti pembayaran
                </button>
              </div>
            </div>

            {/* Summary Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-black font-freaky text-[#951361] tracking-wide uppercase">
                SUMMARY
              </h2>
              {/* Total Card with pure CSS Gradient */}
              <div className="w-full bg-gradient-to-r from-white via-white via-[55%] to-[#FFE64A] rounded-xl py-4 px-5 sm:px-8 flex flex-row items-center justify-between shadow-md">
                <span className="font-medium text-neutral-800 text-xs sm:text-[15px] whitespace-nowrap font-jakarta">
                  Total Akumulasi Transaksi
                </span>
                <span className="font-black text-lg sm:text-2xl text-neutral-900 font-jakarta">
                  {formatCurrency(totalAccumulation)}
                </span>
              </div>

              {/* Validation Checkbox */}
              <label className="flex flex-row items-start gap-3 px-2 py-1 cursor-pointer font-jakarta">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4.5 h-4.5 text-brand-magenta border-neutral-300 rounded focus:ring-[#f48fb1]"
                />
                <span className="text-[11px] text-neutral-700 leading-tight font-medium">
                  Saya menyatakan bahwa bukti transaksi yang saya unggah adalah benar, valid, dan sesuai dengan transaksi yang saya lakukan.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 mt-2 rounded-2xl bg-[#FFD747] text-neutral-900 font-freaky text-2xl tracking-wide shadow-[0_6px_0_0_#9ca3af] active:shadow-none active:translate-y-[6px] hover:brightness-105 transition-all duration-75 flex items-center justify-center cursor-pointer"
              >
                {isSubmitting ? "PROCESSING..." : "SUBMIT YOUR RECEIPT"}
              </button>
            </div>
          </div>

          {/* ========================================= */}
          {/* DESKTOP VIEW LAYOUT                       */}
          {/* ========================================= */}
          <div className="hidden md:grid grid-cols-12 gap-8 w-full max-w-6xl mx-auto flex-1 min-h-0">
            {/* Left Column (Forms & Uploads) - Cols: 7 */}
            <div className="col-span-7 flex flex-col gap-6 h-full overflow-y-auto pr-3 no-scrollbar pb-6">
              {/* HELLO Section */}
              <div className="flex flex-col">
                <h1 className="text-5xl font-black font-freaky text-white tracking-wider uppercase drop-shadow-md">
                  HELLO, EXPEEPS!
                </h1>
                {/* Instructions Box */}
                <div className="w-full bg-white/20 backdrop-blur-md rounded-[1.5rem] p-5 mt-4 border border-white/10 text-sm text-white leading-relaxed font-jakarta">
                  <span className="font-bold">Upload bukti pembayaranmu</span> sekarang dan raih kesempatan
                  untuk masuk ke Leaderboard serta <span className="font-bold">menangkan Grand Prize</span>{" "}
                  menarik di akhir acara 🏆
                </div>
              </div>

              {/* Bukti Transaksi */}
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-black font-freaky text-white tracking-wide uppercase drop-shadow-sm">
                  BUKTI TRANSAKSI
                </h2>
                <div className="flex flex-col gap-4">
                  {receipts.map((receipt, index) => (
                    <ReceiptCard
                      key={receipt.id}
                      index={index}
                      data={receipt}
                      onChange={handleReceiptChange}
                      onRemove={receipts.length > 1 ? handleRemoveReceipt : undefined}
                      tenants={TENANTS_LIST}
                    />
                  ))}

                  {/* Add Receipt Button */}
                  <button
                    type="button"
                    onClick={handleAddReceipt}
                    className="w-full py-4 rounded-2xl border-2 border-dashed border-white/40 hover:border-white bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 font-jakarta"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Tambah bukti pembayaran
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (Identity & Summary) - Cols: 5 */}
            <div className="col-span-5 flex flex-col gap-6 h-full pb-6">
              {/* Identitas Section */}
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-black font-freaky text-white tracking-wide uppercase drop-shadow-sm">
                  IDENTITAS
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5 font-jakarta">
                    <label className="text-sm font-bold text-white drop-shadow-sm">Email Address*</label>
                    <input
                      type="email"
                      required
                      placeholder="Masukkan email Anda"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/30 backdrop-blur-xs border border-white/20 rounded-2xl px-5 py-3 text-sm text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#f48fb1] shadow-inner font-jakarta"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 font-jakarta">
                    <label className="text-sm font-bold text-white drop-shadow-sm">Username*</label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan username Anda"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-white/30 backdrop-blur-xs border border-white/20 rounded-2xl px-5 py-3 text-sm text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#f48fb1] shadow-inner font-jakarta"
                    />
                    <span className="text-[10px] text-white/80 leading-tight drop-shadow-sm">
                      *Username ini akan menjadi identitas Anda di Leaderboard dan digunakan untuk seluruh transaksi berikutnya
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 font-jakarta">
                    <label className="text-sm font-bold text-white drop-shadow-sm">Nomor Telepon*</label>
                    <input
                      type="tel"
                      required
                      placeholder="Masukkan nomor telepon Anda"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/30 backdrop-blur-xs border border-white/20 rounded-2xl px-5 py-3 text-sm text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#f48fb1] shadow-inner font-jakarta"
                    />
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="flex flex-col gap-4 mt-4">
                {/* Total Card with pure CSS Gradient */}
                <div className="w-full bg-gradient-to-r from-white via-white via-[55%] to-[#FFE64A] border border-white/20 rounded-3xl py-4 px-6 sm:px-8 flex flex-col lg:flex-row gap-2 lg:gap-0 items-start lg:items-center justify-between shadow-md">
                  <span className="font-medium text-neutral-800 text-xs sm:text-[15px] whitespace-normal lg:whitespace-nowrap leading-tight font-jakarta">
                    Total Akumulasi Transaksi
                  </span>
                  <span className="font-black text-xl sm:text-2xl text-neutral-900 font-jakarta">
                    {formatCurrency(totalAccumulation)}
                  </span>
                </div>

                {/* Validation Checkbox */}
                <label className="flex flex-row items-start gap-3 px-1 py-1 cursor-pointer font-jakarta">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4.5 h-4.5 text-brand-magenta border-white/30 rounded focus:ring-[#f48fb1]"
                  />
                  <span className="text-xs text-white/95 leading-normal font-medium drop-shadow-sm">
                    Saya menyatakan bahwa bukti transaksi yang saya unggah adalah benar, valid, dan sesuai dengan transaksi yang saya lakukan.
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 rounded-2xl bg-[#FFD747] text-neutral-900 font-freaky text-2xl tracking-wide shadow-[0_6px_0_0_#9ca3af] active:shadow-none active:translate-y-[6px] hover:brightness-105 transition-all duration-75 flex items-center justify-center cursor-pointer"
                >
                  {isSubmitting ? "PROCESSING..." : "SUBMIT YOUR RECEIPT"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* ========================================= */}
      {/* PREMIUM SUCCESS MODAL                     */}
      {/* ========================================= */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Container */}
          <GlassCard className="relative z-10 w-full max-w-md rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl border border-white/20 animate-logo-pop">
            {/* Sparkle/Check Icon */}
            <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-black font-freaky text-white tracking-wide uppercase mb-2">
              SUBMIT SUCCESS!
            </h2>
            <p className="text-white/80 text-sm mb-6 font-jakarta">
              Bukti transaksi Anda berhasil diunggah dan sedang diproses. Mohon tunggu proses validasi untuk memperbarui posisi Anda di Leaderboard.
            </p>

            {/* Summary Details inside Modal */}
            <div className="w-full bg-white/10 rounded-2xl p-4 mb-6 border border-white/5 text-left text-xs text-white flex flex-col gap-2 font-jakarta">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="opacity-70">Username:</span>
                <span className="font-bold">{username}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="opacity-70">Jumlah Struk:</span>
                <span className="font-bold">{receipts.length} Struk</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="opacity-70">Total Transaksi:</span>
                <span className="font-bold text-[#FFD747] text-sm">{formatCurrency(totalAccumulation)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full font-jakarta">
              <button
                onClick={() => router.push("/")}
                className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm tracking-wider hover:bg-neutral-100 transition-colors shadow-md cursor-pointer"
              >
                KEMBALI KE LEADERBOARD
              </button>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-transparent border border-white text-white font-bold text-sm tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                UNGGAH STRUK LAGI
              </button>
            </div>
          </GlassCard>
        </div>
      )}
    </SubmitBackground>
  );
}
