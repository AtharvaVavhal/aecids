"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Shield } from "lucide-react";
import { usePathname } from "next/navigation";

type NavLink = {
  id: string;
  label: string;
  target?: string;
  href?: string;
  isRoute?: boolean;
};

const LINKS: NavLink[] = [
  { id: "problem", label: "Problem", target: "problem" },
  // `solution` in the nav maps to the `routing` section in the page
  { id: "solution", label: "Solution", target: "solution" },
  { id: "features", label: "Features", target: "features" },
  { id: "architecture", label: "Architecture", target: "architecture" },
  // `stack` should point to the architecture/stack area
  { id: "stack", label: "Stack", target: "architecture" },
  { id: "research", label: "Research", target: "research" },
  { id: "team", label: "Team", target: "team" },
  // external About link (portfolio)
  { id: "about", label: "About", href: "https://atharva-portfolio-mu.vercel.app" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.3, 0.6] }
    );
    // Observe the actual target ids (skip top-level route links)
    LINKS.filter((l) => !l.isRoute).forEach((l) => {
      if (!l.target) return;
      const el = document.getElementById(l.target);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/[0.08] bg-[#030712]/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            {/* Replaceable brand logo: put your logo at /public/brand-logo.svg or .png */}
            <div className="w-7 h-7 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center text-[#2563EB]">
              <Shield className="w-4 h-4 text-[#06B6D4]" />
            </div>
            <span className="text-sm font-sans font-semibold tracking-tight text-white">
              AECIDS
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => {
              const href = link.href ?? `#${link.target}`;
              const isExternal = href?.startsWith('http');
              const isActive = link.isRoute ? pathname === (link.href ?? '') : active === link.target;
              return (
                <a
                  key={link.id}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="relative rounded-full px-3.5 py-1.5 text-sm text-gray-400 transition-colors hover:text-white font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative ${isActive ? "text-white font-semibold" : ""}`}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
              <a
                href="#solution"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] px-4 py-1.5 text-sm text-white transition-colors hover:bg-white/[0.08] font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                aria-label="Overview"
              >
                <span>Overview</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-b border-white/10 bg-[#030712]/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-1 px-6 py-4">
              {LINKS.map((link) => {
                const href = link.href ?? `#${link.target}`;
                const isExternal = href?.startsWith('http');
                return (
                  <a
                    key={link.id}
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-[#9CA3AF] transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}