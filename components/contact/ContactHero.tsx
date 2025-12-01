"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50/40 to-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-block rounded-full bg-stone-200 px-4 py-2 text-sm font-medium text-stone-700">
                  Let's Connect
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold leading-tight text-stone-900"
              >
                Find Your Family's{" "}
                <span className="italic font-light text-stone-600">Dream</span>
                <br />
                Home{" "}
                <span className="italic font-light text-stone-600">Together</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-xl"
              >
                I understand that finding the right home for your family is about more than just a property.
                It's about great schools, safe neighborhoods, parks for the kids, and a community where your
                family can grow and thrive. Let me help you find that special place.
              </motion.p>
            </div>
          </motion.div>

          {/* Right: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Call or Text Anytime",
                content: "(407) 555-0123",
                description: "I'm here when you need me - flexible hours for busy families",
              },
              {
                icon: Mail,
                title: "Send Me an Email",
                content: "hello@realestate.com",
                description: "Quick responses, usually within a few hours",
              },
              {
                icon: MapPin,
                title: "Local to Orlando",
                content: "Orlando, Florida",
                description: "Proudly serving Central Florida families",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-stone-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-stone-200 to-stone-100 rounded-xl p-3">
                    <item.icon className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-lg text-stone-800 font-medium">
                      {item.content}
                    </p>
                    <p className="text-sm text-stone-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
