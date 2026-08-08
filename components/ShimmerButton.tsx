"use client";

import React from "react";

export function ShimmerButton({
  children,
  onClick,
  href,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const content = (
    <div
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] font-medium transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {/* Spinning Angular Shimmer Gradient */}
      <span className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#06B6D4_100%)] opacity-80" />

      {/* Button Core Surface */}
      <div className="relative z-10 flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-blue-600">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}