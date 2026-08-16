"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

/*
 * MOCK CONTENT - placeholder testimonials awaiting real client quotes.
 * Personas follow the audience-voice spec: families who bought or sold a home
 * to live in. No entry opens with a dollar figure. The people are invented.
 */
const MOCK_TESTIMONIALS = [
  {
    quote:
      "We had a two-year-old and another on the way, and no idea where to start. We got a shortlist built around school zoning and nap-friendly commutes, not just square footage.",
    author: "Danielle & Marcus Reyes",
    role: "First-time buyers, Winter Garden",
    rating: 5,
  },
  {
    quote:
      "Selling with three kids in the house sounded impossible. Showings were scheduled around school pickup and bedtime, and somehow the place still looked presentable.",
    author: "The Okafor family",
    role: "Sold and moved up, Lake Nona",
    rating: 5,
  },
  {
    quote:
      "We were talked out of a house we loved. The street backed onto a road that would have been miserable with toddlers. Annoying at the time; obviously right in hindsight.",
    author: "Priya & Sam Whitfield",
    role: "Relocated to Kissimmee",
    rating: 5,
  },
  {
    quote:
      "Every question we asked got a straight answer, including the ones we felt silly asking. Nobody made us feel like we should already know how any of this worked.",
    author: "Aisha Bennett",
    role: "First-time buyer, Orlando",
    rating: 5,
  },
  {
    quote:
      "Moving from out of state with kids already in school meant we bought on video walkthroughs. The notes on each neighborhood were honest about the downsides too.",
    author: "The Alvarez family",
    role: "Relocated from Ohio, Winter Park",
    rating: 5,
  },
  {
    quote:
      "Our daughter uses a wheelchair, so single-level living and door widths mattered more than anything else. That was understood immediately and never treated as a hassle.",
    author: "Tom & Rachel Byrne",
    role: "Bought in Windermere",
    rating: 5,
  },
];

export function AboutTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Client Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            What <span className="italic font-light">Clients</span> Say
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            Families who were, not that long ago, exactly where you are now.
          </p>
        </motion.div>

        {/* Bento-style grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map((testimonial, index) => {
            // Create varied heights for masonry effect
            const sizes = [
              "md:row-span-1",
              "md:row-span-2",
              "md:row-span-1",
              "md:row-span-2",
              "md:row-span-1",
              "md:row-span-1",
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${sizes[index]} ${
                  index === 1 ? "lg:col-span-1" : ""
                } ${index === 3 ? "lg:col-span-1" : ""}`}
              >
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="h-full bg-card rounded-2xl p-8 shadow-sm border border-border flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-foreground"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 text-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-border">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-foreground mb-6 max-w-2xl">
              Thinking about a move? Tell me what your family needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors"
              >
                Start the Conversation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
