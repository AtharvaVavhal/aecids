"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

/** Exact Decorative Animated Network extracted from Lovable */
function NetworkBackdrop() {
  const edges = [
    "M120 340 L300 240",
    "M300 240 L500 300",
    "M500 300 L700 210",
    "M700 210 L880 300",
    "M300 240 L360 430",
    "M500 300 L560 470",
    "M700 210 L760 400",
    "M120 340 L200 500",
    "M880 300 L820 480",
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Ambient Spotlight */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {/* Dot Matrix Mask */}
      <div className="absolute inset-0 grid-dots opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      {/* 1000x560 SVG Graph */}
      <svg
        viewBox="0 0 1000 560"
        className="absolute inset-0 h-full w-full opacity-60 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,black,transparent)]"
        preserveAspectRatio="xMidYMid slice"
      >
        {edges.map((d, i) => (
          <g key={d}>
            {/* Static grey base line */}
            <path d={d} stroke="rgba(255, 255, 255, 0.14)" strokeWidth="1" fill="none" />
            {/* Traveling Dash Traffic Pulse */}
            <motion.path
              d={d}
              stroke={i % 2 === 0 ? "#2563EB" : "#06B6D4"}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="26 300"
              initial={{ strokeDashoffset: 320, opacity: 0 }}
              animate={{ strokeDashoffset: -60, opacity: [0, 0.9, 0] }}
              transition={{
                duration: 5.5,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {/* Static Node Circles */}
        {[
          [120, 340],
          [300, 240],
          [500, 300],
          [700, 210],
          [880, 300],
          [360, 430],
          [560, 470],
          [760, 400],
          [200, 500],
          [820, 480],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3"
            fill="#9CA3AF"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-28 pb-16">
      {/* 1. Exactly Extracted Background Layer */}
      <NetworkBackdrop />

      {/* 2. Foreground Hero Lockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Context Badge (mono eyebrow) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-10 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-400 shadow-inner shadow-white/5">
          <Shield className="w-3.5 h-3.5 text-status-green" />
          <span>Engineering Design &amp; Innovation · VIT Pune</span>
        </div>

        {/* Geometric Logo Mark */}
        <div className="mb-6 w-12 h-12 flex items-center justify-center">
          <svg
            viewBox="0 0 40 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M20 2L4 9V21C4 31.5 10.8 40.9 20 43C29.2 40.9 36 31.5 36 21V9L20 2Z"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M20 8L10 14V26L20 32L30 26V14L20 8Z"
              stroke="#06B6D4"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
            <circle cx="20" cy="20" r="2.5" fill="#06B6D4" />
            <line x1="20" y1="8" x2="20" y2="32" stroke="#1F2937" strokeWidth="1" />
            <line x1="10" y1="14" x2="30" y2="26" stroke="#1F2937" strokeWidth="1" />
            <line x1="30" y1="14" x2="10" y2="26" stroke="#1F2937" strokeWidth="1" />
          </svg>
        </div>

        {/* Title & Subtitle */}
        <h1 className="font-sans font-semibold text-5xl sm:text-7xl lg:text-8xl text-balance-tight tracking-tighter leading-[1.1] tracking-[-0.03em] text-white mb-6">
          AECIDS
        </h1>
        <p className="font-sans text-gray-300 leading-relaxed max-w-xl text-base sm:text-lg font-normal mb-10">
          Adaptive, explainable edge–cloud intrusion detection with confidence-calibrated
          intelligent routing for resource-constrained IoT networks.
        </p>

        {/* CTA Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#architecture"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-sans font-medium text-sm transition-all shadow-lg shadow-[#2563EB]/25 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            aria-label="Explore the system"
          >
            <span>Explore the system</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#research"
            className="px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 text-gray-200 font-medium text-sm transition-all backdrop-blur-md hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            aria-label="Read the research"
          >
            Read the research
          </a>
        </div>

        {/* Institutional Lockup: show provided VIT logo (falls back to text) */}
        <div className="inline-flex items-center gap-4 px-0 py-0 text-left">
          <img
            src="/vit-logo.png"
            alt="Vishwakarma Institute of Technology"
            className="h-16 md:h-20 w-auto object-contain"
            style={{ filter: 'brightness(1.1)' }}
            onError={(e) => {
              // Hide image if it fails to load; fallback to text below
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="sr-only">
            Vishwakarma Institute of Technology — Pune · Computer Engineering (SE)
          </div>
        </div>
      </motion.div>
    </section>
  );
}