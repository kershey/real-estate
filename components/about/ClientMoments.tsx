"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

/**
 * Real client photography instead of testimonials. Two rows of twelve
 * columns; each row's spans sum to 12 so the grid has no gaps, and each
 * photo's span suits its orientation.
 */
const photos = [
  { src: "/paul/client-moment-1.jpg", alt: "Paul with a young family holding a Said Yes to the Address sign", span: "md:col-span-5" },
  { src: "/paul/client-moment-2.jpg", alt: "Clients celebrating in their new home with Paul", span: "md:col-span-3" },
  { src: "/paul/client-moment-4.jpg", alt: "A family in the kitchen of their new Central Florida home", span: "md:col-span-4" },
  { src: "/paul/client-moment-3.jpg", alt: "Paul and clients on closing day", span: "md:col-span-3" },
  { src: "/paul/client-moment-5.jpg", alt: "Clients standing outside their new home with Paul", span: "md:col-span-5" },
  { src: "/paul/client-moment-6.jpg", alt: "Paul with happy clients after closing", span: "md:col-span-4" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function ClientMoments() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="moments-title" className="bg-card">
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <FadeIn>
            <SectionHeading
              id="moments-title"
              kicker="Client moments"
              title="Real Clients. Real Moments."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg lg:ml-auto">
              Every move has a story. Here are a few of the amazing clients I&rsquo;ve been
              fortunate to be part of.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-14 grid auto-rows-[16rem] grid-cols-2 gap-3 md:auto-rows-[18rem] md:grid-cols-12 md:gap-4 lg:auto-rows-[22rem]">
          {photos.map((p, i) => (
            <motion.li
              key={p.src}
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease }}
              className={`group relative overflow-hidden bg-secondary ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 40vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-[1.04]"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
