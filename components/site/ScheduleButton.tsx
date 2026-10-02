import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { isExternal, scheduleHref } from "@/lib/site";
import type { VariantProps } from "class-variance-authority";

interface ScheduleButtonProps extends VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  className?: string;
  withIcon?: boolean;
}

/**
 * Every "Schedule a Consultation" button on the site. Points at Calendly
 * when NEXT_PUBLIC_CALENDLY_URL is set, otherwise at the contact form.
 */
export function ScheduleButton({
  children = "Schedule a Consultation",
  className,
  variant = "default",
  size = "cta",
  withIcon = false,
}: ScheduleButtonProps) {
  const href = scheduleHref();
  const external = isExternal(href);
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        data-analytics="schedule-consultation"
      >
        {withIcon && <CalendarDays aria-hidden="true" />}
        {children}
        <ArrowRight aria-hidden="true" />
      </Link>
    </Button>
  );
}
