"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, ExternalLink, Shield, Code, Database, Cpu } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  focus: string;
  icon: React.ElementType;
  github: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Atharva Vavhal",
    role: "Lead Architect & AI Systems",
    focus: "TreeSHAP Engine & Hybrid Pipeline",
    icon: Code,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Vedika Mehta",
    role: "Edge Engineering Lead",
    focus: "XGBoost / IoT Gateway Optimization",
    icon: Cpu,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Swapnil Pawar",
    role: "Cloud & Network Specialist",
    focus: "Packet Capture & Threshold Routing",
    icon: Database,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Janhavi Waychal",
    role: "Security Analyst & UI/UX",
    focus: "SOC Dashboard & Explainability Viz",
    icon: Shield,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export function Team() {
  return (
    <section id="team" className="py-28 px-6 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3">
          EDI Research Team
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
          Engineered at VIT Pune.
        </p>
        <p className="text-sm text-muted">
          Engineering Design & Innovation (EDI) Project — Department of Computer
          Engineering (SE)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, idx) => {
          const Icon = member.icon;

          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl bg-surface/60 border border-border-subtle hover:border-gray-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-root border border-border-subtle flex items-center justify-center text-gray-300 group-hover:text-accent-blue group-hover:border-accent-blue/40 transition-all mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-medium text-accent-cyan mb-2">
                  {member.role}
                </div>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  {member.focus}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-subtle/80">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-root border border-border-subtle text-muted hover:text-white hover:border-gray-600 transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <GitCommit className="w-3.5 h-3.5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-root border border-border-subtle text-muted hover:text-white hover:border-gray-600 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}