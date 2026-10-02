import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { JourneyPaths } from "@/components/explore/JourneyPaths";
import { CommunitiesSection } from "@/components/explore/CommunitiesSection";

export const metadata: Metadata = {
  title: "Explore Central Florida",
  description:
    "Your guide to buying, building and living in Central Florida. Twelve community snapshots from Orlando to Winter Garden, plus Paul's approach to new construction, buying, selling and relocating.",
};

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full max-w-full flex-1 overflow-x-hidden">
        <PageHero
          kicker="Explore Central Florida"
          title={
            <>
              Communities. Lifestyles. <span className="text-gold">Opportunities.</span>
            </>
          }
          lede="Your guide to buying, building and living in Central Florida."
          accent="A Brighter Tomorrow Lives Here."
        />
        <JourneyPaths />
        <CommunitiesSection />
        <CtaBand
          kicker="Not sure which area is right for you?"
          title="Let's Talk About Your Goals"
          body="I'll help you compare areas, understand your options and create a plan that fits your lifestyle."
        />
      </main>
      <Footer />
    </div>
  );
}
