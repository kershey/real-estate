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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Your Trusted Real Estate Partner
          </h1>
          <p className="max-w-xl text-base text-white drop-shadow-md md:text-lg">
            Whether you're buying your first home, selling your property, or finding the perfect rental, we're here to guide you every step of the way. Experience seamless transactions, expert advice, and personalized service that puts your needs first.
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
