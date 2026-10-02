import { Suspense } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Hero } from "@/components/home/Hero";
import { Pathways } from "@/components/home/Pathways";
import { HomeSearch } from "@/components/home/HomeSearch";
import { ExploreTeaser } from "@/components/home/ExploreTeaser";
import { MeetPaul } from "@/components/home/MeetPaul";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full max-w-full flex-1 overflow-x-hidden">
        <Hero />
        <Pathways />
        <Suspense fallback={null}>
          <HomeSearch />
        </Suspense>
        <ExploreTeaser />
        <MeetPaul />
        <CtaBand
          title="Ready to Make a Move?"
          body="Let's talk about your goals and create a plan that works for you."
        />
      </main>
      <Footer />
    </div>
  );
}
