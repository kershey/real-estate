import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { StorySection } from "@/components/about/StorySection";
import { ClientMoments } from "@/components/about/ClientMoments";
import { CommunityLife } from "@/components/about/CommunityLife";

export const metadata: Metadata = {
  title: "About Paul",
  description:
    "Meet Paul E., a second-generation Realtor helping buyers, sellers and relocating clients navigate Central Florida with confidence.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full max-w-full flex-1 overflow-x-hidden">
        <PageHero
          compact
          kicker="About Paul"
          title={
            <>
              More Than a Realtor. <span className="text-gold">A True Advocate.</span>
            </>
          }
          lede="I help buyers, sellers, and relocating clients navigate Central Florida with confidence. From new construction to established neighborhoods, I'm committed to making the process simple, informed and rewarding."
          accent={
            <>
              People. Places.
              <br />
              Possibilities.
            </>
          }
          image={{
            src: "/paul/paul-blue-jacket.jpg",
            alt: "Paul E. in a blue blazer outside a Central Florida home",
            position: "object-[50%_5%]",
          }}
        >
          <Button asChild variant="gold" size="cta" className="mt-9 w-fit">
            <Link href="/lets-talk">
              Let&rsquo;s Talk
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </PageHero>
        <StorySection />
        <ClientMoments />
        <CommunityLife />
        <CtaBand
          title="Let's Talk About Your Goals."
          body="Whether you're buying, selling, building or relocating, I'm here to help."
        />
      </main>
      <Footer />
    </div>
  );
}
