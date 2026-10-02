import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { SocialLinks } from "@/components/site/SocialLinks";
import { nav, site } from "@/lib/site";

/**
 * Site footer per the Site Overview: Paul E. brand on the left, navigation
 * and contact in the middle, brokerage compliance on the right. The
 * brokerage is clearly visible but visually secondary to Paul's brand.
 */
export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs font-serif text-lg leading-snug text-navy">
            {site.footerLine}
          </p>
          <SocialLinks className="mt-6 gap-5 text-navy" iconClassName="size-5" />
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-navy transition-colors hover:text-gold-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="font-medium text-navy transition-colors hover:text-gold-ink"
                data-analytics="phone-click"
              >
                {site.phone}
              </a>
              <span className="text-muted-foreground"> &middot; Call or Text</span>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-navy transition-colors hover:text-gold-ink"
              >
                {site.email}
              </a>
            </li>
            <li className="text-muted-foreground">{site.location}</li>
            <li className="text-muted-foreground">{site.serviceArea}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Brokerage
          </h3>
          <p className="mt-4 font-serif text-base leading-tight text-navy">
            {site.brokerage}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{site.brokerageTagline}</p>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <EqualHousingMark />
            Equal Housing Opportunity
          </p>
        </div>
      </div>

      <div className="border-t">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name} | {site.title}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.hud.gov/program_offices/fair_housing_equal_opp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-navy"
            >
              Fair Housing
            </a>
            <span aria-hidden="true" className="h-3 w-px bg-border" />
            <span className="font-script text-base text-gold-ink">Serving Central Florida</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function EqualHousingMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="text-navy">
      <path d="M12 3 2 11h3v9h14v-9h3L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 13h8M8 16.5h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
