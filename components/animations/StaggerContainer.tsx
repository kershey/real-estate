'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className
}: StaggerContainerProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px. */
  y?: number;
}

export function StaggerItem({ children, className, y = 28 }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
