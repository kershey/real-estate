# Design — Warm Family Repositioning

## Context

See `proposal.md` — Why. Two facts about the current codebase shape everything below.

**1. The design tokens cannot express warmth.** Every value in the `:root` and `.dark` blocks of `app/globals.css` has the form `oklch(<L> 0 0)`. The middle component is chroma; it is `0` on all of them. The theme is achromatic by construction.

**2. Components bypass the tokens.** Sections style themselves with fixed Tailwind palette classes — `text-gray-900`, `bg-gray-50`, `text-slate-600` on the homepage and About page, `bg-stone-100`/`amber-50` on the Contact page. This is why the site drifted: the Contact page was warmed by hand-editing two components, and nothing else moved. There is no single place where "warm" lives.

This second fact is also why the fix is durable rather than cosmetic. `CLAUDE.md` requires standard Tailwind and shadcn colors with no inline custom colors. Editing the shadcn token block is the sanctioned mechanism for theming; hardcoded palette classes in section components are what defeated it.

## Goals / Non-Goals

**Goals**

- Make warmth a system property: one edit to the token block changes the whole site.
- Give whoever sources photography a brief precise enough to apply without further judgment calls.
- Keep the approved layout, section order, spacing rhythm, and animation architecture intact.
- Keep the change reviewable in stages, so the client can approve the palette before the content rewrite lands.

**Non-Goals**

- No new pages, routes, or sections. No restructuring of the grid.
- No replacement of shadcn primitives in `components/ui/`. They already consume semantic tokens correctly.
- No changes to `components/animations/*`. Fade and stagger stay; only the hero's scale-in goes.
- Not building the missing `/listings` route — tracked separately.

## Decisions

### D1 — Warm the shadcn token block rather than recolor components

**Decision:** Replace the achromatic token values in `app/globals.css` with a warm palette, then migrate section components from fixed palette classes to semantic token classes.

**Why:** The alternative — swapping `gray-*` for `stone-*` across every component — produces the same visual result today and reintroduces the same drift tomorrow, because warmth would still live in fifteen files instead of one. It also leaves the shadcn primitives (which read from tokens) out of sync with the sections around them.

**Alternative considered:** A `warm` Tailwind theme extension with custom named colors. Rejected — `CLAUDE.md` forbids custom color definitions, and shadcn's token layer already provides exactly this indirection.

### D2 — The palette

Hue anchored at **45–85°** (clay through warm sand). Values below are verified in sRGB and against WCAG 2.1; the contrast figures are computed, not estimated.

**Light theme**

| Token | oklch | hex | Role |
|---|---|---|---|
| `--background` | `oklch(0.99 0.006 85)` | `#fefcf7` | warm paper, replaces pure white |
| `--foreground` | `oklch(0.24 0.018 55)` | `#261d17` | warm near-black, replaces `#0a0a0a` |
| `--card` | `oklch(0.995 0.0045 85)` | `#fffdfa` | raised surface |
| `--card-foreground` | `oklch(0.24 0.018 55)` | `#261d17` | |
| `--popover` | `oklch(0.995 0.0045 85)` | `#fffdfa` | |
| `--popover-foreground` | `oklch(0.24 0.018 55)` | `#261d17` | |
| `--primary` | `oklch(0.44 0.075 45)` | `#75442e` | clay — CTAs, replaces black |
| `--primary-foreground` | `oklch(0.985 0.008 85)` | `#fdfaf4` | |
| `--secondary` | `oklch(0.95 0.014 80)` | `#f3eee4` | warm sand section fill |
| `--secondary-foreground` | `oklch(0.30 0.030 50)` | `#3a2a20` | |
| `--muted` | `oklch(0.96 0.012 82)` | `#f6f1e9` | alternating section bands |
| `--muted-foreground` | `oklch(0.50 0.022 55)` | `#6e6058` | secondary copy |
| `--accent` | `oklch(0.92 0.038 75)` | `#f4e2c9` | warm amber highlight |
| `--accent-foreground` | `oklch(0.32 0.038 45)` | `#432d23` | |
| `--border` | `oklch(0.90 0.012 78)` | `#e2ddd5` | decorative dividers |
| `--input` | `oklch(0.64 0.028 62)` | `#99897b` | form control boundary |
| `--ring` | `oklch(0.62 0.058 50)` | `#a37c67` | focus |
| `--destructive` | unchanged | `#e7000b` | shadcn stock, already warm |

