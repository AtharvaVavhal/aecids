"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Global Apple/Linear Easing Curve
 */
export const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * 1. REVEAL - Exactly 0.65s fade-up from y: 18 with an -80px viewport offset
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 2. SECTION - Standardized spacious layout wrapper
 */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-28 px-6 relative z-10 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}

/**
 * 3. EYEBROW - Monospace category badge in accent cyan
 */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-widest mb-4">
      {children}
    </div>
  );
}

/**
 * 4. SECTION HEADING - Standardized Eyebrow + Title + Subtitle hierarchy
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl sm:text-5xl font-semibold text-foreground text-balance-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * 5. CARD - 1:1 Parity with Lovable card specs:
 *           `.panel`, `duration-300`, `hover:-translate-y-0.5`, `hover:border-border-strong`
 */
export function Card({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`panel rounded-2xl p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}