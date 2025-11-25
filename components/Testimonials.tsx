'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

const testimonials = [
  {
    id: 1,
    quote: "Owning a villa by Apex has been life-changing. The luxurious design, private pool, and stunning views make every day feel like a vacation. It's the perfect blend of elegance and comfort. Couldn't be happier with our investment!",
    name: "Tanya Rudwick",
    role: "Villa Owner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 2,
    quote: "The entire booking process was seamless and stress-free. From browsing properties to finalizing the reservation, everything was intuitive and well-organized. The property exceeded our expectations in every way.",
    name: "Michael Chen",
    role: "Property Guest",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 3,
    quote: "As a property investor, I've worked with many platforms, but this one stands out. The management tools, analytics, and support team have made property management effortless and profitable.",
    name: "Sarah Martinez",
    role: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Hear from our satisfied clients
          </h2>
        </FadeIn>

        {/* Testimonial Content with Navigation */}
        <div className="relative min-h-[380px] flex items-center justify-center">
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 text-gray-600 hover:text-gray-900 z-10"
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
              className="absolute inset-0 px-12"
            >
              <blockquote className="space-y-8">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg"
                  >
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                  "{testimonials[currentIndex].quote}"
                </motion.p>

                {/* Author Info */}
                <motion.footer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-1"
                >
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentIndex].role}
                  </div>
                </motion.footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 text-gray-600 hover:text-gray-900 z-10"
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
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-900 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-2.5'
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
