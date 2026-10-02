"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScriptAccent } from "@/components/site/ScriptAccent";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Home hero. The brief calls for one spectacular image (the tan-jacket
 * lifestyle photo). The photo is portrait, so the hero is a split: navy
 * text panel on the left, full-height photograph on the right that feathers
 * into the navy. On phones the photo sits above the copy.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="navy-texture relative isolate overflow-hidden text-white"
    >
      <div className="grid min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Photograph */}
        <div className="relative order-first aspect-[4/5] max-h-[70svh] overflow-hidden sm:aspect-[16/10] lg:order-last lg:aspect-auto lg:max-h-none">
          <motion.div style={{ y: photoY }} className="absolute inset-0 scale-[1.08]">
            <Image
              src="/paul/paul-tan-jacket.jpg"
              alt="Paul E. in a tan blazer standing in a Central Florida neighborhood"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_0%]"
            />
          </motion.div>
          {/* Feather into the navy panel. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/10 lg:to-transparent"
          />
          <motion.div
            {...enter(0.9)}
            className="absolute bottom-6 right-5 hidden text-right sm:block lg:bottom-12 lg:right-10"
          >
            <ScriptAccent className="items-end [&>span]:ml-auto">
              More Than a House...
              <br />A Place to Belong.
            </ScriptAccent>
          </motion.div>
        </div>

        {/* Copy */}
        <motion.div
          style={{ y: textY }}
          className="container-site relative flex flex-col justify-center py-14 lg:py-24 lg:pr-16"
        >
          <motion.p
            {...enter(0.05)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            Central Florida Real Estate
          </motion.p>
          <motion.h1
            id="hero-title"
            {...enter(0.15)}
            className="mt-5 max-w-[12ch] font-serif text-[clamp(2.75rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.015em] text-white"
          >
            Find Your Place in Central <span className="text-gold">Florida.</span>
          </motion.h1>
          <motion.p
            {...enter(0.3)}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/85"
          >
            Homes. Opportunity. A Brighter Tomorrow.
          </motion.p>
          <motion.p {...enter(0.4)} className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/80 md:text-lg">
            Whether you&rsquo;re building new, selling, relocating, or searching for the right
            home, get straightforward guidance and a strategy built around your goals.
          </motion.p>
          <motion.div {...enter(0.55)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="gold" size="cta">
              <Link href="/lets-talk" data-analytics="hero-lets-find-yours">
                Let&rsquo;s Find Yours
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="cta">
              <Link href="#search" data-analytics="hero-search">
                <Search aria-hidden="true" />
                Search Homes
              </Link>
            </Button>
          </motion.div>
          <motion.div {...enter(0.8)} className="mt-10 sm:hidden">
            <ScriptAccent>More Than a House... A Place to Belong.</ScriptAccent>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
