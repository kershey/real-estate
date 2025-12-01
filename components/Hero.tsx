"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/hero-family-home-img.jpg"
          alt="Warm and inviting family home with wraparound porch and spacious yard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="max-w-2xl space-y-6">
          <motion.h1
            className="text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Your Trusted Real Estate Partner
          </motion.h1>
          <motion.p
            className="max-w-xl text-base text-white drop-shadow-md md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Finding the right home for your family is about more than just square footage. It's about safe neighborhoods, good schools, and spaces where your children can grow and thrive. We're here to help you discover a place where your family can build lasting memories together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-medium"
            >
              Explore Listings
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
