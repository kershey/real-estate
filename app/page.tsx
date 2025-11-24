import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ConnectingSection } from "@/components/ConnectingSection";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { PropertyListings } from "@/components/PropertyListings";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ConnectingSection />
        <WhatWeOffer />
        <FacilitiesSection />
        <PropertyListings />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
