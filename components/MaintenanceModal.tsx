"use client";

import { AnimatePresence, motion, type Variants, type Transition } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  GitBranch,
  FileText,
  Activity,
  Radar,
  Zap,
  CheckCircle2,
  CircleDot,
  Circle,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// 1. SPRING PHYSICS
// ─────────────────────────────────────────────────────────────
// The previous pass settled in ~180ms — technically correct "snappy,"
// but on a wide panel that reads as "nothing happened," not "premium."
// Stripe/Linear modals actually run 380–550ms; the trick is a LOW
// stiffness + LOW damping ratio (not critically damped — slightly
// underdamped) so there's one soft, barely-there overshoot at the end.
// That tiny overshoot is what your eye reads as "physical," not slow.
const MODAL_SPRING: Transition = {
  type: 'spring',
  stiffness: 220,
  damping: 26, // underdamped relative to stiffness → ~1 soft overshoot
  mass: 1.2,
};

const MODAL_EXIT_SPRING: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 38, // critically damped on exit — no overshoot, just gone
  mass: 0.8,
};

const BACKDROP_TWEEN: Transition = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1], // expo-out
};

// Backdrop blur ramps up alongside opacity — animating blur (not just
// opacity) on the scrim is a big chunk of why Stripe/Linear feel
// "atmospheric" instead of flat. Costs a little GPU; worth it here.
const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 32, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: MODAL_SPRING,
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 12,
    filter: 'blur(4px)',
    transition: { ...MODAL_EXIT_SPRING, filter: { duration: 0.18 } },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: { opacity: 1, backdropFilter: 'blur(8px)', transition: BACKDROP_TWEEN },
  exit: { opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.22, ease: 'easeIn' } },
};

// ─────────────────────────────────────────────────────────────
// 2. STAGGER SYSTEM
// ─────────────────────────────────────────────────────────────
// Directional convergence: left column content slides in from the
// left, right column's roadmap slides in from the right, both fading
// up. This "converging" motion — two things settling toward center —
// is the specific detail that makes Stripe/Apple panels feel designed
// rather than just faded in. Delays are pushed out so the choreography
// is actually visible instead of finishing before the container spring
// even settles.
const leftStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.22 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, x: -8 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: 'spring', stiffness: 260, damping: 26, mass: 0.9 },
  },
};

const phaseStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.38 },
  },
};

const phaseRow: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28, mass: 0.75 },
  },
};

// ─────────────────────────────────────────────────────────────
// 3. MICRO-INTERACTIONS
// ─────────────────────────────────────────────────────────────
const TAP_SPRING: Transition = { type: 'spring', stiffness: 700, damping: 30 };

function IconButton({
  onClick,
  children,
  label,
}: {
  onClick: () => void;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
      whileTap={{ scale: 0.94 }}
      transition={TAP_SPRING}
      className="
        flex h-8 w-8 items-center justify-center rounded-md
        text-gray-500 outline-none transition-colors
        hover:text-gray-200
        focus-visible:ring-2 focus-visible:ring-cyan-400/60
        focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
      "
    >
      {children}
    </motion.button>
  );
}

function PrimaryAction({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <motion.a
      href={href ?? '#'}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={TAP_SPRING}
      className="
        relative inline-flex items-center justify-center gap-2
        rounded-lg border border-cyan-400/20 bg-cyan-400/10
        px-4 py-2 text-sm font-medium text-cyan-300
        outline-none transition-colors
        hover:border-cyan-400/40 hover:bg-cyan-400/15
        focus-visible:ring-2 focus-visible:ring-cyan-400/60
        focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
      "
    >
      {children}
    </motion.a>
  );
}

