"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function BioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            My Story
          </span>
        </motion.div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - Main bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              The right house is the one your family{" "}
              <span className="italic font-light">grows into</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I got my license in 2014, and within a couple of years I noticed
                that almost everyone I enjoyed working with was a family with
                young kids. So I stopped pretending to be a generalist and
                leaned into it.
              </p>

              <p>
                That means I spend a lot of time on things that never show up on
                a listing sheet. Which elementary school an address actually
                feeds into. Whether the cul-de-sac is genuinely quiet or just
                quiet on a Sunday afternoon. How long the school run really
                takes once you add a car seat and a missing shoe.
              </p>

              <p>
                It also means I am comfortable telling you a house is wrong for
                you. Families are not buying an asset they will flip in three
                years; they are buying the place their children will remember.
                That deserves someone willing to slow the process down.
              </p>
            </div>
          </motion.div>

          {/* Right column - Key points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Specializations */}
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Specializations</h3>
              <ul className="space-y-4">
                {[
                  "First-Time Home Buyers",
                  "Growing Families",
                  "School-Zone Searches",
                  "Families Relocating to Florida",
                  "Selling to Move Up",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div className="border-l-4 border-primary pl-6">
              <p className="text-xl font-medium text-foreground italic leading-relaxed">
                "A house is just a building until a family fills it. My job is
                making sure it is the right one to fill."
              </p>
            </div>

            {/* Service areas */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Orlando",
                  "Kissimmee",
                  "Winter Garden",
                  "Lake Nona",
                  "Winter Park",
                  "Windermere",
                ].map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="inline-block rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
