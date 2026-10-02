import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Community } from "@/lib/communities";
import { cn } from "@/lib/utils";

interface CommunityTileProps {
  community: Community;
  className?: string;
  /** Larger type for the four Home teasers. */
  size?: "default" | "large";
}

/**
 * Presentational community tile. Wrap in a Link or button.
 *
 * With a photo it is an image tile with a navy wash. Without one it is a
 * typographic panel: oversized serif initial, county label and tagline on
 * navy. Both read as the same component so photos can arrive later without
 * a redesign.
 */
export function CommunityTile({ community, className, size = "default" }: CommunityTileProps) {
  const { name, shortName, tagline, county, image, imageAlt } = community;
  const label = shortName ?? name;
  const initial = name.charAt(0);

  return (
    <div
      className={cn(
        "group/tile relative isolate flex aspect-square flex-col justify-end overflow-hidden bg-navy text-white sm:aspect-[4/3]",
        className
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? `${name}, Florida`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover/tile:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/10"
          />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="navy-texture absolute inset-0" />
          <span
            aria-hidden="true"
            className="absolute -right-3 -top-8 select-none font-serif text-[9rem] leading-none text-white/[0.07] transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover/tile:-translate-y-2 md:text-[11rem]"
          >
            {initial}
          </span>
          <span
            aria-hidden="true"
            className="absolute left-4 top-4 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold sm:left-5 sm:top-5"
          >
            {county}
          </span>
        </>
      )}

      <div className="relative p-4 sm:p-5">
        <h3
          className={cn(
            "font-serif leading-tight text-white",
            size === "large" ? "text-xl sm:text-2xl md:text-[1.75rem]" : "text-lg sm:text-xl"
          )}
        >
          {label}
          <ArrowRight
            className="ml-2 inline size-4 align-middle text-gold transition-transform duration-300 group-hover/tile:translate-x-1"
            aria-hidden="true"
          />
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-white/80 sm:text-sm">{tagline}</p>
      </div>
    </div>
  );
}
