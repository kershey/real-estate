"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Working with this agent was the best decision we made. Their knowledge of the market and negotiation skills saved us over $50,000 on our dream home.",
    author: "Sarah & Michael Chen",
    role: "Home Buyers",
    rating: 5,
  },
  {
    quote:
      "Exceptional service from start to finish. Sold our property in just 12 days for above asking price. Couldn't have asked for a better experience.",
    author: "David Rodriguez",
    role: "Property Seller",
    rating: 5,
  },
  {
    quote:
      "As first-time buyers, we were nervous about the process. They guided us every step of the way with patience and expertise. Forever grateful!",
    author: "Emily Thompson",
    role: "First-Time Buyer",
    rating: 5,
  },
  {
    quote:
      "Built my entire investment portfolio with their guidance. Their market insights and investment strategies have been invaluable.",
    author: "James Park",
    role: "Real Estate Investor",
    rating: 5,
  },
  {
    quote:
      "The level of professionalism and attention to detail is unmatched. They made our relocation seamless and stress-free.",
    author: "Lisa Anderson",
    role: "Corporate Relocation",
    rating: 5,
  },
  {
    quote:
      "Outstanding communication and transparency throughout. They truly care about their clients and it shows in every interaction.",
    author: "Robert Williams",
    role: "Luxury Home Buyer",
    rating: 5,
  },
];

export function AboutTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute left-0 bottom-0 w-1/2 h-1/3 opacity-[0.04]">
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80"
          alt="Modern Home Interior"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">
            Client Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What <span className="italic font-light">Clients</span> Say
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl">
            Real feedback from real people who've experienced the difference of
            working with a dedicated professional.
          </p>
        </motion.div>

        {/* Bento-style grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
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
                  className="h-full bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 text-slate-700 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="font-bold text-slate-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
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
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-slate-700 mb-6 max-w-2xl">
              Ready to start your real estate journey with a trusted partner?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-800 transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
