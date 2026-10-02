import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Handshake, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const points = [
  { Icon: Handshake, title: "Client-Focused", body: "Always your best interests." },
  { Icon: BarChart3, title: "Strategic Approach", body: "Data-driven. Results-oriented." },
  { Icon: MapPin, title: "Local Expertise", body: "Central Florida is home." },
];

/** Brief bio teaser with the black-suit headshot. */
export function MeetPaul() {
  return (
    <section aria-labelledby="meet-title" className="bg-card">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn className="relative isolate min-h-[28rem] overflow-hidden bg-navy lg:min-h-0">
          <GeometricLines className="absolute inset-0 h-full w-full text-white/10" />
          <Image
            src="/paul/paul-headshot.jpg"
            alt="Paul E., Realtor, in a black suit"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[50%_15%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-card lg:block"
          />
        </FadeIn>

        <div className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:pl-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">Meet</p>
            <h2
              id="meet-title"
              className="mt-2 font-serif text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-[-0.02em] text-navy"
            >
              Paul E.
            </h2>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
              Realtor. Advisor. Your Advocate.
            </p>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-foreground md:text-lg">
              With over 5 years of experience, I help buyers, sellers, and relocating clients
              navigate Central Florida with confidence. I specialize in new construction,
              relocation, and strategic negotiations &mdash; always putting my clients&rsquo; goals
              first. Real estate isn&rsquo;t just what I do, it&rsquo;s how I serve.
            </p>
            <Button asChild size="cta" className="mt-8">
              <Link href="/about">
                Meet Paul
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.12}
            className="flex flex-col gap-8 lg:border-l lg:border-border lg:pl-10"
          >
            {points.map(({ Icon, title, body }) => (
              <StaggerItem key={title} className="flex items-start gap-4">
                <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-ink">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function GeometricLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 120 L140 0 M0 320 L400 40 M0 520 L400 240 M60 600 L400 360 M260 600 L400 500" />
      <path d="M0 220 L400 140 M0 420 L400 340" strokeDasharray="4 10" />
    </svg>
  );
}
