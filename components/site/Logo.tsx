import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

interface LogoProps {
  className?: string;
  /** Hide the wordmark and keep only the monogram. */
  compact?: boolean;
  /** Use on navy surfaces. */
  inverted?: boolean;
}

/**
 * Typographic "PE" monogram with a gold roofline.
 *
 * The client's logo file was not included in the brief; this mark follows
 * the same idea (serif P and E under a roof) so the real asset can replace
 * the SVG without touching layout.
 */
export function Logo({ className, compact = false, inverted = false }: LogoProps) {
  const ink = inverted ? "text-white" : "text-navy";
  return (
    <Link
      href="/"
      aria-label={`${site.wordmark} home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <svg
        viewBox="0 0 56 56"
        width="44"
        height="44"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M6 24 L28 7 L50 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <rect x="38" y="12" width="5" height="9" fill="var(--gold)" />
        <text
          x="28"
          y="50"
          textAnchor="middle"
          fontFamily="var(--font-libre-baskerville), Georgia, serif"
          fontSize="30"
          fontWeight="700"
          letterSpacing="-1"
          fill="currentColor"
          className={ink}
        >
          PE
        </text>
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-[1.35rem] tracking-tight",
              ink
            )}
          >
            Paul<span className="text-gold-ink">E</span>theRealtor
          </span>
          <span
            className={cn(
              "mt-1 hidden whitespace-nowrap text-[0.5625rem] sm:block font-semibold uppercase tracking-[0.18em]",
              inverted ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {site.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}
