"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BedDouble, Bath, ChevronLeft, ChevronRight } from "lucide-react";
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

        {/* Property Card - Positioned on the right side */}
        <Card className="absolute right-24 top-1/2 hidden w-80 -translate-y-1/2 transform overflow-hidden border-none shadow-2xl lg:block">
          <div className="relative h-48 w-full">
            <Image
              src="/property-card.jpg"
              alt="Modern Family Home"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-4">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Modern Family Home
            </h3>
            <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BedDouble className="h-4 w-4" />
                <span>3</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>2</span>
              </div>
            </div>
            <Button className="w-full bg-black text-white hover:bg-black/90">
              Contact Us
            </Button>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* Left side - IDKA Happy Clients */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-300" />
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400" />
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-500" />
              </div>
              <span className="text-sm font-medium text-white">
                1DKA Happy Clients
              </span>
            </div>

            {/* Center - Navigation Dots */}
            <div className="flex items-center gap-2">
              <button className="h-2 w-2 rounded-full bg-white" />
              <button className="h-2 w-8 rounded-full bg-white/50" />
              <button className="h-2 w-2 rounded-full bg-white/50" />
            </div>

            {/* Right side - Arrow Navigation */}
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
