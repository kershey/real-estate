import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Home className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold">Urbanet</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/facilities"
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Facilities
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="/listings"
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Listings
            </Link>
          </nav>

          {/* Contact Button */}
          <Button
            variant="outline"
            className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            Contact Agent
          </Button>
        </div>
      </div>
    </header>
  );
}
