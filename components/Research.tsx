"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  BookOpen, 
  Layers, 
  Code2, 
  BarChart, 
  Compass, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface TimelineStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  deliverables: string[];
  highlight: string;
}

const RESEARCH_STAGES: TimelineStage[] = [
  {
    id: "problem",
    step: "Phase 01",
    title: "Problem & Edge Bottleneck Analysis",
    subtitle: "Identifying latency-vs-accuracy trade-offs in IoT networks.",
    icon: FileText,
    deliverables: [
      "Benchmarked memory/CPU spikes on constrained edge gateways",
      "Identified failure modes of standard cloud-only mirroring under DDoS",
      "Defined the 80% confidence escalation threshold criteria",
    ],
    highlight: "Key Finding: Edge models drop ~14% accuracy on zero-days without cloud fallback.",
  },
  {
    id: "literature",
    step: "Phase 02",
    title: "Literature Review & SHAP Feasibility",
    subtitle: "Surveying XAI approaches for real-time network traffic.",
    icon: BookOpen,
    deliverables: [
      "Evaluated KernelSHAP vs. TreeSHAP compute overhead",
      "Selected XGBoost/Random Forest for edge speed + TreeSHAP compatibility",
      "Reviewed hybrid intrusion detection topologies in IEEE/ACM papers",
    ],
    highlight: "Key Selection: TreeSHAP delivers O(TLD²) exact attribution without edge latency.",
  },
  {
    id: "architecture",
    step: "Phase 03",
    title: "AECIDS System Design & Topology",
    subtitle: "Architecting the four-tier adaptive Edge-Cloud bridge.",
    icon: Layers,
    deliverables: [
      "Designed asynchronous confidence-gated routing protocol",
      "Separated real-time ingress triage from heavy deep-learning verification",
      "Formulated threshold auto-updating feedback loop equations",
    ],
    highlight: "Architecture Goal: <15% of traffic escalated while catching 99.4% of anomalies.",
  },
  {
    id: "implementation",
    step: "Phase 04",
    title: "Model Training & Pipeline Build",
    subtitle: "Training on CICIDS2017 & NSL-KDD benchmark datasets.",
    icon: Code2,
    deliverables: [
      "Trained edge Random Forest classifier (93.8% local accuracy)",
      "Trained cloud DNN verification model (99.2% deep accuracy)",
      "Integrated TreeSHAP waterfall generation for SOC analyst dashboard",
    ],
    highlight: "Dataset Scale: Validated across 2.8 million multi-vector attack packets.",
  },
  {
    id: "evaluation",
    step: "Phase 05",
    title: "Benchmarking & Latency Stress Test",
    subtitle: "Measuring end-to-end performance against traditional IDS.",
    icon: BarChart,
    deliverables: [
      "Achieved average local edge inference time of ~0.4ms",
      "Reduced cloud bandwidth consumption by 84% compared to full mirroring",
      "Verified real-time SHAP chart rendering at 60 FPS in dashboard",
    ],
    highlight: "Performance Win: Zero-day detection boosted by 18% with hybrid gating.",
  },
  {
    id: "future",
    step: "Phase 06",
    title: "Future Work & Hardware Acceleration",
    subtitle: "Roadmap for production deployment and FPGA integration.",
    icon: Compass,
    deliverables: [
      "Porting edge Random Forest models to eBPF/XDP kernel space",
      "Exploring Federated Learning for cross-node threshold synchronization",
      "Hardware acceleration using NVIDIA Jetson edge AI modules",
    ],
    highlight: "Next Frontier: Kernel-space packet dropping at 100Gbps line rate.",
  },
];

export function Research() {
  const [activeStageId, setActiveStageId] = useState<string>("architecture");

  const activeStage =
    RESEARCH_STAGES.find((s) => s.id === activeStageId) || RESEARCH_STAGES[2];

  return (
    <section id="research" className="py-28 px-6 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
          Research Roadmap
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
          From literature to verified architecture.
        </p>
        <p className="text-sm text-muted">
          Our engineering design and innovation workflow across six structured phases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Phase Tabs */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {RESEARCH_STAGES.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;

            return (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                  isActive
                    ? "bg-surface border-accent-blue/50 shadow-lg shadow-accent-blue/5"
                    : "bg-surface/40 border-border-subtle hover:bg-surface/70 hover:border-gray-700 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-accent-blue/10 border-accent-blue/30 text-accent-blue"
                        : "bg-root border-border-subtle text-muted"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted uppercase">
                      {stage.step}
                    </div>
                    <div className="text-sm font-medium text-gray-200">
                      {stage.title}
                    </div>
                  </div>
                </div>

                <div
                  className={`w-2 h-2 rounded-full ${
                    isActive ? "bg-accent-cyan shadow-sm shadow-accent-cyan" : "bg-transparent"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Stage Detail Preview */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-surface/80 border border-border-subtle relative backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan">
                  {activeStage.step} • Deep Dive
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted bg-root px-2.5 py-1 rounded-md border border-border-subtle">
                  <Sparkles className="w-3 h-3 text-accent-cyan" />
                  Verified Milestone
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {activeStage.title}
              </h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                {activeStage.subtitle}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">
                  Key Deliverables
                </div>
                {activeStage.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-status-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Research Highlight Pill */}
              <div className="p-4 rounded-xl bg-root border border-accent-blue/30 text-xs font-mono text-gray-300 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-blue shrink-0 animate-pulse" />
                <span>{activeStage.highlight}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}