import React from "react";
import GlassCard from "./GlassCard";

interface DesktopHeaderProps {
  onLeaderboardClick?: () => void;
  onSubmitClick?: () => void;
}

export default function DesktopHeader({
  onLeaderboardClick,
  onSubmitClick,
}: DesktopHeaderProps) {
  return (
    <GlassCard
      className="w-full rounded-full flex flex-row items-center justify-between px-5 md:px-8 mb-10"
      style={{ height: "70px" }}
    >
      {/* Logo Kiri */}
      <div className="flex items-center shrink-0">
        <img
          src="/icons/logo-icon-mobile.svg"
          alt="Exposure Logo"
          className="h-15 w-auto object-contain"
        />
      </div>

      {/* Tombol Kanan */}
      <div className="flex flex-row items-center gap-3 shrink-0">
        <button
          onClick={onLeaderboardClick}
          className="px-6 py-2 rounded-xl bg-white text-black font-freaky text-base md:text-lg tracking-wide shadow-[0_5px_0_0_#9ca3af] active:shadow-none active:translate-y-[5px] transition-all duration-75"
        >
          SPENDING LEADERBOARD
        </button>
        <button
          onClick={onSubmitClick}
          className="px-6 py-2 rounded-xl bg-[#FFD747] text-black font-freaky text-base md:text-lg tracking-wide shadow-[0_5px_0_0_#d4a400] active:shadow-none active:translate-y-[5px] transition-all duration-75"
        >
          SUBMIT YOUR RECEIPT
        </button>
      </div>
    </GlassCard>
  );
}
