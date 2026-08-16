"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/*
 * MOCK CONTENT - placeholder figures awaiting the agent's real numbers.
 * Shape follows the agent-profile spec (family-relevant proof points, no
 * transaction-volume bragging); the values themselves are invented.
 */
const MOCK_STATS = [
  { value: "180+", label: "Families Helped" },
  { value: "11", label: "Years in Central Florida" },
  { value: "60+", label: "First-Time Buyers Guided" },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted to-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
                  About Me
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-semibold leading-tight text-foreground"
              >
                Helping Families
                <br />
                <span className="italic font-light">Settle In</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                I have spent eleven years helping families find homes here —
                the kind with a school you feel good about, a street the kids
                can ride bikes on, and room to grow into.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-8 pt-8"
              >
                {MOCK_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl md:text-5xl font-semibold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image with unique frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent rounded-full blur-3xl"
              />

              {/* Image container with unique border treatment */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-muted">
                <div className="absolute inset-0 border-8 border-background rounded-3xl z-10" />
                <Image
                  src="/agent-portrait-placeholder.jpg"
                  alt="Portrait of the agent, smiling"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating badge - positioned outside overflow container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-[-1.5rem] left-[-1.5rem] bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl z-20"
              >
                <div className="text-sm font-medium">Licensed Since</div>
                <div className="text-2xl font-semibold">2014</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
