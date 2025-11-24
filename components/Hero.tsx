"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-house.jpg"
          alt="Modern luxury home at dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Simplifying Property Buying,
            <br />
            Selling, and Renting
          </h1>
          <p className="max-w-xl text-base text-white/90 md:text-lg">
            Your life revolves around home should too. We design flexible living
            spaces that adapt to your current lifestyle, embracing comfort,
            functionality, and style in every step of life.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-medium"
          >
            Explore Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
