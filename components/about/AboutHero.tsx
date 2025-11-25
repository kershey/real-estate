"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-24 md:py-32">
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
                <span className="inline-block rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-black">
                  About Me
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Building <span className="italic font-light">Trust</span>
                <br />
                Through{" "}
                <span className="italic font-light">Expertise</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
              >
                With over a decade of experience in real estate, I help clients
                navigate the complex world of property transactions with
                confidence and clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-8 pt-8"
              >
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-black">
                    500+
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    Properties Sold
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-black">
                    $250M+
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    In Transactions
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-black">
                    98%
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    Client Satisfaction
                  </div>
                </div>
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
                className="absolute -top-6 -left-6 w-32 h-32 bg-black/5 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-black/5 rounded-full blur-3xl"
              />

              {/* Image container with unique border treatment */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-slate-100">
                <div className="absolute inset-0 border-8 border-white rounded-3xl z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt="Professional Real Estate Agent"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating badge - positioned outside overflow container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-[-1.5rem] left-[-1.5rem] bg-black text-white rounded-2xl px-6 py-4 shadow-xl z-20"
              >
                <div className="text-sm font-medium">Licensed Since</div>
                <div className="text-2xl font-bold">2014</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
