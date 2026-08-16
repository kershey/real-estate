import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { AreasSection } from "@/components/contact/AreasSection";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch about finding a family home in Orlando and Central Florida.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <ContactHero />
        <ContactForm />
        <AreasSection />
      </main>
      <Footer />
    </div>
  );
}
