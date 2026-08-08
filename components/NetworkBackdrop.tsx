"use client";

import React from "react";
import { motion } from "framer-motion";

const NODES = [
  // Left wing
  { cx: 160, cy: 520, r: 3 },
  { cx: 280, cy: 410, r: 4 },
  { cx: 380, cy: 410, r: 3 },
  { cx: 430, cy: 640, r: 3 },
  { cx: 120, cy: 680, r: 4 },
  // Right wing
  { cx: 820, cy: 370, r: 4 },
  { cx: 910, cy: 480, r: 3 },
  { cx: 1040, cy: 490, r: 3 },
  { cx: 1070, cy: 610, r: 4 },
  { cx: 890, cy: 600, r: 3 },
];

const EDGES = [
  // Left wing paths
  "M 160 520 L 280 410",
  "M 280 410 L 380 410",
  "M 380 410 L 430 640",
  "M 160 520 L 120 680",
  "M 280 410 L 430 640",
  // Right wing paths
  "M 820 370 L 910 480",
  "M 910 480 L 1040 490",
  "M 1040 490 L 1070 610",
  "M 820 370 L 890 600",
  "M 910 480 L 890 600",
];

export function NetworkBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Top Center Radial Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-accent-blue/15 via-accent-cyan/10 to-transparent blur-[140px] rounded-full" />

      {/* 2. Radial-Masked Dot Matrix Overlay */}
      <div className="absolute inset-0 grid-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" />

      {/* 3. Double-Stroke Network Graph */}
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-full opacity-60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {EDGES.map((d, i) => (
          <React.Fragment key={i}>
            {/* Layer 1: Static base line */}
            <path
              d={d}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
            />
            {/* Layer 2: Traveling dash (26px dash, 300px gap) on 5.5s loop */}
            <motion.path
              d={d}
              stroke="oklch(0.58 0.23 260)"
              strokeWidth="1.5"
              strokeDasharray="26 300"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -326 }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.45,
              }}
            />
          </React.Fragment>
        ))}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="rgba(255, 255, 255, 0.2)"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}