import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <div className="relative h-24 w-24">
              <Image
                src="/logo.png"
                alt="Real Estate Logo"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
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
