"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/*
 * MOCK CONTENT - placeholder credentials awaiting the agent's real
 * designations. Shape follows the agent-profile spec - family and
 * first-time-buyer relevance only, see that spec for excluded titles. The
 * specific entries and years are invented.
 */
const MOCK_CREDENTIALS = [
  {
    year: "2014",
    title: "Licensed Real Estate Agent",
    organization: "Florida Real Estate Commission",
    description: "Where it started",
  },
  {
    year: "2016",
    title: "Accredited Buyer's Representative",
    organization: "National Association of Realtors",
    description: "Training focused entirely on the buyer's side of the table",
  },
  {
    year: "2018",
    title: "First-Time Home Buyer Specialist",
    organization: "Florida Realtors",
    description: "Down payment programs, inspections, and first-purchase pitfalls",
  },
  {
    year: "2020",
    title: "Certified Relocation Specialist",
    organization: "Worldwide ERC",
    description: "Helping families moving to Florida from out of state",
  },
  {
    year: "2022",
    title: "Pricing Strategy Advisor",
    organization: "National Association of Realtors",
    description: "Pricing a family home honestly, for buyers and sellers alike",
  },
  {
    year: "2024",
    title: "Central Florida Neighborhood Specialist",
    organization: "Orlando Regional Realtor Association",
    description: "School zoning, community programs, and local market detail",
  },
];

export function CredentialsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Training & Experience
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            Eleven Years, <span className="italic font-light">One Focus</span>
          </h2>
        </motion.div>

        {/* Timeline layout with staggered cards */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {MOCK_CREDENTIALS.map((credential, index) => {
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
                  {/*
                    No lg:col-start here on purpose. An absolutely positioned
                    grid child WITH a definite grid placement resolves
                    left-1/2 against its grid *area* rather than the grid, which
                    pushed alternate badges 324px off the centre line.
                  */}
                  <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg">
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
                      className={`bg-card rounded-2xl p-8 shadow-lg border border-border ${
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
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-foreground"
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
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {credential.title}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            {credential.organization}
                          </p>
                          <p className="text-sm text-muted-foreground">
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
            { value: "11", label: "Years Licensed" },
            { value: "6", label: "Certifications" },
            { value: "6", label: "Communities Served" },
            { value: "180+", label: "Families Helped" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
