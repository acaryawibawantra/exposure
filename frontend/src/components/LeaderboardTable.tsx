import React from "react";

interface LeaderboardTableProps {
  className?: string;
}

const leaderboardData = [
  { pos: 1, first: "LUTHFI", last: "PRASETYA", total: "560.000", gap: "-", color: "blue" },
  { pos: 2, first: "AHMAD N.", last: "HILALLI", total: "425.000", gap: "+135.000", color: "yellow" },
  { pos: 3, first: "LAGA", last: "WIRATAMA", total: "400.000", gap: "+25.000", color: "blue" },
  { pos: 4, first: "NAJIHA", last: "AULIA", total: "380.000", gap: "+20.000", color: "yellow" },
  { pos: 5, first: "RHANDY", last: "KUSUMA", total: "375.000", gap: "+5.000", color: "white" },
  { pos: 6, first: "AURELLIA", last: "LYSANDRA", total: "375.000", gap: "+0.000", color: "white" },
  { pos: 7, first: "VINCENTIUS", last: "ARIO", total: "340.000", gap: "+35.000", color: "white" },
  { pos: 8, first: "HUMAYRA", last: "HANUM", total: "320.000", gap: "+20.000", color: "white" },
  { pos: 9, first: "DHEA", last: "NOVA", total: "260.000", gap: "+60.000", color: "white" },
  { pos: 10, first: "KHANSA", last: "NUR EVITA", total: "250.000", gap: "+10.000", color: "white" },
  { pos: 11, first: "BINTANG", last: "PRAMUDYA", total: "230.000", gap: "+20.000", color: "white" },
  { pos: 12, first: "RISA", last: "AMELIA", total: "210.000", gap: "+20.000", color: "white" },
  { pos: 13, first: "ALDI", last: "FIRMANSYAH", total: "195.000", gap: "+15.000", color: "white" },
  { pos: 14, first: "NANDA", last: "PRATIWI", total: "170.000", gap: "+25.000", color: "white" },
  { pos: 15, first: "RIZKY", last: "MAULANA", total: "150.000", gap: "+20.000", color: "white" },
];

const rowBg: Record<string, string> = {
  blue: "bg-[#cde4f7]",
  yellow: "bg-[#ffe77a]",
  white: "bg-white/75",
};

export default function LeaderboardTable({ className = "" }: LeaderboardTableProps) {
  // Setiap baris tingginya ~52px (py-3 ≈ 24px + konten ~28px). 10 baris = 520px + padding + gap
  const ROW_H = 52;
  const VISIBLE_ROWS = 10;
  const GAP = 6;
  const PADDING = 6;
  const maxScrollHeight = VISIBLE_ROWS * ROW_H + (VISIBLE_ROWS - 1) * GAP + PADDING * 2;

  return (
    <div
      className={`w-full rounded-3xl shadow-2xl overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(200,180,240,0.55) 0%, rgba(180,200,255,0.55) 40%, rgba(240,180,220,0.55) 100%)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1.5px solid rgba(255,255,255,0.45)",
        boxShadow: "0 8px 40px rgba(120,80,180,0.18), inset 0 2px 8px rgba(255,255,255,0.35)",
      }}
    >
      {/* Header Tabel */}
      <div className="flex flex-row items-center px-4 md:px-8 py-4 font-black text-black text-xs md:text-sm lg:text-base border-b-[3px] border-[#611c38]">
        <div className="w-[15%] text-center tracking-tight">POSITION</div>
        <div className="w-[40%] text-left tracking-tight pl-2 md:pl-10">USERNAME</div>
        <div className="w-[22%] text-center tracking-tight">TOTAL</div>
        <div className="w-[23%] text-center tracking-tight">GAP</div>
      </div>

      {/* Data Tabel — Scrollable, tampil 10 baris pertama */}
      <div
        className="overflow-y-auto custom-scrollbar"
        style={{ maxHeight: `${maxScrollHeight}px` }}
      >
        <div className="flex flex-col gap-[6px] p-[6px]">
          {leaderboardData.map((row) => (
            <div
              key={row.pos}
              className={`flex flex-row items-center px-4 md:px-8 font-bold text-black text-xs md:text-sm lg:text-base shrink-0 rounded-xl ${rowBg[row.color]}`}
              style={{ minHeight: `${ROW_H}px` }}
            >
              <div className="w-[15%] text-center font-black text-base md:text-xl">{row.pos}</div>
              <div className="w-[40%] text-left pl-2 md:pl-10 uppercase">
                <span className="font-medium text-black/55">{row.first} </span>
                <span className="font-black">{row.last}</span>
              </div>
              <div className="w-[22%] text-center">{row.total}</div>
              <div className="w-[23%] text-center">{row.gap}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
