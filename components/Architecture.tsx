"use client";

import React from "react";
import { motion } from "framer-motion";

export function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
          System Architecture
        </h2>
        <p className="text-sm sm:text-base text-muted">
          adaptation engine keeps the boundary between them honest.
        </p>
      </div>

      {/* Main Architectural Diagram Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#090e1a]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <svg
          viewBox="0 0 960 480"
          className="w-full h-auto overflow-visible select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ========================================================= */}
          {/* 1. DASHED CONTAINER: EDGE PLANE (LEFT)                    */}
          {/* ========================================================= */}
          <rect
            x="30"
            y="30"
            width="430"
            height="420"
            rx="20"
            fill="rgba(15, 23, 42, 0.3)"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <text
            x="60"
            y="65"
            fill="#64748b"
            fontSize="11"
            fontFamily="monospace"
            letterSpacing="2"
            className="uppercase font-semibold tracking-widest"
          >
            EDGE PLANE
          </text>

          {/* ========================================================= */}
          {/* 2. DASHED CONTAINER: CLOUD PLANE (RIGHT)                  */}
          {/* ========================================================= */}
          <rect
            x="490"
            y="30"
            width="440"
            height="420"
            rx="20"
            fill="rgba(15, 23, 42, 0.3)"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <text
            x="520"
            y="65"
            fill="#64748b"
            fontSize="11"
            fontFamily="monospace"
            letterSpacing="2"
            className="uppercase font-semibold tracking-widest"
          >
            CLOUD PLANE
          </text>

          {/* ========================================================= */}
          {/* 3. STATIC CONNECTION WIRES & LABELS                       */}
          {/* ========================================================= */}
          <g
            fill="none"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* IoT devices -> Gateway capture */}
            <path d="M 135 154 L 135 220" fill="none" />
            {/* Gateway capture -> Calibration */}
            <path d="M 210 252 L 270 252" fill="none" />
            {/* Edge classifier -> Calibration */}
            <path d="M 345 154 L 345 220" fill="none" />
            {/* Calibration -> Routing policy */}
            <path d="M 345 284 L 345 350" fill="none" />
            {/* Routing policy -> Cloud ensemble (ESCALATE) */}
            <path d="M 420 382 L 465 382 L 465 122 L 530 122" fill="none" />
            {/* Cloud ensemble -> TreeSHAP */}
            <path d="M 610 154 L 610 220" fill="none" />
            {/* TreeSHAP -> Adaptation engine */}
            <path d="M 610 284 L 610 350" fill="none" />
            {/* TreeSHAP -> Analyst console */}
            <path d="M 690 252 L 740 252" fill="none" />
            {/* Adaptation engine -> Calibration (FEEDBACK LOOP) */}
            <path
              d="M 530 395 L 475 395 L 475 435 L 245 435 L 245 265 L 270 265"
              fill="none"
            />
          </g>

          {/* Wire Labels */}
          <text x="435" y="373" fill="#64748b" fontSize="10" fontFamily="monospace">
            escalate
          </text>
          <text x="495" y="427" fill="#64748b" fontSize="10" fontFamily="monospace">
            feedback
          </text>

          {/* ========================================================= */}
          {/* 4. ANIMATED GLOWING DATA PACKETS (MOTION.PATH)           */}
          {/* ========================================================= */}
          {/* Packet 1: IoT -> Gateway */}
          <motion.path
            d="M 135 154 L 135 220"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeDasharray="16 120"
            animate={{ strokeDashoffset: [0, -136] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />

          {/* Packet 2: Gateway -> Calibration */}
          <motion.path
            d="M 210 252 L 270 252"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeDasharray="16 120"
            animate={{ strokeDashoffset: [0, -136] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.4 }}
          />

          {/* Packet 3: Calibration -> Routing policy */}
          <motion.path
            d="M 345 284 L 345 350"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeDasharray="16 120"
            animate={{ strokeDashoffset: [0, -136] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Packet 4: Escalate to Cloud */}
          <motion.path
            d="M 420 382 L 465 382 L 465 122 L 530 122"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeDasharray="24 350"
            animate={{ strokeDashoffset: [0, -374] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Packet 5: Cloud -> TreeSHAP -> Adaptation */}
          <motion.path
            d="M 610 154 L 610 220"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeDasharray="16 120"
            animate={{ strokeDashoffset: [0, -136] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />

          {/* Packet 6: Feedback loop back to Edge */}
          <motion.path
            d="M 530 395 L 475 395 L 475 435 L 245 435 L 245 265 L 270 265"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeDasharray="24 450"
            animate={{ strokeDashoffset: [0, -474] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: 1 }}
          />

          {/* ========================================================= */}
          {/* 5. ARCHITECTURAL BOX NODES                                */}
          {/* ========================================================= */}
          {/* --- EDGE PLANE NODES --- */}
          {/* IoT devices */}
          <g transform="translate(60, 90)">
            <rect width="150" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="75" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              IoT devices
            </text>
            <text x="75" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              sensors · actuators
            </text>
          </g>

          {/* Gateway capture */}
          <g transform="translate(60, 220)">
            <rect width="150" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="75" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              Gateway capture
            </text>
            <text x="75" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              flow features
            </text>
          </g>

          {/* Edge classifier */}
          <g transform="translate(270, 90)">
            <rect width="150" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="75" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              Edge classifier
            </text>
            <text x="75" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              quantised model
            </text>
          </g>

          {/* Calibration */}
          <g transform="translate(270, 220)">
            <rect width="150" height="64" rx="10" fill="#111827" stroke="#06B6D4" strokeWidth="1.5" />
            <text x="75" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              Calibration
            </text>
            <text x="75" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              temperature scaling
            </text>
          </g>

          {/* Routing policy */}
          <g transform="translate(270, 350)">
            <rect width="150" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="75" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              Routing policy
            </text>
            <text x="75" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              adaptive threshold
            </text>
          </g>

          {/* --- CLOUD PLANE NODES --- */}
          {/* Cloud ensemble */}
          <g transform="translate(530, 90)">
            <rect width="160" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="80" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              Cloud ensemble
            </text>
            <text x="80" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              high-capacity model
            </text>
          </g>

          {/* TreeSHAP */}
          <g transform="translate(530, 220)">
            <rect width="160" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="80" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              TreeSHAP
            </text>
            <text x="80" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              attributions
            </text>
          </g>

          {/* Adaptation engine */}
          <g transform="translate(530, 350)">
            <rect width="160" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="80" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              Adaptation engine
            </text>
            <text x="80" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              threshold + retrain
            </text>
          </g>

          {/* Analyst console */}
          <g transform="translate(740, 220)">
            <rect width="140" height="64" rx="10" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />
            <text x="70" y="28" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
              Analyst console
            </text>
            <text x="70" y="46" fill="#64748b" fontSize="11" textAnchor="middle">
              alerts
            </text>
          </g>
        </svg>
      </div>

      {/* ========================================================= */}
      {/* 6. BOTTOM 3 ARCHITECTURAL SUMMARY CARDS                   */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {/* Card 1: Local resolution */}
        <div className="p-7 rounded-2xl bg-[#090e1a]/60 border border-white/10 backdrop-blur-md">
          <h3 className="text-sm font-semibold text-white mb-2">
            Local resolution
          </h3>
          <p className="text-xs text-muted leading-relaxed">
            Confident flows are labelled and acted on at the gateway, with no uplink.
          </p>
        </div>

        {/* Card 2: Selective escalation */}
        <div className="p-7 rounded-2xl bg-[#090e1a]/60 border border-white/10 backdrop-blur-md">
          <h3 className="text-sm font-semibold text-white mb-2">
            Selective escalation
          </h3>
          <p className="text-xs text-muted leading-relaxed">
            Only flows below the calibrated confidence threshold cross the boundary.
          </p>
        </div>

        {/* Card 3: Closed loop */}
        <div className="p-7 rounded-2xl bg-[#090e1a]/60 border border-white/10 backdrop-blur-md">
          <h3 className="text-sm font-semibold text-white mb-2">
            Closed loop
          </h3>
          <p className="text-xs text-muted leading-relaxed">
            Cloud evidence returns as threshold updates and refreshed edge weights.
          </p>
        </div>
      </div>
    </section>
  );
}