**Dark theme**

| Token | oklch | hex |
|---|---|---|
| `--background` | `oklch(0.19 0.012 55)` | `#18120f` |
| `--foreground` | `oklch(0.96 0.008 85)` | `#f4f1ec` |
| `--card` | `oklch(0.24 0.014 52)` | `#251d19` |
| `--primary` | `oklch(0.74 0.070 55)` | `#cea081` |
| `--primary-foreground` | `oklch(0.22 0.020 50)` | `#221812` |
| `--secondary` / `--muted` | `oklch(0.30 0.018 52)` | `#352b26` |
| `--muted-foreground` | `oklch(0.72 0.018 65)` | `#ada399` |
| `--accent` | `oklch(0.34 0.030 55)` | `#443429` |
| `--border` | `oklch(0.34 0.016 55)` | `#3f3630` |
| `--input` | `oklch(0.55 0.024 58)` | `#7d6e64` |
| `--ring` | `oklch(0.60 0.050 50)` | `#997866` |

**Verified contrast**

```
  LIGHT                                    DARK
  foreground / background     16.04:1 AAA  16.47:1 AAA
  muted-foreground / bg        5.87:1 AA    7.43:1 AAA
  primary-fg / primary         7.66:1 AAA   7.40:1 AAA
  foreground / muted          14.69:1 AAA  12.20:1 AAA
  accent-fg / accent          10.11:1 AAA  10.55:1 AAA
  primary / background         7.77:1 AAA   7.88:1 AAA
  input border / surface       3.29:1 ✓3:1  3.38:1 ✓3:1
  focus ring / background      3.60:1 ✓3:1  4.61:1 ✓3:1
```

`--border` sits at 1.31:1 (light) and 1.57:1 (dark). This is intentional and matches shadcn's stock values: these are decorative dividers on cards and sections, not the sole boundary of any control. WCAG 1.4.11 applies to control boundaries, which is why `--input` is a separate, much darker token rather than reusing `--border`.

The one substantive accessibility improvement over the current theme is `--input`: today inputs use the same near-invisible value as decorative borders, which fails 1.4.11. Splitting them fixes a real defect while we are in here.

### D3 — Typography: humanist serif headings, keep Geist for interface

**Decision:** Load a humanist serif for headings; retain Geist Sans for body, labels, buttons, and navigation.

**Why:** Geist is Vercel's geometric grotesque, drawn for developer tooling. It is precise and cool by design, and at `text-7xl font-bold` it carries a tech-luxury voice. A humanist serif in headings introduces warmth without touching the interface layer, and keeps the two-font system simple.

**Recommendation: Fraunces** (`next/font/google`), with variable `SOFT` and `WONK` axes that let the warmth be dialled in rather than guessed. **Conservative alternative: Source Serif 4** — safer, less characterful, zero configuration risk. Either satisfies the spec; this is a client taste call and belongs in the palette approval round.

Alongside the typeface, the heading scale drops from `text-7xl` to a `text-5xl`/`text-6xl` ceiling and from `font-bold` to `font-semibold`. Oversized ultra-bold display type is itself part of the luxury grammar; the typeface swap alone would not fix it.

Also folded in here: `app/layout.tsx` metadata is still `"Create Next App" / "Generated by create next app"`. It is the browser tab and the Google result. It gets fixed in the same edit as the font loading.

### D4 — Art direction brief

This is the deliverable for whoever sources photography. It is normative — `specs/site-imagery/spec.md` is the contract, this is the working brief.

**The buyer we are picturing:** a couple in their early thirties with one or two young children, buying their first or second home in the $250k–$450k range in Central Florida. Not a couple touring a waterfront property with an architect.

**Every photograph must have** — warm natural daylight (morning or late afternoon, never dusk or night); a home at a scale this buyer could afford; visible neighborhood or family context; a warm color cast.

