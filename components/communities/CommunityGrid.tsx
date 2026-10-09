"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { CommunityTile } from "@/components/communities/CommunityTile";
import { communities, communityFacts, type Community } from "@/lib/communities";

/**
 * Twelve community tiles. Clicking one opens a concise snapshot panel with
 * the approved six-point pattern and exactly two actions ("Search [City]
 * Homes" returns to the IDX search tool on the Home page, per the client's
 * instructions; "Ask Paul" opens the contact form). The open tile is
 * mirrored in the URL (?community=slug) so Home page teasers and shared links
 * open the right panel.
 */
export function CommunityGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const requested = params.get("community");
  const [openSlug, setOpenSlug] = useState<string | null>(requested);

  useEffect(() => {
    setOpenSlug(requested);
  }, [requested]);

  const open = useMemo(
    () => communities.find((c) => c.slug === openSlug) ?? null,
    [openSlug]
  );

  const select = (slug: string | null) => {
    setOpenSlug(slug);
    const next = new URLSearchParams(params.toString());
    if (slug) next.set("community", slug);
    else next.delete("community");
    const qs = next.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}#communities`, { scroll: false });
  };

  return (
    <>
      <StaggerContainer
        staggerDelay={0.05}
        className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4"
      >
        {communities.map((c) => (
          <StaggerItem key={c.slug} y={20}>
            <button
              type="button"
              onClick={() => select(c.slug)}
              aria-haspopup="dialog"
              aria-label={`Open ${c.name} community snapshot`}
              className="block w-full text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60"
            >
              <CommunityTile community={c} />
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Dialog open={!!open} onOpenChange={(o) => !o && select(null)}>
        <DialogContent className="max-h-[88svh] grid-cols-[minmax(0,1fr)] gap-0 overflow-y-auto overflow-x-hidden p-0 sm:max-w-2xl [&>button]:text-white [&>button]:opacity-80 [&>button:hover]:opacity-100">
          {open && <CommunityPanel community={open} />}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function CommunityPanel({ community }: { community: Community }) {
  return (
    <article>
      <DialogHeader className="navy-texture space-y-0 px-6 pb-7 pt-8 text-left text-white sm:px-10">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold">
          {community.county}
        </p>
        <DialogTitle className="mt-3 font-serif text-3xl font-normal leading-tight text-white sm:text-4xl">
          {community.name}
        </DialogTitle>
        <DialogDescription className="mt-2 font-serif text-lg italic text-white/85">
          {community.tagline}
        </DialogDescription>
      </DialogHeader>

      <dl className="grid gap-x-10 gap-y-6 px-6 py-8 sm:grid-cols-2 sm:px-10">
        {communityFacts.map(({ key, label }) => (
          <div key={key} className={key === "realEstateNote" ? "sm:col-span-2" : undefined}>
            <dt className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-gold-ink">
              {label}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
              {String(community[key])}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-3 border-t bg-secondary px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <Button asChild size="cta" className="h-auto min-h-12 whitespace-normal py-3 text-center">
          <Link href="/#search" data-analytics="community-search">
            <Search aria-hidden="true" />
            Search {community.name} Homes
          </Link>
        </Button>
        <div className="sm:text-right">
          <p className="text-sm text-muted-foreground">{community.ask}</p>
          <Link
            href={`/lets-talk?about=${encodeURIComponent(community.name)}#contact`}
            className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-ink"
            data-analytics="community-ask"
          >
            <MessageCircle className="size-4 text-gold-ink" aria-hidden="true" />
            Ask Paul About {community.name}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
