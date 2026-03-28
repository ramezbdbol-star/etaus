"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <section className="py-28 bg-cream-50 relative overflow-hidden">
      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text — takes 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 text-[10px] font-semibold uppercase tracking-[0.3em]">
                About Ethaüs
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-navy-950 tracking-tight mb-8">
              Why Ethaüs
            </h2>
            <p className="text-slate-600 leading-[1.9] text-[15px]">
              {ABOUT_TEXT}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-500/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="h-px w-8 bg-gold-500/30" />
            </div>
          </motion.div>

          {/* Decorative panel — 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Offset frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-gold-500/20" />
              <div className="relative aspect-[4/5] bg-navy-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.08)_0%,_transparent_70%)]" />
                {/* Compass SVG */}
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="absolute opacity-[0.06]">
                  <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
                  <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
                  <line x1="60" y1="5" x2="60" y2="115" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
                  <line x1="5" y1="60" x2="115" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
                </svg>
                <div className="relative text-center p-10 z-10">
                  <div className="text-5xl mb-5">✈️</div>
                  <p className="font-display text-xl text-white leading-snug">
                    Stories.<br />Lessons.<br />Memories.
                  </p>
                  <p className="text-[12px] text-slate-400 mt-4 tracking-wide">
                    That&apos;s what travel is about.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