**Every photograph must avoid** — infinity and resort pools; glass curtain walls and double-height volumes; staged designer interiors with no sign of life; aerial or gated-estate views; suited professionals, handshakes, boardrooms, contract signings; cool blue or monochrome grading; dusk and twilight exteriors.

**Shot list, by slot:**

| Slot | Current problem | Replace with |
|---|---|---|
| Homepage hero | Large Cape Cod estate, empty, 60% black scrim | A family with children in front of or inside a modest home — porch, front yard, or moving-in moment. People are the point. |
| `ConnectingSection` | Concrete-floor modernist interior | A lived-in family living room or kitchen — toys visible, worn rug, real light |
| `WhatWeOffer` ×3 | Keys/model house is fine; porch is good; commercial high-five must go | Buying: family at a front door. Selling: family packing or a yard sign. First-time buyers: a young couple with a toddler on a stoop. |
| `Footer` (every page) | Infinity-pool mansion, `alt="Modern luxury home"` | A warm suburban street or a family on a porch at golden hour |
| `AboutHero` | Corporate headshot, glass tower, unsmiling | The real agent, outdoors or in a home, smiling |
| `BioSection` bg | Black-and-timber modernist house | A neighborhood street or park |
| `CredentialsShowcase` bg | `alt="Luxury Interior"` | Remove the background image entirely — the section carries enough |
| `AboutTestimonials` bg | Modern interior | Remove or replace with a neighborhood texture |
| Testimonial avatars | Generic stock faces | Real client photos where permission exists; otherwise no avatar |

**Retain unchanged:** `property-family-home.jpg` and `property-suburban-home.jpg`. The brick two-car-garage suburban house is precisely the target. `PropertyListings` needs no imagery work.

**Sourcing sequence:** stock that satisfies the brief first, so the repositioning ships and can be reviewed; real local photography of the agent and real clients second, as it becomes available. The agent portrait should not stay stock — see R3.

### D5 — Hero treatment

Three changes, no structural edit:

- Scrim `from-black/60 via-black/40` → a warm scrim at ≤35% max opacity. The current wash crushes exactly the autumn light that makes the photo work.
- Remove the `scale: 1.1 → 1` entry animation. A 1.5s cinematic push-in is the luxury-film-trailer move; the fade and stagger elsewhere stay.
- `h-screen` → roughly `min-h-[78vh]`, so the section below peeks above the fold. Full-viewport imagery is itself a prestige signal, and it hides the family messaging.

Text contrast over the image must be re-verified after the scrim lightens; if headline copy cannot hold 4.5:1 at 35%, the fix is a text-side treatment (a contained warm panel), not a darker scrim.

### D6 — Fill the fourth service slot rather than reflow the grid

Removing Commercial Leasing leaves three items in a four-column grid. The client approved this layout, so we keep four columns and add **First-Time Buyer Guidance** as the fourth service — which is the audience the site is supposed to serve and currently mentions only once, buried in a specializations list.

### D7 — Testimonials, statistics, and credentials are mock data

**Decision:** Treat all testimonials, headline statistics, credentials, and the agent's name as placeholder content. Write new mock content that fits the family audience; do not block on the client supplying real values.

**Why:** The site is in development. Its current content — "$250M+ In Transactions", six named clients with quotes, six professional certifications — is placeholder data from the original build, not claims anyone is making. The job here is repositioning the *tone* of that placeholder content, and waiting on real client data would stall a change that is otherwise ready to ship.

**What this means in practice:** Stage 4 proceeds without a client-input gate. Mock testimonials get family personas, mock statistics get family-relevant framing, mock credentials drop their luxury and investment titles. The `agent-profile` spec governs the *shape* of these proof points — what kind of claim earns a family's trust — not their truth.

**One constraint retained:** mock content SHALL be identifiable as mock in the source, so it is obvious what needs swapping when real content arrives. A named constant and a short comment is sufficient. This costs nothing now and prevents placeholder copy from quietly becoming permanent.

