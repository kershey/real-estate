"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function BioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
          alt="Modern Architecture"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">
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
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Turning real estate{" "}
              <span className="italic font-light">challenges</span> into
              successful <span className="italic font-light">outcomes</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I started my real estate journey in 2014 with a simple mission:
                to make property transactions transparent, efficient, and
                stress-free. What began as a passion for helping people find
                their dream homes has evolved into a comprehensive approach to
                real estate that prioritizes technology, market expertise, and
                genuine client relationships.
              </p>

              <p>
                Throughout my career, I've witnessed the transformation of the
                real estate industry. I've embraced innovation while maintaining
                the personal touch that makes each transaction special. My
                approach combines data-driven market analysis with a deep
                understanding of what makes a house a home.
              </p>

              <p>
                Every client I work with benefits from my extensive network,
                negotiation skills honed over hundreds of transactions, and an
                unwavering commitment to their goals. Whether you're buying your
                first home, selling a property, or building an investment
                portfolio, I bring the expertise and dedication needed to
                achieve exceptional results.
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
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Specializations</h3>
              <ul className="space-y-4">
                {[
                  "Luxury Residential Properties",
                  "First-Time Home Buyers",
                  "Investment Properties",
                  "Relocation Services",
                  "Market Analysis & Consulting",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-black flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div className="border-l-4 border-black pl-6">
              <p className="text-xl font-medium text-slate-900 italic leading-relaxed">
                "Real estate isn't just about properties—it's about people,
                dreams, and the moments that shape our lives."
              </p>
            </div>

            {/* Service areas */}
            <div>
              <h3 className="text-sm font-medium text-slate-500 tracking-wider uppercase mb-4">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Downtown",
                  "Suburbs",
                  "Waterfront",
                  "Hill District",
                  "Commercial Zone",
                ].map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="inline-block rounded-full bg-black text-white px-4 py-2 text-sm font-medium"
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
