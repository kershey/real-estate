import { Mail, Phone } from "lucide-react";
import { ScheduleButton } from "@/components/site/ScheduleButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface CtaBandProps {
  kicker?: string;
  title: string;
  body?: string;
  /** Show phone and email beneath the button. */
  contact?: boolean;
  className?: string;
}

/**
 * The navy consultation band that closes every page. Typography and color
 * only, no extra photography, per the Home page brief.
 */
export function CtaBand({ kicker, title, body, contact = true, className }: CtaBandProps) {
  return (
    <section
      aria-labelledby="cta-title"
      className={cn("navy-texture relative isolate overflow-hidden text-white", className)}
    >
      <PalmSilhouette className="pointer-events-none absolute -right-10 -top-10 h-[130%] w-auto text-white/[0.06]" />
      <div className="container-site grid items-center gap-10 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <FadeIn>
          {kicker && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{kicker}</p>
          )}
          <h2
            id="cta-title"
            className="mt-3 max-w-2xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-white"
          >
            {title}
          </h2>
          {body && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {body}
            </p>
          )}
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-col items-start gap-6 md:items-end md:border-l md:border-white/15 md:pl-12">
          <ScheduleButton variant="gold" withIcon />
          {contact && (
            <ul className="flex flex-col gap-3 text-sm text-white/90 md:items-end">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                  data-analytics="phone-click"
                >
                  <Phone className="size-4 text-gold" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 text-gold" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

function PalmSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" aria-hidden="true" className={className} fill="currentColor">
      <path d="M96 300c6-80 4-150-10-200 20 10 35 30 44 60 4-40-6-75-28-100 25 5 45 20 60 45 2-35-15-65-45-85 30-5 55 5 75 30-10-40-45-60-95-55-10-20-30-30-55-25 20 10 32 25 36 45C50 5 20 15 0 45c25-10 50-5 70 15C35 60 10 85 0 125c20-25 45-35 75-30C35 115 15 150 20 195c10-35 30-55 60-65-10 55-8 110 4 170h12Z" />
    </svg>
  );
}
