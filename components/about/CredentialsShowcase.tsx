"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const credentials = [
  {
    year: "2014",
    title: "Licensed Real Estate Agent",
    organization: "State Real Estate Commission",
    description: "Obtained professional real estate license",
  },
  {
    year: "2016",
    title: "Certified Negotiation Expert",
    organization: "Real Estate Negotiation Institute",
    description: "Advanced training in negotiation strategies",
  },
  {
    year: "2018",
    title: "Luxury Property Specialist",
    organization: "Institute for Luxury Home Marketing",
    description: "Certification in high-end property marketing",
  },
  {
    year: "2020",
    title: "Top Producer Award",
    organization: "Regional Real Estate Board",
    description: "Recognized for outstanding sales performance",
  },
  {
    year: "2022",
    title: "Investment Property Consultant",
    organization: "National Association of Realtors",
    description: "Specialized certification in investment properties",
  },
  {
    year: "2024",
    title: "Technology Innovation Leader",
    organization: "PropTech Association",
    description: "Award for innovative use of technology in real estate",
  },
];

export function CredentialsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80"
          alt="Luxury Interior"
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
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">
            Credentials & Recognition
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            A Decade of <span className="italic font-light">Excellence</span>
          </h2>
        </motion.div>

        {/* Timeline layout with staggered cards */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {credentials.map((credential, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Year badge - centered on timeline for desktop */}
                  <div
                    className={`lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:z-10 ${
                      isEven ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white font-bold text-lg shadow-lg">
                      {credential.year}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`${
                      isEven
                        ? "lg:col-start-1 lg:text-right"
                        : "lg:col-start-2 lg:text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-100 ${
                        isEven ? "lg:ml-auto" : "lg:mr-auto"
                      } max-w-md`}
                    >
                      <div
                        className={`flex items-start gap-4 ${
                          isEven
                            ? "lg:flex-row-reverse lg:text-right"
                            : "lg:flex-row lg:text-left"
                        }`}
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">
                            {credential.title}
                          </h3>
                          <p className="text-sm font-medium text-slate-600 mb-2">
                            {credential.organization}
                          </p>
                          <p className="text-sm text-slate-500">
                            {credential.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div
                    className={`hidden lg:block ${
                      isEven ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "6", label: "Certifications" },
            { value: "500+", label: "Properties Sold" },
            { value: "15+", label: "Awards Won" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