function SecondaryAction({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <motion.a
      href={href ?? '#'}
      whileHover={{ y: -1, backgroundColor: 'rgba(255,255,255,0.05)' }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={TAP_SPRING}
      className="
        inline-flex items-center justify-center gap-2 rounded-lg
        border border-white/[0.08] bg-white/[0.02]
        px-4 py-2 text-sm font-medium text-gray-300
        outline-none transition-colors
        focus-visible:ring-2 focus-visible:ring-cyan-400/60
        focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
      "
    >
      {children}
    </motion.a>
  );
}

function MaintenanceBanner() {
  return (
    <motion.div
      variants={fadeUp}
      className="
        mb-6 flex items-center gap-3 rounded-lg border
        border-amber-400/20 bg-amber-400/[0.06] px-3.5 py-2.5
      "
    >
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
      </span>
      <p className="text-xs leading-relaxed text-amber-200/90">
        <span className="font-medium">Under maintenance</span> — some routing
        metrics may lag behind live values while we deploy Phase 03.
      </p>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. DATA
// ─────────────────────────────────────────────────────────────
interface TelemetryStat {
  label: string;
  value: string;
  unit?: string;
  icon: React.ElementType;
}

const STATS: TelemetryStat[] = [
  { label: 'Active Nodes', value: '128', icon: Radar },
  { label: 'Routing Confidence', value: '99.2', unit: '%', icon: Activity },
  { label: 'Edge Latency', value: '4.1', unit: 'ms', icon: Zap },
];

type PhaseStatus = 'complete' | 'active' | 'pending';

interface Phase {
  id: string;
  title: string;
  description: string;
  status: PhaseStatus;
}

const PHASES: Phase[] = [
  {
    id: '01',
    title: 'Edge Telemetry Ingestion',
    description: 'Lightweight agents streaming flow + syscall data from edge nodes.',
    status: 'complete',
  },
  {
    id: '02',
    title: 'Confidence-Calibrated Routing',
    description: 'Adaptive router scoring anomalies before cloud escalation.',
    status: 'complete',
  },
  {
    id: '03',
    title: 'Cloud Ensemble Inference',
    description: 'Deep ensemble models validating high-uncertainty edge flags.',
    status: 'active',
  },
  {
    id: '04',
    title: 'Explainability Layer',
    description: 'SHAP-based attribution surfaced per flagged event.',
    status: 'pending',
  },
  {
    id: '05',
    title: 'Adaptive Feedback Loop',
    description: 'Cloud verdicts fine-tuning edge model weights on-device.',
    status: 'pending',
  },
  {
    id: '06',
    title: 'Public Research Release',
    description: 'Benchmark suite, paper, and open dataset publication.',
    status: 'pending',
  },
];

const STATUS_CONFIG: Record<
  PhaseStatus,
  { icon: React.ElementType; className: string; label: string }
> = {
  complete: { icon: CheckCircle2, className: 'text-cyan-400', label: 'Complete' },
  active: { icon: CircleDot, className: 'text-cyan-300 animate-pulse', label: 'In Progress' },
  pending: { icon: Circle, className: 'text-gray-600', label: 'Pending' },
};

// ─────────────────────────────────────────────────────────────
// 5. MODAL
// ─────────────────────────────────────────────────────────────
interface MaintenanceModalProps {
  open: boolean;
  onClose: () => void;
  githubUrl?: string;
  docsUrl?: string;
}

export function MaintenanceModal({
  open,
  onClose,
  githubUrl = 'https://github.com/AtharvaVavhal/aecids',
  docsUrl = '#',
}: MaintenanceModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (typeof document === 'undefined') return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  const modalContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          data-lenis-prevent-touch
          className="
            fixed inset-0 z-50 flex items-end justify-center overflow-y-auto
            bg-black/60 px-3 py-3 backdrop-blur-sm
            sm:items-center sm:p-5
          "
        >
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aecids-modal-title"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent-touch
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y',
              willChange: 'transform, opacity, filter',
            }}
            className="
              relative grid max-h-[calc(100svh-1.5rem)] w-full max-w-5xl
              grid-cols-1 overflow-y-auto overflow-x-hidden rounded-xl border border-white/[0.08]
              bg-[#030712]
              shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_32px_64px_-16px_rgba(0,0,0,0.85)]
              sm:max-h-[calc(100svh-2.5rem)] sm:rounded-2xl
              md:grid-cols-2 md:overflow-hidden
            "
          >
            <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
              <IconButton onClick={onClose} label="Close modal">
                <X size={16} strokeWidth={2} />
              </IconButton>
            </div>

            {/* ── LEFT COLUMN ───────────────────────────────── */}
            <motion.div
              variants={leftStagger}
              initial="hidden"
              animate="visible"
              className="
                flex min-h-0 flex-col justify-between border-b
                border-white/[0.06] px-5 py-6 pr-11
                sm:px-7 sm:py-8 sm:pr-12
                md:max-h-[calc(100svh-2.5rem)] md:overflow-y-auto md:border-b-0 md:border-r md:px-8 md:py-10 md:pr-8
              "
            >
              <div>
                <MaintenanceBanner />

                <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>
                  <span className="font-[JetBrains_Mono] text-[11px] uppercase tracking-widest text-cyan-400/80">
                    Research Preview
                  </span>
                </motion.div>

                <motion.h1
                  id="aecids-modal-title"
                  variants={fadeUp}
                  className="font-[Inter] text-xl font-semibold leading-tight tracking-tight text-gray-100 sm:text-2xl"
                >
                  We&apos;re crafting the future of intelligent Edge-Cloud Security
                </motion.h1>

                <motion.p variants={fadeUp} className="mt-4 text-sm leading-relaxed text-gray-400">
                  AECIDS routes threat detection between lightweight edge inference
                  and heavier cloud ensembles using a confidence-calibrated router —
                  cutting false-escalation rates without sacrificing detection
                  latency at the edge.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
                  <PrimaryAction href={githubUrl}>
                    <GitBranch size={15} strokeWidth={2} />
                    View on GitHub
                  </PrimaryAction>
                  <SecondaryAction href={docsUrl}>
                    <FileText size={15} strokeWidth={2} />
                    Documentation
                  </SecondaryAction>
                </motion.div>
              </div>

              {/* Telemetry status bar */}
              <motion.div
                variants={fadeUp}
                className="
                  mt-8 grid grid-cols-1 gap-3 border-t border-white/[0.06] pt-5
                  min-[420px]:grid-cols-3 md:mt-10 md:gap-2
                "
              >
                {STATS.map(({ label, value, unit, icon: Icon }) => (
                  <div
                    key={label}
                    className="
                      flex min-w-0 items-center gap-3 min-[420px]:flex-col
                      min-[420px]:items-start min-[420px]:gap-1.5
                    "
                  >
                    <Icon size={13} strokeWidth={2} className="text-cyan-400/70" />
                    <div className="min-w-0">
                      <span className="font-[JetBrains_Mono] text-base font-medium tabular-nums text-gray-100">
                        {value}
                        {unit && <span className="ml-0.5 text-xs text-gray-500">{unit}</span>}
                      </span>
                      <span className="ml-2 text-[11px] leading-none text-gray-500 min-[420px]:ml-0 min-[420px]:block">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN ──────────────────────────────── */}
            <div
              className="
                flex min-h-0 flex-col bg-white/[0.015]
                px-5 py-6 sm:px-7 sm:py-8 md:max-h-[calc(100svh-2.5rem)] md:overflow-y-auto md:px-8 md:py-10
              "
            >
              <motion.h3
                initial={{ opacity: 0, y: 10, x: 8 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 280, damping: 26 }}
                className="mb-6 font-[JetBrains_Mono] text-[11px] uppercase tracking-widest text-gray-500"
              >
                Project Roadmap
              </motion.h3>

              <motion.ol
                variants={phaseStagger}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1"
              >
                {PHASES.map((phase) => {
                  const status = STATUS_CONFIG[phase.status];
                  const StatusIcon = status.icon;
                  return (
                    <motion.li
                      key={phase.id}
                      variants={phaseRow}
                      className="
                        flex items-start gap-3.5 rounded-lg px-3 py-3
                        transition-colors hover:bg-white/[0.03]
                      "
                    >
                      <StatusIcon
                        size={16}
                        strokeWidth={2}
                        className={`mt-0.5 shrink-0 ${status.className}`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-[JetBrains_Mono] text-[11px] text-gray-600">
                            Phase {phase.id}
                          </span>
                          {phase.status === 'active' && (
                            <span className="rounded-full bg-cyan-400/10 px-1.5 py-0.5 text-[10px] font-medium text-cyan-300">
                              {status.label}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm font-medium text-gray-200">{phase.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                          {phase.description}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ol>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, modalRoot);
}
