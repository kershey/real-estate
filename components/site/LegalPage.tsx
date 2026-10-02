import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/lib/site";

/**
 * Shared shell for the Privacy Policy and Terms of Use pages linked from the
 * footer per the Page 4 copy. The client has not supplied legal text yet, so
 * each page states that plainly and points visitors to Paul rather than
 * presenting invented policy language.
 *
 * TODO(client): replace the body with the approved policy text.
 */
export function LegalPage({ title }: { title: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full max-w-full flex-1 overflow-x-hidden">
        <section className="container-site py-20 md:py-28">
          <h1 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] text-navy">
            {title}
          </h1>
          <span aria-hidden="true" className="gold-rule mt-6" />
          <div className="mt-8 max-w-[65ch] space-y-5 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              The {title.toLowerCase()} for {site.domain} is being finalized and will be published
              here before launch.
            </p>
            <p>
              Until then, any information you share through this website is used only to respond
              to your inquiry and is never sold. Questions are welcome at{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-navy underline-offset-4 hover:underline">
                {site.email}
              </a>{" "}
              or{" "}
              <a href={site.phoneHref} className="font-medium text-navy underline-offset-4 hover:underline" data-analytics="phone-click">
                {site.phone}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
