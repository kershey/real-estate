'use client';

import Image from 'next/image';
import { FadeIn } from './animations/FadeIn';
import { SlideIn } from './animations/SlideIn';

export function ConnectingSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Two Column Layout */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Heading */}
          <SlideIn direction="left">
            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Connecting People with
              <br />
              Perfect Properties
            </h2>
          </SlideIn>

          {/* Right Column - Description */}
          <SlideIn direction="right" delay={0.2}>
            <div className="flex items-center">
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Apex is a leading real estate platform dedicated to connecting buyers, sellers, and renters with their
                perfect property.
              </p>
            </div>
          </SlideIn>
        </div>

        {/* Large Interior Image */}
        <FadeIn delay={0.3}>
          <div className="relative h-96 w-full overflow-hidden rounded-2xl md:h-[500px] lg:h-[600px]">
            <Image
              src="/interior-dining.jpg"
              alt="Modern interior with dining area and wooden beams"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
