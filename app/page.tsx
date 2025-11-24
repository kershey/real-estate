import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ConnectingSection } from "@/components/ConnectingSection";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { FacilitiesSection } from "@/components/FacilitiesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ConnectingSection />
        <WhatWeOffer />
        <FacilitiesSection />
      </main>
    </div>
  );
}
