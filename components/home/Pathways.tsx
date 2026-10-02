import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { pathways } from "@/lib/pathways";

/**
 * Four pathway cards directly under the hero. Each links to the matching
 * mini-guide on the Explore page.
 */
export function Pathways() {
  return (
    <section aria-labelledby="pathways-title" className="relative bg-background">
      <h2 id="pathways-title" className="sr-only">
        How can I help you?
      </h2>
      <StaggerContainer
        staggerDelay={0.08}
        className="container-site grid gap-5 py-14 sm:grid-cols-2 lg:-mt-12 lg:grid-cols-4 lg:py-0 lg:pb-20"
      >
        {pathways.map((p) => {
          const Icon = p.icon;
          return (
            <StaggerItem key={p.slug}>
              <Link
                href={`/explore#${p.slug}`}
                className="group flex h-full flex-col bg-card shadow-[0_1px_0_0_var(--border),0_24px_40px_-32px_rgb(11_27_51/0.45)] transition-shadow duration-500 hover:shadow-[0_1px_0_0_var(--border),0_32px_48px_-28px_rgb(11_27_51/0.55)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-105"
                  />
                  <span className="absolute -bottom-6 left-5 grid size-12 place-items-center rounded-full bg-gold text-navy shadow-md">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-10">
                  <h3 className="font-sans text-base font-bold uppercase tracking-[0.06em] text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gold-ink">
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
    </section>
  );
}
