import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { IdxWidget } from "@/components/home/IdxWidget";
import { idx } from "@/lib/site";

/**
 * IDX home search block. Copy follows the Page 1 document; the search itself
 * is the brokerage's own Dalton Wade widget, so visitors browse live MLS
 * listings with no registration wall.
 */
const quickLinks = [
  { label: "New Listings", href: idx.homeUrl, external: true },
  {
    label: "New Construction",
    href: "/explore#new-construction",
    external: false,
  },
  { label: "Open Houses", href: idx.homeUrl, external: true },
];

export function HomeSearch() {
  return (
    <section
      id="search"
      aria-labelledby="search-title"
      className="scroll-mt-20 bg-card"
    >
      <div className="container-site py-20 md:py-28">
        <FadeIn className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
              Start your search today
            </p>
            <h2
              id="search-title"
              className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] text-navy"
            >
              Find Homes in Central Florida
            </h2>
          </div>
          <div className="lg:justify-self-end lg:text-right">
            <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg lg:ml-auto">
              Search thousands of homes, new construction and upcoming listings
              &mdash; all in one place.
            </p>
            <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm lg:justify-end">
              {quickLinks.map((q, i) => (
                <li key={q.label} className="inline-flex items-center gap-4">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-3 w-px bg-border" />
                  )}
                  {q.external ? (
                    <a
                      href={q.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy underline-offset-4 transition-colors hover:text-gold-ink hover:underline"
                      data-analytics="idx-quick-link"
                    >
                      {q.label}
                    </a>
                  ) : (
                    <Link
                      href={q.href}
                      className="font-medium text-navy underline-offset-4 transition-colors hover:text-gold-ink hover:underline"
                    >
                      {q.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 min-w-0">
          <div className="mx-auto max-w-[62rem] border border-navy/15 bg-card p-2 shadow-[0_24px_48px_-32px_rgb(11_27_51/0.5)] sm:p-4">
            <IdxWidget />
          </div>
          <div className="mx-auto mt-3 flex max-w-[62rem] flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              Listings provided by{" "}
              <a
                href={idx.homeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-navy hover:underline"
              >
                Dalton Wade Real Estate Group
              </a>
              . Browse freely, no sign-up required.
            </p>
            {/* Always-available path to listings in case the embed is blocked by the IDX host. */}
            <a
              href={idx.homeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-navy underline-offset-4 hover:text-gold-ink hover:underline"
              data-analytics="idx-open-full-search"
            >
              Open the full search
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