### D9 — Two Tailwind v4 / next-font details found during Stage 1

Recorded because both are easy to hit again and neither is obvious.

**`@theme inline` does not emit its values as CSS custom properties.** That is what `inline` means — theme values are substituted directly into generated utilities. So adding `--font-serif: var(--font-fraunces)` to `@theme inline` makes the `font-serif` utility work, but `var(--font-serif)` inside a hand-written `@layer base` rule resolves to nothing and the element silently falls back. Base-layer rules must reference the next/font variable directly: `var(--font-fraunces)`.

**Geist was loaded but never applied.** `next/font` only defines the CSS variable and a class; something still has to set `font-family`. Nothing did, so body copy had been rendering in the system sans this whole time, not Geist. Fixed in the same base-layer rule.

Related scoping call: the serif applies to `h1`/`h2` only. `h3` is used here for small card titles and uppercase footer column labels, where Fraunces reads fussy rather than warm.

### D8 — Stage the work so the client can approve early

Sequenced so the cheapest, highest-signal changes land first and the client sees direction before the expensive content rewrite:

```
  Stage 1  tokens + typography + hero treatment      ← client approves the FEEL
  Stage 2  footer image, interior image, testimonials ← kills the loudest offenders
  Stage 3  services + facilities rewrite
  Stage 4  About page reposition
  Stage 5  photography with real people and children
```

Stage 1 is reversible in one file. If the client dislikes the palette, nothing downstream is wasted.

## Risks / Trade-offs

**R1 — Client may not like the specific warm palette.** → Stage 1 isolates it to `globals.css`. Present the palette and both typeface options as an approval gate before Stage 2. Hue can shift within 45–85° without touching any other decision.

**R2 — Token migration is broad and mechanical.** Roughly a dozen components move off `gray-*`/`slate-*`/`stone-*`. Low risk per edit, easy to do incompletely, and a missed component silently keeps the cold palette. → Finish with a repo-wide grep for `gray-|slate-|zinc-|neutral-|stone-` in `app/` and `components/` outside `components/ui/`; the expected result is zero hits.

**R3 — Mock content outlives the mock stage.** Placeholder testimonials and statistics have a way of surviving to launch because nothing marks them as temporary. → D7 requires mock content be identifiable as such in the source. Swapping in real content is then a mechanical find-and-replace rather than an audit.

**R4 — Stock photography of families reads as stock.** The strongest version of this site uses real local families and the real agent. → Ship on brief-compliant stock, flag the portrait as a genuine gap, and treat real photography as follow-on work.

**R5 — Warm tokens may fight the remaining hardcoded warm values on the Contact page.** The Contact page's hand-written `stone`/`amber` gradients will sit slightly off the new palette. → Contact page migrates to tokens in the same pass as everything else; it is not exempt because it happens to already look warm.

**R6 — Removing "Explore Listings" CTAs.** Both hero and footer link to `/listings`, which does not exist. The spec forbids marketplace CTAs without a corresponding page. → Repoint to Contact for now. Building `/listings` is separate work.

## Migration Plan

Single branch off `main`, one commit per stage in the D8 order, so any stage can be reverted independently. Stage 1 is the approval gate — pause there and show the client before continuing.

No data migration, no dependency changes beyond one additional `next/font/google` import. Rollback is `git revert` of the relevant stage commit.

Verification per stage: `npm run build` and `npm run lint` clean; visual check of Home, About, and Contact in both light and dark themes; the grep from R2 at the end of Stage 1.

## Open Questions

Per D7, content questions do not block this change — mock content ships and gets swapped later. What remains:

1. **Fraunces or Source Serif 4?** Part of the Stage 1 approval conversation. Either satisfies the spec.
2. **Is a `/listings` page planned?** Determines whether the CTAs get repointed to Contact permanently or temporarily.

Deferred to whenever real content arrives, tracked but not blocking: the agent's real name, real statistics, real credentials, real client testimonials, and confirmation that the six Contact-page communities (Orlando, Kissimmee, Winter Garden, Lake Nona, Winter Park, Windermere) match the actual service area. All are mock until then, and all are marked as such in the source.
