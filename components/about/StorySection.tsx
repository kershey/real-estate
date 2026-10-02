import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const steps = [
  { title: "Listen First", body: "Understand your goals and needs." },
  { title: "Build the Strategy", body: "Create a plan tailored to you." },
  { title: "Explain the Process", body: "Make sure you know what's happening." },
  { title: "Stay Involved", body: "Remain engaged from start to closing." },
  { title: "Adjust When Needed", body: "Respond when circumstances change." },
];

/**
 * My Story and How I Work, mostly text, with the construction photo on the
 * far right. The five steps are a real ordered sequence, so they are
 * numbered.
 */
export function StorySection() {
  return (
    <section aria-labelledby="story-title" className="bg-background">
      <div className="container-site grid gap-14 py-20 md:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">My story</p>
            <h2
              id="story-title"
              className="mt-3 max-w-[18ch] font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] text-navy"
            >
              Rooted in Real Estate. Driven by People.
            </h2>
            <p className="mt-7 max-w-[62ch] text-base leading-[1.8] text-foreground md:text-lg">
              I&rsquo;m a second-generation Realtor with over 5 years of experience, serving buyers,
              sellers, and relocating clients across Central Florida. Real estate has always been
              part of my life, and I&rsquo;ve seen firsthand how the right guidance can change
              lives. My goal is simple: to educate, advocate and deliver results while making the
              experience as stress-free as possible. I don&rsquo;t stop until my clients are happy.
            </p>
          </FadeIn>

          <div className="mt-14 border-t pt-10">
            <FadeIn>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
                How I work
              </h3>
            </FadeIn>
            <StaggerContainer staggerDelay={0.1} className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {steps.map((s, i) => (
                <StaggerItem key={s.title} className="flex gap-4">
                  <span className="font-serif text-3xl leading-none text-gold" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-[0.06em] text-navy">
                      {s.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <FadeIn delay={0.15} className="relative">
          <figure className="relative aspect-[3/4] overflow-hidden lg:sticky lg:top-28">
            <Image
              src="/paul/paul-construction.jpg"
              alt="Paul in a hard hat on a new-construction job site"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-7 pt-20 text-white">
              <p className="font-serif text-2xl leading-tight">New Construction Expertise</p>
              <span aria-hidden="true" className="gold-rule mt-3" />
              <p className="mt-3 text-sm text-white/85">Guiding you from blueprints to keys.</p>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
