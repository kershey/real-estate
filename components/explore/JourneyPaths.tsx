import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { pathways } from "@/lib/pathways";

/**
 * The four pathways as educational mini-guides. Each anchor matches the
 * Home page card link (/explore#new-construction and so on). "Learn More"
 * will point at the downloadable guides once the client supplies them; until
 * then it opens the contact form with that pathway pre-selected.
 */
export function JourneyPaths() {
  return (
    <section aria-labelledby="journey-title" className="bg-background">
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <FadeIn>
            <SectionHeading
              id="journey-title"
              kicker="Your real estate journey"
              title="Four Paths. One Trusted Guide."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-[52ch] border-l border-gold pl-6 text-base leading-relaxed text-muted-foreground md:text-lg lg:ml-auto">
              No matter where you are in your real estate journey, I provide guidance, strategy
              and support to help you move forward with confidence.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          staggerDelay={0.1}
          className="mt-14 grid gap-px overflow-hidden border bg-border md:grid-cols-2"
        >
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.slug} className="h-full">
                <article
                  id={p.slug}
                  className="group flex h-full scroll-mt-24 flex-col bg-card p-7 transition-colors duration-500 hover:bg-gold-soft/40 md:p-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-full bg-gold-soft text-gold-ink transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-navy">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-6 font-serif text-2xl leading-snug text-navy md:text-[1.75rem]">
                    {p.headline}
                  </p>
                  <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-foreground">{p.body}</p>
                  <div className="mt-auto pt-8">
                    <Link
                      href={`/lets-talk?interest=${encodeURIComponent(p.interest)}#contact`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink"
                    >
                      Learn More
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote>
            <p className="font-serif text-[clamp(1.375rem,2.6vw,2rem)] italic leading-snug text-navy">
              &ldquo;It&rsquo;s not just about finding a house &mdash; it&rsquo;s about finding the right
              place for your next chapter.&rdquo;
            </p>
            <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
              Paul E.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
