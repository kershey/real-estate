import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { BioSection } from "@/components/about/BioSection";
import { CredentialsShowcase } from "@/components/about/CredentialsShowcase";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";

export const metadata = {
  title: "About | Real Estate Platform",
  description: "Meet your trusted real estate professional",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />
      <main className="pt-32">
        <AboutHero />
        <BioSection />
        <CredentialsShowcase />
        <AboutTestimonials />
      </main>
      <Footer />
    </div>
  );
}
