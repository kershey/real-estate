import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { pathways, type PathwaySlug } from "@/lib/pathways";

/**
 * "Ways I Can Help" per the Page 4 copy, in the document's order and with its
 * exact titles and lines.
 */
const ways: { slug: PathwaySlug; title: string; line: string }[] = [
  { slug: "buy", title: "Buy a Home", line: "Let's find the right home for your lifestyle." },
  { slug: "sell", title: "Sell a Home", line: "Get top value with a strategic plan." },
  {
    slug: "new-construction",
    title: "New Construction",
    line: "Expert guidance from blueprint to closing.",
  },
  {
    slug: "relocate",
    title: "Relocate to Florida",
    line: "A smoother move starts with the right partner.",
  },
];

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
        {ways.map((w) => {
          const Icon = pathways.find((p) => p.slug === w.slug)!.icon;
          return (
            <StaggerItem key={w.slug} y={16}>
              <Link
                href={`/explore#${w.slug}`}
                className="group flex flex-col items-center gap-3 px-6 py-8 text-center transition-colors hover:text-gold-ink"
              >
                <Icon
                  className="size-8 text-gold transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:-translate-y-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-navy">
                  {w.title}
                </h3>
                <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground">{w.line}</p>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
