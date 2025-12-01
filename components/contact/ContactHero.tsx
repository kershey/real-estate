"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-24 md:py-32">
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
                <span className="inline-block rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-black">
                  Get In Touch
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Let's Find Your{" "}
                <span className="italic font-light">Perfect</span>
                <br />
                Property{" "}
                <span className="italic font-light">Together</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
              >
                Whether you're ready to buy, sell, or just exploring your options,
                I'm here to guide you through every step of your real estate journey
                in Central Florida.
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
                title: "Phone",
                content: "(407) 555-0123",
                description: "Mon-Sat, 9am-7pm EST",
              },
              {
                icon: Mail,
                title: "Email",
                content: "hello@realestate.com",
                description: "I'll respond within 24 hours",
              },
              {
                icon: MapPin,
                title: "Office",
                content: "Orlando, Florida",
                description: "Serving all of Central Florida",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-black/5 rounded-xl p-3">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-900 font-medium">
                      {item.content}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
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
