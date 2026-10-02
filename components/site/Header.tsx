"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/Logo";
import { ScheduleButton } from "@/components/site/ScheduleButton";
import { SocialLinks } from "@/components/site/SocialLinks";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Slim utility strip: direct contact and socials, desktop only. */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide text-white/80">
            Central Florida Real Estate &middot; {site.brokerage}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-gold"
              data-analytics="phone-click"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-gold"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {site.email}
            </a>
            <SocialLinks className="gap-3 text-white/80" iconClassName="size-3.5" />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b bg-card/95 backdrop-blur-sm transition-shadow duration-300",
          scrolled ? "shadow-[0_1px_0_0_var(--border),0_8px_24px_-16px_rgb(11_27_51/0.35)]" : ""
        )}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-4 xl:gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-4 md:flex lg:gap-5 xl:gap-8">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap py-2 text-[0.8125rem] font-medium text-navy transition-colors hover:text-gold-ink xl:text-sm",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-[var(--ease-out-quart)]",
                    active && "after:scale-x-100"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex xl:gap-3">
            {/* Navy text link below xl, outlined navy button from xl: both forms are allowed by the Site Overview. */}
            <Button asChild variant="outline" size="default" className="h-10 border-0 px-1 text-xs font-semibold uppercase tracking-[0.06em] hover:bg-transparent xl:tracking-[0.1em] hover:text-gold-ink xl:border xl:px-4 xl:hover:bg-primary xl:hover:text-primary-foreground">
              <Link href="/#search" data-analytics="header-search">
                <Search aria-hidden="true" />
                Search Homes
              </Link>
            </Button>
            <div className="hidden lg:block">
              <ScheduleButton size="default" className="h-10 px-3 text-xs font-semibold uppercase tracking-[0.06em] xl:px-4 xl:tracking-[0.1em]">
                Schedule a Call
              </ScheduleButton>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Button asChild variant="ghost" size="icon" aria-label={`Call ${site.phone}`}>
              <a href={site.phoneHref} data-analytics="phone-click">
                <Phone />
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(22rem,100vw)] bg-card p-0">
                <SheetHeader className="border-b px-6 py-5 text-left">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Logo />
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
                  {nav.map((item) => {
                    const active =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "border-b py-4 font-serif text-xl text-navy transition-colors last:border-0 hover:text-gold-ink",
                          active && "text-gold-ink"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="flex flex-col gap-3 px-6 pb-8">
                  <Button asChild variant="outline" size="cta" className="w-full">
                    <Link href="/#search" onClick={() => setOpen(false)}>
                      <Search aria-hidden="true" />
                      Search Homes
                    </Link>
                  </Button>
                  <ScheduleButton className="w-full" />
                  <div className="mt-4 space-y-2 text-sm">
                    <a href={site.phoneHref} className="block text-navy hover:text-gold-ink">
                      {site.phone} &middot; Call or Text
                    </a>
                    <a href={`mailto:${site.email}`} className="block text-navy hover:text-gold-ink">
                      {site.email}
                    </a>
                  </div>
                  <SocialLinks className="mt-2 gap-4 text-navy" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
