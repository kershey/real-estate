"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-family-porch.jpg"
          alt="Parents sitting on the front steps of their home with their young son"
          fill
          className="object-cover"
          priority
        />
        {/*
          Warm scrim, capped well under the 35% ceiling. The previous heavy
          dark wash crushed exactly the autumn light that makes this photo feel
          like a family home rather than a listing.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/25 via-foreground/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-6 py-20">
        {/*
          Headline sits in a warm panel rather than white-on-dark. The photo is
          bright enough that light text could not hold 4.5:1 without a heavy
          scrim, and a heavy scrim is the prestige treatment we are removing.
          Dark warm text on a warm panel clears 4.5:1 by a wide margin.
        */}
        <motion.div
          className="max-w-xl space-y-5 rounded-3xl bg-background/90 p-8 shadow-lg backdrop-blur-sm md:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Your Trusted Real Estate Partner
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            Finding the right home for your family is about more than just square footage. It's about safe neighborhoods, good schools, and spaces where your children can grow and thrive. We're here to help you discover a place where your family can build lasting memories together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            <Button asChild size="lg" className="font-medium">
              <Link href="/contact">Tell Me What You’re Looking For</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
