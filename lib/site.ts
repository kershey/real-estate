/**
 * Single source of truth for brand and contact details.
 *
 * Phone and email come from the client's approved copy documents. The
 * mockup images show 407-715-3322 in two places, which conflicts with the
 * copy docs and Paul's email signature (407-715-3232); the copy wins until
 * the client confirms otherwise.
 */
export const site = {
  name: "Paul E.",
  legalName: "Paul Ellis",
  wordmark: "PaulEtheRealtor",
  tagline: "Real Estate. Real Expertise. Real Results.",
  title: "REALTOR",
  brokerage: "Dalton Wade Real Estate Group",
  brokerageTagline: "Powered by People. Driven by Results.",
  url: "https://www.pauletherealtor.com",
  domain: "PaulEtheRealtor.com",
  phone: "407-715-3232",
  phoneHref: "tel:+14077153232",
  smsHref: "sms:+14077153232",
  email: "info@pauletherealtor.com",
  location: "Orlando, Florida",
  serviceArea: "Serving all of Central Florida and beyond",
  footerLine: "Helping You Find More Than a Home.",
  /**
   * Calendly booking link. Set NEXT_PUBLIC_CALENDLY_URL in the environment
   * once Paul shares his scheduling link; until then every "Schedule a
   * Consultation" button lands on the contact form.
   */
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  social: {
    instagram: "https://www.instagram.com/pauletherealtor",
    facebook: "https://www.facebook.com/paulerealtor",
    linkedin: "https://www.linkedin.com/in/paul-ellis-7616b639/",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore Central Florida" },
  { href: "/about", label: "About Paul" },
  { href: "/lets-talk", label: "Let's Talk" },
] as const;

/** Where "Schedule a Consultation" buttons should go. */
export function scheduleHref() {
  return site.calendlyUrl || "/lets-talk#contact";
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
