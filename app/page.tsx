import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ConnectingSection } from "@/components/ConnectingSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ConnectingSection />
      </main>
    </div>
  );
}
