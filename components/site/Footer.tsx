import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { SocialLinks } from "@/components/site/SocialLinks";
import { nav, site } from "@/lib/site";

/**
 * Site footer. Copy follows the Site Overview ("PAUL E. | REALTOR", Central
 * Florida Real Estate, phone, email, PaulEtheRealtor.com, Dalton Wade Real
 * Estate Group) and the Page 4 copy (nav links, "Helping You Find More Than
 * a Home.", copyright, Privacy Policy, Terms of Use). Layout: Paul E. brand
 * left, contact in the middle, brokerage compliance on the right, visually
 * secondary to Paul's brand.
 */
export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo variant="stacked" className="-ml-2" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
            {site.name} | {site.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Central Florida Real Estate</p>
          <p className="mt-5 max-w-xs font-serif text-lg leading-snug text-navy">
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
              <span className="text-muted-foreground"> &bull; </span>
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-navy transition-colors hover:text-gold-ink"
                data-analytics="email-click"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.url}
                className="font-medium text-navy transition-colors hover:text-gold-ink"
              >
                {site.domain}
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
          {/* TODO(asset): replace with the Dalton Wade horizontal logo when supplied. */}
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
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>
              &copy; {new Date().getFullYear()} {site.name} | All Rights Reserved.
            </span>
            <span aria-hidden="true">|</span>
            <Link href="/privacy-policy" className="transition-colors hover:text-navy">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms-of-use" className="transition-colors hover:text-navy">
              Terms of Use
            </Link>
            <span aria-hidden="true">|</span>
            <a
              href="https://www.hud.gov/program_offices/fair_housing_equal_opp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-navy"
            >
              Fair Housing
            </a>
          </p>
          <span className="font-script text-base text-gold-ink">Serving Central Florida</span>
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
