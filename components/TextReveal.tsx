"use client";

import React from "react";
import { motion } from "framer-motion";

const APPLE_CUBIC = [0.16, 1, 0.3, 1] as const;

export function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + idx * 0.05,
              ease: APPLE_CUBIC,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}