"use client";

import React from "react";
import { Shield, GitCommit, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-14 px-6 relative z-10 bg-root">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Project Tag */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-accent-blue">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-xs text-gray-200 tracking-tight">
              AECIDS — VIT Pune EDI
            </span>
            <p className="text-[11px] text-muted">
              Adaptive Explainable Edge–Cloud Intrusion Detection System
            </p>
          </div>
        </div>

        {/* Links & License */}
        <div className="flex items-center gap-6 text-xs text-muted">
          <a
            href="https://github.com/AtharvaVavhal/aecids"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/atharva-vavhal?originalSubdomain=in"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200 transition-colors inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="#documentation"
            className="hover:text-gray-200 transition-colors"
          >
            Documentation
          </a>
          <span>MIT License</span>
        </div>
      </div>
    </footer>
  );
}
