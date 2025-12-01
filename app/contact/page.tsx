import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { AreasSection } from "@/components/contact/AreasSection";

export const metadata = {
  title: "Contact | Real Estate Platform",
  description: "Get in touch with your trusted real estate professional serving Central Florida",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
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
