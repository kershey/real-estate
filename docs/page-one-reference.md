# Page 1 reference implementation

The homepage is implemented in `components/home/ReferenceHome.tsx` with scoped styles in `ReferenceHome.module.css`. Other routes retain their existing components.

## Artwork

All homepage images in `public/home-reference/` come from full-size files supplied by the client:

- `hero-skyline.jpg`: Lake Eola sunset skyline behind the hero.
- `paul-hero.webp`: transparent cutout of Paul, cropped at the jacket hem to match the mockup. It is served without Next.js re-compression.
- Service and community tiles: one photo each (`new-construction.jpg`, `orlando.jpg`, etc.).
- `logo-horizontal.png`: built from Paul's stacked logo, with the monogram, wordmark and tagline rearranged side by side for the header.
- `dalton-wade-white.png`: the official Dalton Wade logo reversed to white for the navy band. The full-color original is `dalton-wade.png`.
- Meet Paul uses `public/paul/paul-headshot.jpg`.

"More Than a House… A Place to Belong." and "Serving Central Florida" are live text in Caveat. Headlines use Libre Caslon Text, the closest Google Font to the mockup, sized so each line matches the mockup's width at 1024px.

## Layout

The page is phone-first, with a tablet layout from 640px and the mockup layout from 1000px. On desktop, sizes scale with the page width and stop growing at 1440px. Section backgrounds always span the full screen. At 1024px every section's height is within 1px of the mockup.

Known differences from the mockup: Paul faces left rather than right; the hero background has water rather than greenery along the bottom; the Kissimmee, Lake Nona and Apopka photos are the client's real photos rather than the mockup's; the Meet Paul photo is framed tighter; and the Dalton Wade logo is white rather than gold.

## Search

The reference-style controls retain the selected listing type, location, price, bedrooms, and bathrooms. Submission opens a clearly labeled handoff to the existing brokerage website, where visitors apply filters to live listings. Visitors can also send the selected preferences to Paul through their mail client. No listings are fabricated and no unverified IDX query parameters are sent.

The existing brokerage widget returned a Cloudflare challenge during integration verification. Direct filtered IDX search requires a supported brokerage integration. The New Listings and Open Houses shortcuts retain the existing site's behavior of linking to the brokerage homepage.

## Validation

Checked at 1024px desktop and 390px mobile with Chrome/Playwright: section geometry, image loading, absence of horizontal overflow and browser runtime errors, responsive navigation, rental price options, search preference summary, and dialog dismissal. TypeScript, scoped ESLint, whitespace checks, and the Next.js production build passed. The build needed network access for the project’s existing Google Fonts.
