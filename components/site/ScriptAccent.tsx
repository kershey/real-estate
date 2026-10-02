import { cn } from "@/lib/utils";

interface ScriptAccentProps {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Handwritten accent line with a short gold stroke, as used over hero
 * photography in the mockups ("More Than a House... A Place to Belong.").
 */
export function ScriptAccent({ children, className, tone = "light" }: ScriptAccentProps) {
  return (
    <p
      className={cn(
        "font-script text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight",
        tone === "light" ? "text-white" : "text-navy",
        className
      )}
    >
      {children}
      <span aria-hidden="true" className="mt-1 block h-0.5 w-20 rounded-full bg-gold" />
    </p>
  );
}
