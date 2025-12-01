"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, School, ShoppingBag, Palmtree, Building2, Home } from "lucide-react";

const areas = [
  {
    name: "Orlando",
    description: "Great schools, family-friendly neighborhoods, and endless activities for kids. Close to theme parks, with wonderful community centers and safe streets perfect for raising a family.",
    icon: Building2,
    highlights: ["Great Schools", "Parks & Recreation", "Family Activities"],
  },
  {
    name: "Kissimmee",
    description: "Affordable homes in welcoming neighborhoods where kids can play safely. Excellent schools, community parks, and a strong sense of community make this perfect for young families.",
    icon: Home,
    highlights: ["Affordable Homes", "Safe Streets", "Community Spirit"],
  },
  {
    name: "Winter Garden",
    description: "A charming town with top-rated schools and a wonderful downtown where families gather. Kids love the splash pad and bike trails, while parents appreciate the strong school system.",
    icon: Palmtree,
    highlights: ["Top-Rated Schools", "Family Events", "Bike Trails"],
  },
  {
    name: "Lake Nona",
    description: "Modern neighborhoods built with families in mind. Outstanding schools, safe walking paths, parks on every corner, and a real community feel where neighbors know each other.",
    icon: School,
    highlights: ["Modern Schools", "Safe Community", "Walking Trails"],
  },
  {
    name: "Winter Park",
    description: "Tree-lined streets perfect for evening strolls, excellent schools, and a downtown with family restaurants and ice cream shops. A warm community where kids can grow up safely.",
    icon: ShoppingBag,
    highlights: ["Excellent Schools", "Safe Streets", "Community Feel"],
  },
  {
    name: "Windermere",
    description: "Peaceful lakeside community with highly-rated schools and spacious yards for kids to play. Safe neighborhoods, great parks, and a family-focused atmosphere throughout.",
    icon: MapPin,
    highlights: ["Top Schools", "Large Yards", "Safe & Quiet"],
  },
];

export function AreasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-br from-stone-100/50 via-amber-50/20 to-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-stone-700 tracking-wider uppercase">
            Great Places to Raise a Family
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-stone-900">
            Family-Friendly <span className="italic font-light text-stone-600">Neighborhoods</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            I know these communities inside and out. From school ratings to playground locations,
            I'll help you find a neighborhood where your family will feel at home and your kids
            can thrive.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-stone-200 to-stone-100 group-hover:from-stone-700 group-hover:to-stone-800 group-hover:text-white transition-all duration-300">
                  <area.icon className="w-7 h-7 text-stone-700 group-hover:text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-stone-900 mb-3">{area.name}</h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {area.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-block text-xs font-medium text-stone-800 bg-stone-100 rounded-full px-3 py-1"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-stone-700 to-stone-800 text-white rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-lg font-medium mb-2">
              Interested in a different area?
            </p>
            <p className="text-stone-200">
              I work throughout Central Florida and would love to help your family find the perfect home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
