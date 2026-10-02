import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Short gold line above the title. Used sparingly. */
  kicker?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
  id?: string;
}

export function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className,
  id,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.16em]",
            dark ? "text-gold" : "text-gold-ink"
          )}
        >
          {kicker}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          "font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08]",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </Tag>
      {lede && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-white/85" : "text-muted-foreground"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
