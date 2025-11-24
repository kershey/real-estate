import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="text-white">
      {/* Hero Image Section */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Modern luxury home"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        {/* Content Overlay */}
        <div className="relative h-full mx-auto max-w-7xl px-6 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
            {/* Left Side - Main Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Find Your Perfect Property
              </h2>
            </div>

            {/* Right Side - Description and CTA */}
            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg text-white/90 max-w-md">
                Looking for your dream home? We make property searching easy and stress-free! With our user-friendly
                platform and expert agents.
              </p>
              <div>
                <Button size="lg" className="bg-white text-zinc-900 hover:bg-white/90 font-medium">
                  Explore Listings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-80">
                <div className="relative h-16 w-16">
                  <Image src="/logo.png" alt="Real Estate Logo" fill className="object-contain" />
                </div>
              </Link>
              <p className="mt-4 text-sm text-zinc-400 max-w-xs">
                Helping you find the perfect home, every step of the way.
              </p>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/listings" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    Listings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/guide" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    Style Guide
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    Licenses
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Subscribe for Updates</h3>
              <p className="mt-4 text-sm text-zinc-400">Get the latest news and updates directly in your inbox.</p>
              <form className="mt-4 flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-600"
                />
                <Button type="submit" variant="default" className="bg-white text-zinc-900 hover:bg-zinc-100">
                  Send
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
            <p className="text-sm text-zinc-400">{new Date().getFullYear()} Real Estate. All rights reserved.</p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
