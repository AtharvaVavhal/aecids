"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Cloud, Terminal, CheckCircle2, ShieldAlert, Sparkles, RefreshCw, ArrowRight } from "lucide-react";

type ScenarioType = "NORMAL" | "ZERO_DAY";

export function IntelligentRouting() {
  const [scenario, setScenario] = useState<ScenarioType>("ZERO_DAY");

  const isNormal = scenario === "NORMAL";
  const confidence = isNormal ? 94 : 71;
  const threshold = 80;

  const logs = isNormal
    ? [
        "[01:19:14.201] INGRESS: TCP 192.168.1.104:443 -> GATEWAY_01",
        "[01:19:14.202] EDGE_EVAL: XGBoost feature extraction complete (14 features)",
        "[01:19:14.202] CONFIDENCE: 94.2% ≥ 80.0% THRESHOLD",
        "[01:19:14.203] RESOLUTION: LOCAL_ACCEPT (Latency: 0.38ms | Cloud Transfer: 0B)",
      ]
    : [
        "[01:19:18.840] INGRESS: UDP 172.16.0.45:8080 -> GATEWAY_01 [SYN_ANOMALY]",
        "[01:19:18.841] EDGE_EVAL: XGBoost confidence score 71.4% < 80.0% THRESHOLD",
        "[01:19:18.841] ESCALATION: Rerouting encrypted payload to Cloud Deep Neural Net...",
        "[01:19:18.849] CLOUD_DNN: Secondary verification complete (Threat Probability: 0.91)",
        "[01:19:18.850] TreeSHAP: Top contributors -> [dst_host_srv_count, flag_S0]",
        "[01:19:18.851] SYSTEM_LOOP: Updating Edge Random Forest weights (+0.04 bias)",
      ];

  return (
    <section id="routing" className="py-28 px-6 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>INTERACTIVE SOC TELEMETRY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
          Confidence-Gated Packet Engine
        </h2>
        <p className="text-sm sm:text-base text-muted">
          Test real-time packet ingress below. Traffic scoring above 80% confidence resolves at the edge in sub-milliseconds; ambiguous payloads escalate to Cloud TreeSHAP analysis.
        </p>

        {/* Traffic Injection Switch */}
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 mt-8 gap-2 backdrop-blur-md">
          <button
            onClick={() => setScenario("NORMAL")}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
              isNormal
                ? "bg-status-green text-root font-bold shadow-lg shadow-status-green/20"
                : "text-muted hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Inject Standard Traffic (94% Conf.)</span>
          </button>
          <button
            onClick={() => setScenario("ZERO_DAY")}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
              !isNormal
                ? "bg-accent-cyan text-root font-bold shadow-lg shadow-accent-cyan/20"
                : "text-muted hover:text-white"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Inject Zero-Day Anomaly (71% Conf.)</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Telemetry Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Card: Dynamic Edge Classification Gate */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-accent-blue/10 blur-3xl rounded-full pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-muted">
                Tier 2 — Local Edge Gateway
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-status-green bg-status-green/10 border border-status-green/20 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse" />
                ONLINE · 0.38ms
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              XGBoost Triage Gate
            </h3>
            <p className="text-sm text-muted mb-8">
              Lightweight feature extraction evaluates flow duration, packet flags, and header byte ratios locally.
            </p>

            {/* Live Confidence Gauge */}
            <div className="p-5 rounded-2xl bg-root/80 border border-white/10 mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-mono text-muted uppercase">Confidence Score</span>
                <span className={`text-3xl font-mono font-bold ${isNormal ? "text-status-green" : "text-amber-400"}`}>
                  {confidence}%
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
                <motion.div
                  key={confidence}
                  initial={{ width: 0 }}
                  animate={{ width: `${confidence}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full rounded-full ${isNormal ? "bg-status-green" : "bg-amber-400"}`}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono text-muted mt-3 pt-3 border-t border-white/10">
                <span>Threshold: 80.0%</span>
                <span className={isNormal ? "text-status-green" : "text-amber-400"}>
                  {isNormal ? "LOCAL RESOLVE" : "ESCALATE TO CLOUD"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between text-xs text-muted">
            <span>Bandwidth Consumption</span>
            <span className="font-mono text-white">{isNormal ? "0 Bytes (100% Local)" : "480 Bytes (Encrypted Mirrored)"}</span>
          </div>
        </div>

        {/* Right Card: Live Terminal & TreeSHAP Output */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-root/90 border border-white/10 backdrop-blur-xl flex flex-col justify-between font-mono relative shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-muted ml-2">aecids-telemetry.log</span>
              </div>
              <span className="text-[11px] text-accent-cyan">
                {isNormal ? "EDGE_MODE" : "HYBRID_SHAP_MODE"}
              </span>
            </div>

            {/* Terminal Stream */}
            <div className="space-y-2 min-h-[170px] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scenario}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  {logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={`text-xs leading-relaxed ${
                        log.includes("ESCALATION") || log.includes("SYN_ANOMALY")
                          ? "text-amber-400 font-semibold"
                          : log.includes("TreeSHAP")
                          ? "text-accent-cyan font-semibold"
                          : log.includes("LOCAL_ACCEPT")
                          ? "text-status-green font-semibold"
                          : "text-gray-300"
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dynamic Cloud TreeSHAP Attribution Footer */}
          {!isNormal ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-2 text-accent-cyan">
                <Sparkles className="w-4 h-4 shrink-0" />
                <div>
                  <div className="font-semibold">TreeSHAP Waterfall Explained</div>
                  <div className="text-[11px] text-muted">SYN packet flag count (+0.34) triggered escalation</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted font-mono self-end sm:self-center">
                <RefreshCw className="w-3.5 h-3.5 text-accent-cyan animate-spin" />
                <span>Threshold Auto-Updating</span>
              </div>
            </motion.div>
          ) : (
            <div className="p-4 rounded-xl bg-status-green/10 border border-status-green/20 flex items-center justify-between text-xs text-status-green">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Traffic Verified Local · Zero Network Footprint</span>
              </div>
              <span className="text-[11px] font-mono opacity-80">99.4% Spec</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}