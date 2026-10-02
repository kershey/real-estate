'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  /** Vertical travel in px. */
  y?: number;
  className?: string;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function FadeIn({ children, delay = 0, duration = 0.8, y = 24, className }: FadeInProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
