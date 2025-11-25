import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  variant?: "dark" | "light";
}

export function Header({ variant = "dark" }: HeaderProps) {
  const isDark = variant === "dark";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors ${
      isDark ? "bg-transparent" : "bg-white/95 backdrop-blur-md border-b border-slate-200"
    }`}>
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
              href="/"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-white hover:text-white/80"
                  : "text-slate-900 hover:text-slate-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-white hover:text-white/80"
                  : "text-slate-900 hover:text-slate-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-white hover:text-white/80"
                  : "text-slate-900 hover:text-slate-600"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Contact Button */}
          <Button
            variant="outline"
            className={
              isDark
                ? "border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                : "border-slate-300 bg-slate-900 text-white hover:bg-slate-800"
            }
          >
            Contact Agent
          </Button>
        </div>
      </div>
    </header>
  );
}
