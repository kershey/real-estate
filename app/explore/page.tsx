import type { Metadata } from "next";
import { ExploreReference } from "@/components/explore/ExploreReference";

export const metadata: Metadata = {
  title: "Explore Central Florida",
  description:
    "Your guide to buying, building and living in Central Florida. Twelve community snapshots from Orlando to Winter Garden, plus Paul's approach to new construction, buying, selling and relocating.",
};

export default function ExplorePage() {
  return <ExploreReference />;
}
