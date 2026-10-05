import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { pathways } from "@/lib/pathways";

/**
 * Four pathway cards directly under the hero. Each links to the matching
 * mini-guide on the Explore page.
 */
export function Pathways() {
  return (
    <section aria-labelledby="pathways-title" className="bg-background">
      <div className="container-site py-20 md:py-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
            How Can I Help?
          </p>
          <h2
            id="pathways-title"
            className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] text-navy"
          >
            Wherever You Are in Your Move
          </h2>
        </FadeIn>
        <StaggerContainer
          staggerDelay={0.08}
          className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-8"
        >
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/explore#${p.slug}`}
                  className="group flex h-full flex-col bg-card shadow-[0_1px_0_0_var(--border),0_24px_40px_-32px_rgb(11_27_51/0.45)] transition-shadow duration-500 hover:shadow-[0_1px_0_0_var(--border),0_32px_48px_-28px_rgb(11_27_51/0.55)]"
                >
                  <div className="relative aspect-[4/3]">
                    {/* Clip only the image (for the hover zoom) so the badge can overhang the edge. */}
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute -bottom-6 left-6 z-10 grid size-12 place-items-center rounded-full bg-gold text-navy shadow-md ring-4 ring-card">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-6 pb-7 pt-11">
                    <h3 className="font-sans text-base font-bold uppercase tracking-[0.06em] text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-gold-ink">
                      Learn More
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
