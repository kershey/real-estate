'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

/*
 * MOCK CONTENT - placeholder testimonials awaiting real client quotes.
 * Personas and wording follow the audience-voice spec (families who bought a
 * home to live in - see the audience-voice spec for excluded personas), but the
 * people are invented. Swap wholesale when real testimonials are available.
 */
const MOCK_TESTIMONIALS = [
  {
    id: 1,
    quote:
      "We were nervous about buying our first home with a toddler in tow. Every neighborhood we looked at came with an honest rundown - which streets stay quiet, which schools our daughter could actually get into. We never once felt rushed.",
    name: "Danielle & Marcus Reyes",
    role: "First-time buyers, Winter Garden",
  },
  {
    id: 2,
    quote:
      "Our third kid arrived and the house just stopped working. We needed a real yard, a school district we trusted, and a budget that didn't keep us up at night. Somehow all three turned out to be in the same place.",
    name: "The Okafor family",
    role: "Moved up the street, Lake Nona",
  },
  {
    id: 3,
    quote:
      "Relocating from out of state with two kids already in school is exactly as stressful as it sounds. We got video walkthroughs, straight answers about commute times, and someone who knew which parks were worth the drive.",
    name: "Priya & Sam Whitfield",
    role: "Relocated to Kissimmee",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_TESTIMONIALS.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + MOCK_TESTIMONIALS.length) % MOCK_TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % MOCK_TESTIMONIALS.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-6 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-16">
            Families I’ve helped find a home
          </h2>
        </FadeIn>

        {/* Testimonial Content with Navigation */}
        <div className="relative min-h-[260px] flex items-center justify-center">
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-foreground z-10"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Testimonials with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center px-12"
            >
              <blockquote className="space-y-6">
                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  "{MOCK_TESTIMONIALS[currentIndex].quote}"
                </motion.p>

                {/* Author Info */}
                <motion.footer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-1"
                >
                  <div className="font-semibold text-foreground text-lg">
                    {MOCK_TESTIMONIALS[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {MOCK_TESTIMONIALS[currentIndex].role}
                  </div>
                </motion.footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-foreground z-10"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {MOCK_TESTIMONIALS.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-input hover:bg-muted-foreground w-2.5'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
