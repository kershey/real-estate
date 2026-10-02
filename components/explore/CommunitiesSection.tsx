import { Suspense } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { CommunityGrid } from "@/components/communities/CommunityGrid";
import { CommunityTile } from "@/components/communities/CommunityTile";
import { communities } from "@/lib/communities";

export function CommunitiesSection() {
  return (
    <section id="communities" aria-labelledby="communities-title" className="scroll-mt-20 bg-card">
      <div className="container-site py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <FadeIn>
            <SectionHeading
              id="communities-title"
              kicker="Explore the communities"
              title="Discover Central Florida"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg lg:ml-auto">
              Each community offers its own unique lifestyle, amenities and opportunities. Select
              a city below to learn more and see available homes.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14">
          <Suspense fallback={<StaticGrid />}>
            <CommunityGrid />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

/** Server-rendered fallback so the grid is never blank while hydrating. */
function StaticGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
      {communities.map((c) => (
        <CommunityTile key={c.slug} community={c} />
      ))}
    </div>
  );
}
