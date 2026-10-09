"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, X, Youtube } from "lucide-react";
import { nav, site } from "@/lib/site";
import styles from "@/components/home/ReferenceHome.module.css";

interface ReferenceHeaderProps {
  /** Path of the current page, for the active nav underline. */
  current: string;
  /** Where "Search Homes" points: the search section on Home, or Home's search from other pages. */
  searchHref?: string;
}

export function ReferenceHeader({ current, searchHref = "/#search" }: ReferenceHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} aria-label="Paul E the Realtor — Home">
          <Image src="/home-reference/logo-horizontal.png" alt="PaulEtheRealtor. Real Estate. Real Expertise. Real Results." width={1794} height={410} sizes="(max-width: 640px) 230px, (max-width: 1024px) 290px, 440px" priority />
        </Link>
        <div className={styles.utility}>
          <a href={site.phoneHref}><Phone aria-hidden="true" />{site.phone}</a>
          <a href={`mailto:${site.email}`}><Mail aria-hidden="true" />{site.email}</a>
          <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook /></a>
          <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="https://www.youtube.com/@pauletherealtor" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><Youtube /></a>
        </div>
        <nav id="primary-navigation" className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Primary navigation">
          {nav.map(item => <Link key={item.href} href={item.href} aria-current={item.href === current ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <a className={`${styles.goldButton} ${styles.menuSearch}`} href={searchHref} onClick={() => setMenuOpen(false)}>Search Homes</a>
          <a className={styles.menuContact} href={site.phoneHref}><Phone aria-hidden="true" />{site.phone}</a>
          <a className={styles.menuContact} href={`mailto:${site.email}`}><Mail aria-hidden="true" />{site.email}</a>
        </nav>
        <a className={`${styles.goldButton} ${styles.headerSearch}`} href={searchHref}>Search Homes</a>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
