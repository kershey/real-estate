"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const modes = ["Buy", "Rent", "New Construction"] as const;
type Mode = (typeof modes)[number];

const prices = ["Any Price", "Under $300K", "$300K - $450K", "$450K - $650K", "$650K - $1M", "$1M+"];
const counts = ["Any", "1+", "2+", "3+", "4+", "5+"];

/**
 * IDX home search block.
 *
 * TODO(IDX): Replace the form action with the brokerage IDX embed once Paul
 * shares integration details. Until then the search hands off to the
 * community guide on the Explore page so visitors are never left with a dead
 * button, and the brief's "no forced registration" rule is honored.
 */
export function HomeSearch() {
  const params = useSearchParams();
  const [mode, setMode] = useState<Mode>("Buy");

  return (
    <section id="search" aria-labelledby="search-title" className="scroll-mt-20 bg-card">
      <div className="container-site grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
            Start your search today
          </p>
          <h2
            id="search-title"
            className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] text-navy"
          >
            Find Homes in Central Florida
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Search thousands of homes, new construction and upcoming listings &mdash; all in one place.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div role="tablist" aria-label="Search type" className="flex">
            {modes.map((m) => (
              <button
                key={m}
                role="tab"
                type="button"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className={cn(
                  "px-5 py-3 text-sm font-semibold transition-colors",
                  mode === m
                    ? "bg-navy text-white"
                    : "bg-secondary text-navy hover:bg-accent"
                )}
              >
                {m}
              </button>
            ))}
          </div>
          <form
            action="/explore"
            method="get"
            className="grid gap-px border border-navy/15 bg-border shadow-[0_24px_48px_-32px_rgb(11_27_51/0.5)] sm:grid-cols-[1fr_1fr_1fr_auto]"
          >
            <input type="hidden" name="mode" value={mode} />
            <div className="bg-card p-3 sm:col-span-4">
              <Label htmlFor="search-q" className="sr-only">
                City, neighborhood, ZIP or school
              </Label>
              <Input
                id="search-q"
                name="q"
                defaultValue={params.get("q") ?? ""}
                placeholder="City, Neighborhood, ZIP or School"
                className="h-11 border-0 bg-transparent px-2 text-base shadow-none placeholder:text-foreground/60 focus-visible:ring-0 md:text-sm"
              />
            </div>
            <SearchSelect name="price" label="Price" options={prices} />
            <SearchSelect name="beds" label="Beds" options={counts} />
            <SearchSelect name="baths" label="Baths" options={counts} />
            <div className="bg-card p-3 sm:p-2">
              <Button type="submit" variant="gold" size="cta" className="h-full w-full sm:h-[3.25rem]" data-analytics="idx-search">
                <Search aria-hidden="true" />
                Search Homes
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </form>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {["New Listings", "New Construction", "Open Houses"].map((q, i) => (
              <span key={q} className="inline-flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-border" />}
                <Link
                  href={`/explore?mode=${encodeURIComponent(q)}#communities`}
                  className="font-medium text-navy underline-offset-4 transition-colors hover:text-gold-ink hover:underline"
                >
                  {q}
                </Link>
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Full MLS search is on its way. In the meantime, browse the community guide or{" "}
            <Link href="/lets-talk" className="font-medium text-navy underline-offset-4 hover:underline">
              ask Paul for listings
            </Link>{" "}
            that match your search.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function SearchSelect({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div className="bg-card p-3">
      <Label htmlFor={`search-${name}`} className="sr-only">
        {label}
      </Label>
      <Select name={name}>
        <SelectTrigger
          id={`search-${name}`}
          className="h-11 w-full border-0 bg-transparent px-2 shadow-none focus-visible:ring-0 data-[size=default]:h-11"
        >
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
