import Image from "next/image";
import { ScriptAccent } from "@/components/site/ScriptAccent";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  lede?: string;
  accent?: React.ReactNode;
  image?: { src: string; alt: string; position?: string };
  children?: React.ReactNode;
  /** Shorter hero for secondary pages. */
  compact?: boolean;
}

/**
 * Interior page hero. With a photo it mirrors the Home hero split (copy left,
 * portrait right). Without one it is a navy typographic hero.
 */
export function PageHero({ kicker, title, lede, accent, image, children, compact = false }: PageHeroProps) {
  return (
    <section className="navy-texture relative isolate overflow-hidden text-white">
      <div
        className={cn(
          "grid",
          image ? "lg:grid-cols-[1.1fr_0.9fr]" : "",
          compact ? "lg:min-h-[28rem]" : "lg:min-h-[34rem]"
        )}
      >
        {image && (
          <div className="relative order-first aspect-[4/3] max-h-[55svh] overflow-hidden sm:aspect-[16/9] lg:order-last lg:aspect-auto lg:max-h-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className={cn("object-cover", image.position ?? "object-[50%_20%]")}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/10 lg:to-transparent"
            />
            {accent && (
              <div className="absolute bottom-6 right-5 hidden text-right sm:block lg:bottom-10 lg:right-10">
                <ScriptAccent className="[&>span]:ml-auto">{accent}</ScriptAccent>
              </div>
            )}
          </div>
        )}

        <FadeIn
          y={20}
          className={cn(
            "container-site relative flex flex-col justify-center py-14 lg:py-20",
            image ? "lg:pr-16" : "items-start"
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{kicker}</p>
          <h1 className="mt-5 max-w-[16ch] font-serif text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1.02] tracking-[-0.015em] text-white">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-white/85 md:text-lg">{lede}</p>
          )}
          {children}
          {accent && !image && <ScriptAccent className="mt-10">{accent}</ScriptAccent>}
          {accent && image && (
            <div className="mt-8 sm:hidden">
              <ScriptAccent>{accent}</ScriptAccent>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
