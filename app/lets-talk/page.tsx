import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { ScriptAccent } from "@/components/site/ScriptAccent";
import { CtaBand } from "@/components/site/CtaBand";
import { ContactSection } from "@/components/contact/ContactSection";
import { WaysIHelp } from "@/components/contact/WaysIHelp";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Schedule a consultation or send Paul E. a message. Buying, selling, building or relocating in Central Florida, every great move starts with a conversation.",
};

export default function LetsTalkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full max-w-full flex-1 overflow-x-hidden">
        <PageHero
          compact
          kicker="Let's Talk"
          title={
            <>
              Your Next Chapter <span className="text-gold">Starts Here.</span>
            </>
          }
          lede="Whether you're buying, selling, building, or relocating, I'm here to help. Let's talk about your goals and create a plan that works for you."
          accent={
            <>
              Let&rsquo;s Make
              <br />
              It Happen.
            </>
          }
          image={{
            src: "/paul/paul-tan-jacket.jpg",
            alt: "Paul E. in a tan blazer in a Central Florida neighborhood",
            position: "object-[50%_0%]",
          }}
        >
          <ScriptAccent className="mt-8">People. Places. Possibilities.</ScriptAccent>
        </PageHero>
        <ContactSection />
        <WaysIHelp />
        <CtaBand
          kicker="Ready to make a move?"
          title="Let's Talk About Your Goals."
          body="Every great move starts with a conversation."
          contact={false}
        />
      </main>
      <Footer />
    </div>
  );
}
