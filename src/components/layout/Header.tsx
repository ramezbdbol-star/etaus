"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-2xl border-b border-gold-500/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative">
            <span className="font-display text-2xl text-white tracking-wide">
              Eth<span className="text-gold-400">a</span>üs
            </span>
            <span className="block h-px w-0 group-hover:w-full bg-gold-500 transition-all duration-500 mt-0.5" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span
                  className={`text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-gold-400"
                      : "text-slate-300 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-500 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/plan-your-trip"
              className="ml-4 px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 rounded-none hover:from-gold-300 hover:to-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Plan Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gold-500/10 pt-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] uppercase tracking-[0.2em] font-medium ${
                  pathname === link.href ? "text-gold-400" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/plan-your-trip"
              className="w-fit px-6 py-2.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500"
            >
              Plan Now
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
