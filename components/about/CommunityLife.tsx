import { Heart, Trophy, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const pillars = [
  { Icon: Users, title: "Family First", body: "Faith, family and balance keep me grounded." },
  { Icon: Trophy, title: "Youth Sports", body: "Coaching and mentoring the next generation." },
  {
    Icon: Heart,
    title: "Stronger Communities",
    body: "Investing my time to make a positive impact beyond real estate.",
  },
];

/** Short, quiet personal and community statement. */
export function CommunityLife() {
  return (
    <section aria-labelledby="life-title" className="bg-background">
      <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
            More than real estate
          </p>
          <h2
            id="life-title"
            className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] text-navy"
          >
            A Life Rooted in Community.
          </h2>
          <p className="mt-7 max-w-[60ch] text-base leading-[1.8] text-foreground md:text-lg">
            I&rsquo;m proud to call Central Florida home. When I&rsquo;m not working with clients,
            you&rsquo;ll find me spending time with family, mentoring young athletes, and giving
            back to the community. Real estate allows me to do what I love &mdash; help people create a
            better future, right here in the places we call home.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="flex flex-col divide-y lg:border-l lg:pl-12">
          {pillars.map(({ Icon, title, body }) => (
            <StaggerItem key={title} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
              <Icon className="mt-1 size-7 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-navy">{title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
