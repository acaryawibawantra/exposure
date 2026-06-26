import React from "react";
import { twMerge } from "tailwind-merge";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden bg-white/20 backdrop-blur-md",
        "border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
        "shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]", // Inner highlight for glass effect
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
