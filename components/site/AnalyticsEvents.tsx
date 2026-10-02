"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Site-wide event tracking per the Site Overview checklist: form
 * submissions, Calendly clicks, phone clicks and IDX lead actions.
 *
 * Any element with a `data-analytics="event-name"` attribute reports a click.
 * Components can also call `trackEvent` directly (the contact form does on
 * success). Events are sent to Vercel Analytics; swap `track` for another
 * provider here if the client's stack changes.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-analytics]");
      if (!target) return;
      const name = target.dataset.analytics;
      if (!name) return;
      const href = target.getAttribute("href") ?? undefined;
      track(name, href ? { href, path: window.location.pathname } : { path: window.location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

export function trackEvent(name: string, data?: Record<string, string | number | boolean>) {
  track(name, data);
}
