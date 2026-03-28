import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import Container from "@/components/ui/Container";
import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06] py-16">
      <Container>
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand — 5 cols */}
          <div className="md:col-span-5">
            <span className="font-display text-2xl text-white tracking-wide">
              Eth<span className="text-gold-400">a</span>üs
            </span>
            <p className="mt-4 text-[13px] text-slate-500 leading-[1.8] max-w-xs">
              Visa & Travel Services — turning stressful planning into smooth,
              unforgettable journeys.
            </p>
          </div>

          {/* Contact — 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em] mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-[13px] text-slate-500">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2.5 hover:text-gold-400 transition-colors duration-300"
              >
                <Phone size={13} strokeWidth={1.5} /> {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 hover:text-gold-400 transition-colors duration-300"
              >
                <Mail size={13} strokeWidth={1.5} /> {SITE.email}
              </a>
            </div>
          </div>

          {/* Social — 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.3em] mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-600 tracking-wide">
          <span>{SITE.copyright}</span>
          <span>VAT: {SITE.vat}</span>
        </div>
      </Container>
    </footer>
  );
}
