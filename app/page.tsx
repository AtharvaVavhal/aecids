"use client";

import React, { useState, useEffect } from "react";
// Navbar is provided by the root layout; do not render it here to avoid duplicate headers
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { IntelligentRouting } from "@/components/IntelligentRouting";
import { Architecture } from "@/components/Architecture";
import { Features } from "@/components/Features";
import { Research } from "@/components/Research";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { MaintenanceModal } from "@/components/MaintenanceModal";
import { Shield } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal only after client mount to avoid SSR hydration mismatch
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  
  return (
    <main className="relative min-h-screen bg-root overflow-x-hidden">
      {/* 1. Modal Overlay coordinated with state */}
      <MaintenanceModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 2. Main Page Content */}
      <Hero />
      <Problem />
      {/* Anchor for Navbar "Solution" link */}
      <div id="solution" className="scroll-mt-28" />
      <IntelligentRouting />
      {/* Anchor for Navbar "Stack" link - maps to architecture/tech stack */}
      <div id="stack" className="scroll-mt-28" />
      <Architecture />
      <Features />
      <Research />
      <Team />
      <Footer />

      {/* 3. Floating Bottom-Right Button to easily reopen the preview modal anytime */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111827] border border-[#1f2937] hover:border-blue-500/50 text-gray-200 text-xs font-mono shadow-2xl transition-all hover:scale-105 backdrop-blur-xl cursor-pointer"
        aria-label="Open Research Preview Modal"
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <Shield className="w-3.5 h-3.5 text-blue-400" />
        <span>View Research Preview</span>
      </button>
    </main>
  );
}