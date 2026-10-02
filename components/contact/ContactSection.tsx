import Image from "next/image";
import { CalendarDays, Mail, MapPin, Phone, Users } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/site/SocialLinks";
import { FadeIn } from "@/components/animations/FadeIn";
import { isExternal, scheduleHref, site } from "@/lib/site";

export function ContactSection() {
  const schedule = scheduleHref();
  const items = [
    {
      Icon: Phone,
      title: site.phone,
      body: "Call or Text",
      href: site.phoneHref,
      analytics: "phone-click",
    },
    { Icon: Mail, title: site.email, body: "Email Me", href: `mailto:${site.email}` },
    {
      Icon: CalendarDays,
      title: "Schedule a Consultation",
      body: "Pick a time that works for you",
      href: schedule,
      analytics: "schedule-consultation",
    },
    { Icon: MapPin, title: site.location, body: site.serviceArea },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-background">
      <div className="container-site grid gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">Get in touch</p>
          <h2
            id="contact-title"
            className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] text-navy"
          >
            Send a Message
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Fill out the form below and I&rsquo;ll get back to you as soon as possible.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="lg:border-l lg:pl-14">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
            Prefer to connect directly?
          </h3>
          <ul className="mt-6 space-y-6">
            {items.map(({ Icon, title, body, href, analytics }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-navy">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{title}</span>
                    <span className="block text-sm text-muted-foreground">{body}</span>
                  </span>
                </>
              );
              return (
                <li key={title}>
                  {href ? (
                    <a
                      href={href}
                      target={isExternal(href) ? "_blank" : undefined}
                      rel={isExternal(href) ? "noopener noreferrer" : undefined}
                      data-analytics={analytics}
                      className="group flex items-start gap-4 transition-colors hover:text-gold-ink [&_span:first-child]:transition-transform [&_span:first-child]:duration-300 hover:[&_span:first-child]:-translate-y-0.5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">{inner}</div>
                  )}
                </li>
              );
            })}
            <li className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-navy">
                <Users className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-navy">Let&rsquo;s Stay Connected</span>
                <span className="block text-sm text-muted-foreground">
                  Follow for the latest listings, market updates and more
                </span>
                <SocialLinks className="mt-3 gap-4 text-navy" iconClassName="size-5" />
              </span>
            </li>
          </ul>

          <figure className="relative mt-12 aspect-[4/3] overflow-hidden bg-navy">
            <Image
              src="/paul/paul-blue-jacket.jpg"
              alt="Paul E. outside a Central Florida home"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover object-[50%_20%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-script text-3xl leading-none">Central Florida and Beyond</p>
              <span aria-hidden="true" className="gold-rule mt-3" />
            </figcaption>
          </figure>

          <div className="mt-6 border bg-card p-6">
            <h3 className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-navy">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              Local Expertise. Nationwide Reach.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Based in Orlando and specializing in Central Florida, I also work with buyers,
              sellers, and investors relocating from across the country.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
