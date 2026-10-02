import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { pathways } from "@/lib/pathways";

/** Four quiet ways-to-help links, ruled rather than carded. */
export function WaysIHelp() {
  return (
    <section aria-labelledby="ways-title" className="border-y bg-card">
      <h2 id="ways-title" className="sr-only">
        Ways I can help
      </h2>
      <StaggerContainer
        staggerDelay={0.08}
        className="container-site grid divide-y py-12 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
      >
        {pathways.map((p) => {
          const Icon = p.icon;
          return (
            <StaggerItem key={p.slug} y={16}>
              <Link
                href={`/explore#${p.slug}`}
                className="group flex flex-col items-center gap-3 px-6 py-8 text-center transition-colors hover:text-gold-ink"
              >
                <Icon
                  className="size-8 text-gold transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:-translate-y-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-navy">
                  {p.title}
                </h3>
                <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground">{p.help}</p>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
