'use client';

import Image from 'next/image';
import { FadeIn } from './animations/FadeIn';
import { SlideIn } from './animations/SlideIn';

export function ConnectingSection() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Two Column Layout */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Heading */}
          <SlideIn direction="left">
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Helping Families Find
              <br />
              Room to Grow
            </h2>
          </SlideIn>

          {/* Right Column - Description */}
          <SlideIn direction="right" delay={0.2}>
            <div className="flex items-center">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                I work with families across Central Florida who need more than a floor plan — a school they feel good
                about, a street their kids can play on, and space that still fits in a few years. That’s the part I
                help you get right.
              </p>
            </div>
          </SlideIn>
        </div>

        {/* Large Interior Image */}
        <FadeIn delay={0.3}>
          <div className="relative h-96 w-full overflow-hidden rounded-2xl md:h-[500px] lg:h-[600px]">
            <Image
              src="/interior-family-living.jpg"
              alt="A father and his two sons playing with building blocks on the living room floor"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
