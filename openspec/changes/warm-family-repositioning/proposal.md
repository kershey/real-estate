# Warm Family Repositioning

## Why

The client reviewed the site and rejected its emotional direction:

> "Hey Jensen the overall layout is not bad, but the super modern ultra luxury main pic is not so much the feel I want, I would prefer more warm, family oriented, geared toward families with children trying to buy homes, not so much glitz & glamour or targeted to investors."

An audit confirmed the problem is broader than the hero image. Copy was partially repositioned toward families on the Contact page and in property listings, but the underlying design system was not. Concretely:

- **The color system cannot express warmth.** Every token in `app/globals.css` is `oklch(<lightness> 0 0)` — chroma is literally `0` on all of them. Pure black, pure white, neutral gray. That palette, plus full-bleed cinematic imagery and heavy bold type, *is* the visual grammar of ultra-modern luxury. The Contact page is warm only because `stone`/`amber` values were hand-written into two components, bypassing the tokens entirely.
- **Photography contradicts the brief.** The global footer carries a white-box mansion with an infinity pool (`alt="Modern luxury home"`) on every page, including the family-focused Contact page. The largest homepage interior is an architectural-digest space with polished concrete and designer furniture.
- **The homepage testimonials are investor and vacation-rental voices** — "our investment," "finalizing the reservation," "property investor… analytics… profitable." None of the three mentions a family, a child, or a school.
- **The About page was never repositioned at all** — it leads with "$250M+ In Transactions," a cold corporate headshot, and credentials reading "Luxury Property Specialist" and "Investment Property Consultant."
- **There are no children anywhere on the site**, and no photograph of any person on the homepage. The stated target audience is entirely absent from the imagery.

The client explicitly approved the layout, so this change must not restructure pages. It changes the material the approved layout is built from.

## What Changes

- **Introduce a warm color foundation** in the design tokens so warmth is a system property rather than per-component overrides. Retire pure-black and zero-chroma neutrals from user-facing surfaces.
- **Adopt a humanist typeface** for headings alongside the existing Geist, and soften heading weight/scale so the voice reads approachable rather than editorial.
- **Establish written art direction for all photography** and re-source every image that fails it — starting with the global footer mansion, the modernist interior, and the corporate high-five stock photo.
- **Soften the hero treatment**: remove the 60% black scrim and the cinematic scale-in that drain warmth from an already-suitable photo.
- **Replace all homepage and About testimonials** with family home-buyer voices. Remove investor, villa-owner, luxury-buyer, and short-term-rental personas entirely.
- **Remove Commercial Leasing** from the service list and **reframe the facilities section** from platform features (search filters, virtual tours, payment options) to family concerns (schools, safety, neighborhoods, guidance for first-time buyers).
- **Reposition the About page**: replace transaction-volume bragging with family-relevant trust signals, replace the corporate headshot, and rewrite credentials and specializations to lead with first-time and family buyers instead of luxury and investment.
- **Introduce people — including children — into site photography.**
- **Resolve the identity split** between the homepage's third-person "Apex platform" voice and the first-person agent voice used on About and Contact.
- **Non-goal:** page structure, section order, grid, spacing, and animation architecture stay as approved.

## Capabilities

### New Capabilities

- `brand-visual-identity`: The color, typography, and surface-treatment rules that make every page read as warm rather than luxury — including token-level requirements that forbid zero-chroma neutrals on user-facing surfaces.
- `site-imagery`: Art direction governing every photograph on the site — subject matter, human presence, light quality, property scale, and the overlay/motion treatments applied to images.
- `audience-voice`: Who the site speaks to and how — vocabulary rules, testimonial persona requirements, service scope, and a single consistent first-person agent identity.
- `agent-profile`: How the agent's credibility is presented to a family audience on the About page — which proof points are shown and which are withheld.

### Modified Capabilities

None — `openspec/specs/` is currently empty, so all four capabilities are new.

## Impact

**Design tokens**
- `app/globals.css` — `:root` and `.dark` token blocks; warm chroma introduced
- `app/layout.tsx` — font loading; page metadata still reads "Create Next App"

**Components — homepage**
- `components/Hero.tsx` — overlay gradient, scale-in animation
- `components/ConnectingSection.tsx` — interior image, "Apex platform" copy
- `components/WhatWeOffer.tsx` — remove Commercial Leasing, re-source images, rewrite copy
- `components/FacilitiesSection.tsx` — full content rewrite, "Apex" naming
- `components/Testimonials.tsx` — full replacement of all three testimonials
- `components/PropertyListings.tsx` — no tone changes needed; carries an unrelated data bug

**Components — About**
- `components/about/AboutHero.tsx` — stats, headshot image
- `components/about/BioSection.tsx` — specializations order, service areas, background image
- `components/about/CredentialsShowcase.tsx` — credential titles, section heading, background image
- `components/about/AboutTestimonials.tsx` — persona replacement

**Components — global**
- `components/Footer.tsx` — luxury mansion image, CTA copy
- `components/Header.tsx` — black CTA button

**Assets**
- `public/` — new photography; `hero-house.jpg` and `hero-family-home.jpg` are orphaned
- `public/IMAGES_NEEDED.md` — still directs sourcing toward "modern luxury home" and `pexels.com/search/luxury-home`; superseded by the `site-imagery` spec

**Untouched by design:** page routes, layout structure, section order, spacing scale, animation components (`components/animations/*`), shadcn primitives (`components/ui/*`).

**Out of scope, filed separately:** the `PropertyListings.tsx` "$850,000 / For Rent" data inconsistency, the `Create Next App` metadata, and the missing `/listings` route.
