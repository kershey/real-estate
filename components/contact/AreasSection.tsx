"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, School, ShoppingBag, Palmtree, Building2, Home } from "lucide-react";

const areas = [
  {
    name: "Orlando",
    description: "The heart of Central Florida with world-class attractions, vibrant downtown, and diverse neighborhoods perfect for families and professionals.",
    icon: Building2,
    highlights: ["Theme Parks", "Downtown Living", "Business Hub"],
  },
  {
    name: "Kissimmee",
    description: "Family-friendly community offering affordable homes near major attractions with excellent schools and parks throughout the area.",
    icon: Home,
    highlights: ["Affordable Housing", "Family Communities", "Tourist Hub"],
  },
  {
    name: "Winter Garden",
    description: "Charming historic downtown with a tight-knit community, top-rated schools, and beautiful homes in master-planned neighborhoods.",
    icon: Palmtree,
    highlights: ["Historic Downtown", "Top Schools", "Master Plans"],
  },
  {
    name: "Lake Nona",
    description: "Modern, innovative community focused on health, wellness, and technology with state-of-the-art amenities and medical facilities.",
    icon: School,
    highlights: ["Medical City", "Innovation Hub", "Modern Living"],
  },
  {
    name: "Winter Park",
    description: "Upscale community known for its tree-lined streets, Park Avenue shopping district, and prestigious cultural institutions.",
    icon: ShoppingBag,
    highlights: ["Luxury Homes", "Park Avenue", "Arts & Culture"],
  },
  {
    name: "Windermere",
    description: "Prestigious lakeside community offering luxury estates, excellent schools, and a peaceful suburban lifestyle with easy city access.",
    icon: MapPin,
    highlights: ["Luxury Estates", "Lakeside Living", "Golf Courses"],
  },
];

export function AreasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">
            Service Areas
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Serving <span className="italic font-light">Central</span> Florida
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From vibrant urban centers to peaceful suburban neighborhoods, I specialize
            in helping you find the perfect home across Central Florida's most desirable
            communities.
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
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-black/5 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <area.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-black mb-3">{area.name}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {area.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-block text-xs font-medium text-slate-700 bg-slate-100 rounded-full px-3 py-1"
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
          <div className="inline-block bg-black text-white rounded-2xl px-8 py-6">
            <p className="text-lg font-medium mb-2">
              Don't see your area listed?
            </p>
            <p className="text-slate-300">
              I serve all of Central Florida. Get in touch to discuss your location.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
