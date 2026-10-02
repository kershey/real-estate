"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { idx } from "@/lib/site";

const WIDGET_WIDTH = 960;
const WIDGET_HEIGHT = 300;
/** Below this container width the scaled widget's text drops under ~11px. */
const MIN_EMBED_WIDTH = 720;

/**
 * Dalton Wade IDX quick-search widget, embedded exactly as supplied by the
 * client (a 960 x 300 iframe).
 *
 * The widget has a fixed internal width. From tablet widths up it is scaled
 * down proportionally to fit its container. On phones a scaled iframe would
 * be unreadable, so the component instead shows a tap-friendly panel that
 * opens the same IDX search full-screen in a new tab, which keeps the
 * brief's "easy to tap" rule and its no-registration promise.
 */
export function IdxWidget() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = width ? Math.min(1, width / WIDGET_WIDTH) : 1;
  const embed = width !== null && width >= MIN_EMBED_WIDTH;

  return (
    <div ref={wrapper} className="relative w-full" data-analytics-region="idx-widget">
      {width === null && (
        <div aria-hidden="true" className="h-40 animate-pulse bg-secondary sm:h-[300px]" />
      )}

      {width !== null && !embed && (
        <div className="flex flex-col items-start gap-5 bg-secondary p-6">
          <p className="font-serif text-xl leading-snug text-navy">
            Search every home for sale in Central Florida.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Filter by city or ZIP, price, beds and baths. No sign-up needed to browse.
          </p>
          <Button asChild variant="gold" size="cta" className="w-full sm:w-auto">
            <a
              href={idx.homeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="idx-search"
            >
              <Search aria-hidden="true" />
              Search Homes
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      )}

      {embed && (
        <div className="relative overflow-hidden" style={{ height: WIDGET_HEIGHT * scale }}>
          {!loaded && (
            <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-secondary" />
          )}
          <iframe
            title="Search Central Florida homes for sale"
            src={idx.widgetUrl}
            width={WIDGET_WIDTH}
            height={WIDGET_HEIGHT}
            {...({ allowtransparency: "true" } as Record<string, string>)}
            frameBorder={0}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="absolute left-0 top-0 origin-top-left border-0"
            style={{ width: WIDGET_WIDTH, height: WIDGET_HEIGHT, transform: `scale(${scale})` }}
          />
        </div>
      )}
    </div>
  );
}
