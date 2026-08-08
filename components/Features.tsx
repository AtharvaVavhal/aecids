"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GitBranch, 
  ShieldCheck, 
  Cpu, 
  RefreshCw, 
  BarChart3, 
  Lock 
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  accent: string;
}

const FEATURES: Feature[] = [
  {
    title: "Confidence-Gated Triage",
    description:
      "Packets are scored locally in <0.4ms. Traffic exceeding the 80% confidence threshold resolves at the edge, saving cloud bandwidth.",
    icon: GitBranch,
    tag: "Core Routing",
    accent: "group-hover:border-accent-blue/50 group-hover:shadow-accent-blue/5",
  },
  {
    title: "TreeSHAP Explainability",
    description:
      "Every escalated threat includes feature attribution scores, showing SOC analysts exactly which packet headers triggered the alert.",
    icon: BarChart3,
    tag: "Explainable AI",
    accent: "group-hover:border-status-green/50 group-hover:shadow-status-green/5",
  },
  {
    title: "Dynamic Threshold Tuning",
    description:
      "Cloud DNN evaluations feed a continuous feedback loop that automatically adjusts edge confidence thresholds based on attack velocity.",
    icon: RefreshCw,
    tag: "Adaptive Loop",
    accent: "group-hover:border-accent-cyan/50 group-hover:shadow-accent-cyan/5",
  },
  {
    title: "Ultra-Lightweight Edge Engine",
    description:
      "Optimized Random Forest and XGBoost classifiers engineered to run on constrained IoT gateways without CPU spiking.",
    icon: Cpu,
    tag: "Performance",
    accent: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/5",
  },
  {
    title: "Zero-Day Escalation Guard",
    description:
      "Ambiguous anomalies that evade signature matching are automatically pushed to cloud deep-learning models for secondary verification.",
    icon: ShieldCheck,
    tag: "Deep Threat",
    accent: "group-hover:border-amber-400/50 group-hover:shadow-amber-400/5",
  },
  {
    title: "Zero-Latency Signature Drop",
    description:
      "Known DDoS, SYN-flood, and injection payloads are discarded at the ingress layer before consuming inference engine cycles.",
    icon: Lock,
    tag: "Ingress Defense",
    accent: "group-hover:border-red-400/50 group-hover:shadow-red-400/5",
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 px-6 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
          Key Capabilities
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
          Engineered for speed, built for transparency.
        </p>
        <p className="text-sm text-muted">
          Every component in the AECIDS pipeline is designed to eliminate the trade-off
          between rapid edge response and deep analytical insight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className={`group p-7 rounded-2xl bg-surface/60 border border-border-subtle transition-all duration-300 shadow-lg ${feature.accent}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-root border border-border-subtle flex items-center justify-center text-gray-300 group-hover:text-accent-blue transition-colors">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted bg-root px-2.5 py-1 rounded-md border border-border-subtle">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-lg font-medium text-white mb-2.5">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}