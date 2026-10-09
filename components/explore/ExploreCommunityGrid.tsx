"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CommunityPanel } from "@/components/communities/CommunityGrid";
import { CityTile } from "@/components/explore/CityTile";
import { communities, exploreCommunities } from "@/lib/communities";
import styles from "./ExploreReference.module.css";

/**
 * City tiles for every community with a photo. Each opens the community snapshot (the approved
 * six-point copy, "Search [City] Homes" and "Ask Paul"). The open city is
 * kept in the URL (?community=slug) so Home page links open the right one.
 */
export function ExploreCommunityGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const requested = params.get("community");
  const [openSlug, setOpenSlug] = useState<string | null>(requested);

  useEffect(() => {
    setOpenSlug(requested);
  }, [requested]);

  const open = useMemo(() => communities.find(c => c.slug === openSlug) ?? null, [openSlug]);

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
      <div className={styles.cities}>
        {exploreCommunities.map(c => (
          <button key={c.slug} type="button" className={styles.cityButton} onClick={() => select(c.slug)} aria-haspopup="dialog" aria-label={`Open ${c.name} community snapshot`}>
            <CityTile community={c} />
          </button>
        ))}
      </div>
      <Dialog open={!!open} onOpenChange={o => !o && select(null)}>
        <DialogContent className="max-h-[88svh] grid-cols-[minmax(0,1fr)] gap-0 overflow-y-auto overflow-x-hidden p-0 sm:max-w-2xl [&>button]:text-white [&>button]:opacity-80 [&>button:hover]:opacity-100">
          {open && <CommunityPanel community={open} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
