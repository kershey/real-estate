import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { CommunityTile } from "@/components/communities/CommunityTile";
import { featuredCommunities } from "@/lib/communities";

/** Four restrained community teasers that lead to the Explore page. */
export function ExploreTeaser() {
  return (
    <section aria-labelledby="explore-title" className="bg-background">
      <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
            Explore Central Florida
          </p>
          <h2
            id="explore-title"
            className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] text-navy"
          >
            Live Where Opportunity Grows
          </h2>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            From vibrant cities to charming communities, Central Florida has a place for
            everyone.
          </p>
          <Button asChild variant="outline" size="cta" className="mt-8 w-fit">
            <Link href="/explore#communities">
              Explore Central Florida
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-3 sm:gap-4">
          {featuredCommunities.map((c) => (
            <StaggerItem key={c.slug}>
              <Link
                href={`/explore?community=${c.slug}#communities`}
                aria-label={`Explore ${c.name}`}
                className="block"
              >
                <CommunityTile community={c} size="large" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
