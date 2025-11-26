import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between bg-white rounded-xl sm:rounded-2xl shadow-lg px-3 py-1 sm:px-4 sm:py-1 md:px-6 md:py-1.5">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20">
              <Image src="/logo-black.png" alt="Real Estate Logo" fill className="object-contain" priority />
            </div>
          </Link>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-sm lg:text-base font-medium text-black hover:text-black/70 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm lg:text-base font-medium text-black hover:text-black/70 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm lg:text-base font-medium text-black hover:text-black/70 transition-colors"
            >
              Contact
            </Link>
          </nav>
          {/* CTA Button */}
          <Button className="bg-black text-white hover:bg-black/90 rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm md:text-base font-medium">
            Contact Agent
          </Button>
        </div>
      </div>
    </header>
  );
}
