import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Fonts per the client's Site Overview: Libre Baskerville for headlines,
// Inter for body, menu and buttons. Caveat carries the short handwritten
// accent lines the mockups place over hero photography.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Central Florida Real Estate`,
    template: `%s | ${site.name}`,
  },
  description:
    "Paul E. helps buyers, sellers and relocating clients navigate Central Florida with confidence. New construction, buying, selling and relocation guidance across Orlando and beyond.",
  openGraph: {
    type: "website",
    siteName: site.name,
    images: [{ url: "/paul/paul-tan-jacket.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} ${caveat.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
