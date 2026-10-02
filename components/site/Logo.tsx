import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

interface LogoProps {
  className?: string;
  /**
   * `lockup` (default): the PE monogram beside the wordmark, for the header.
   * `stacked`: the client's full logo artwork, for the footer.
   */
  variant?: "lockup" | "stacked";
  /** Monogram only, no wordmark. */
  compact?: boolean;
}

/**
 * Paul E. the Realtor brand mark. Artwork is the client's supplied logo
 * (public/paul/logo.png) and a crop of its monogram (logo-mark.png). The
 * logo ships on a white background, so it sits on white surfaces only.
 */
export function Logo({ className, variant = "lockup", compact = false }: LogoProps) {
  if (variant === "stacked") {
    return (
      <Link
        href="/"
        aria-label={`${site.wordmark} home`}
        className={cn("inline-block bg-white", className)}
      >
        <Image
          src="/paul/logo.png"
          alt={`${site.wordmark}. ${site.tagline}`}
          width={1096}
          height={674}
          sizes="(min-width: 768px) 14rem, 12rem"
          className="h-auto w-48 md:w-56"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label={`${site.wordmark} home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/paul/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={604}
        height={450}
        sizes="4rem"
        priority
        className="h-11 w-auto shrink-0 xl:h-12"
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[1.2rem] tracking-tight text-navy xl:text-[1.35rem]">
            PaulEthe<span className="text-gold-ink">Realtor</span>
          </span>
          <span className="mt-1 hidden whitespace-nowrap text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground xl:block">
            {site.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}
