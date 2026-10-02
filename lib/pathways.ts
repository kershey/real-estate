import { Hammer, Home, Tag, MapPin, type LucideIcon } from "lucide-react";

export type PathwaySlug = "new-construction" | "buy" | "sell" | "relocate";

export interface Pathway {
  slug: PathwaySlug;
  title: string;
  /** One-line promise used on the Home cards. */
  short: string;
  /** Headline used on the Explore page mini-guide. */
  headline: string;
  /** Explore page mini-guide body. */
  body: string;
  /** Let's Talk "Ways I Can Help" line. */
  help: string;
  /** Value sent in the contact form's "I'm interested in" field. */
  interest: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

/**
 * The four pathways appear on three pages with three lengths of copy. All
 * copy is transcribed from the client's approved documents.
 */
export const pathways: Pathway[] = [
  {
    slug: "new-construction",
    title: "New Construction",
    short: "Expert guidance. Builder insight. Your best interest.",
    headline: "Build Your Future with Confidence",
    body: "Get expert guidance through the builder process. I'll help you compare builders, understand incentives, review contracts, and make sure your interests are protected from start to finish.",
    help: "Expert guidance from blueprint to closing.",
    interest: "New Construction",
    icon: Hammer,
    image: "/paul/paul-construction.jpg",
    imageAlt: "Paul in a hard hat inside a framed new-construction home",
  },
  {
    slug: "buy",
    title: "Buy a Home",
    short: "A smooth, informed buying experience.",
    headline: "A Smooth, Informed Buying Experience",
    body: "From the first search to the closing table, I'll help you find the right home, negotiate the best terms, and make a confident, informed purchase.",
    help: "Let's find the right home for your lifestyle.",
    interest: "Buying a Home",
    icon: Home,
    image: "/paul/client-moment-4.jpg",
    imageAlt: "Clients celebrating in the kitchen of their new home",
  },
  {
    slug: "sell",
    title: "Sell Your Home",
    short: "Strategic marketing. Maximum exposure. Real results.",
    headline: "Strategic Marketing. Maximum Results.",
    body: "I use professional marketing, strategic pricing and strong negotiation to get your home maximum exposure and real results.",
    help: "Get top value with a strategic plan.",
    interest: "Selling a Home",
    icon: Tag,
    image: "/paul/client-moment-1.jpg",
    imageAlt: "A family holding a Said Yes to the Address sign with Paul",
  },
  {
    slug: "relocate",
    title: "Relocate to Florida",
    short: "From out of state to home. I make your move easier.",
    headline: "A Seamless Transition",
    body: "Moving to a new area doesn't have to be overwhelming. I provide local insights, community guidance and a personalized plan to make your transition easier.",
    help: "A smoother move starts with the right partner.",
    interest: "Relocating to Florida",
    icon: MapPin,
    image: "/paul/client-moment-5.jpg",
    imageAlt: "Clients with Paul outside their new Central Florida home",
  },
];
