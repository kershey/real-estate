import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { BioSection } from "@/components/about/BioSection";
import { CredentialsShowcase } from "@/components/about/CredentialsShowcase";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";

export const metadata = {
  title: "About",
  description:
    "Meet the agent helping Central Florida families find a home with good schools, safe streets, and room for children to grow.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
