"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Cpu, Cloud, ShieldCheck } from "lucide-react";

export function Problem() {
  return (
    <section id="problem" className="py-28 px-6 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
          The Architectural Dilemma
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Why traditional IDS architectures break at the edge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left: Traditional Edge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-7 rounded-2xl bg-surface/60 border border-border-subtle flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-root border border-border-subtle flex items-center justify-center text-muted mb-5">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Traditional Edge IDS
            </h3>
            <p className="text-sm text-muted mb-6">
              Lightweight models deployed on IoT gateways or constrained devices.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-400/80 shrink-0" />
              <span>Severe compute & memory limits</span>
            </li>
            <li className="flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-400/80 shrink-0" />
              <span>Lower detection accuracy</span>
            </li>
            <li className="flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-400/80 shrink-0" />
              <span>Misses multi-stage zero-day attacks</span>
            </li>
          </ul>
        </motion.div>

        {/* Center: AECIDS Solution (Highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 pt-10 rounded-2xl bg-gradient-to-b from-surface to-root border border-accent-blue/40 relative shadow-2xl shadow-accent-blue/5 flex flex-col justify-between"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-accent-blue text-xs font-mono uppercase tracking-widest text-white z-10 pointer-events-none">
              Adaptive Hybrid
            </div>
          <div>
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              AECIDS Architecture
            </h3>
            <p className="text-sm text-muted mb-6">
              Intelligent confidence-gated routing between Edge speed and Cloud depth.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-status-green shrink-0" />
              <span>Sub-millisecond Edge triage</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-status-green shrink-0" />
              <span>Selective Cloud escalation</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-status-green shrink-0" />
              <span>TreeSHAP explainability loop</span>
            </li>
          </ul>
        </motion.div>

        {/* Right: Traditional Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-7 rounded-2xl bg-surface/60 border border-border-subtle flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-root border border-border-subtle flex items-center justify-center text-muted mb-5">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Traditional Cloud IDS
            </h3>
            <p className="text-sm text-muted mb-6">
              Heavy deep-learning models processing mirrored traffic remotely.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-400/80 shrink-0" />
              <span>High network latency</span>
            </li>
            <li className="flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-400/80 shrink-0" />
              <span>Bandwidth saturation under DDOS</span>
            </li>
            <li className="flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-400/80 shrink-0" />
              <span>Single point of internet dependency</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}   