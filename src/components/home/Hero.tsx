"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const letterReveal = {
  hidden: { opacity: 0, y: 60, rotateX: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.04, ease },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

const headlineWords = "Because Every Traveller Deserves a".split(" ");

export default function Hero() {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ethaus_hero_bg");
    if (saved) setBgImage(saved);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-navy-950" />

      {/* Admin-uploaded background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Gradient overlays (sit on top of the image) */}
      <div className={`absolute inset-0 ${bgImage ? "bg-navy-950/65" : ""}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,_rgba(21,32,56,0.8)_0%,_transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,_rgba(212,168,83,0.06)_0%,_transparent_100%)]" />

      {/* Decorative compass rose */}
      <motion.div
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          className="opacity-[0.04]"
        >
          <circle cx="210" cy="210" r="200" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
          <circle cx="210" cy="210" r="160" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
          <circle cx="210" cy="210" r="80" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
          <line x1="210" y1="10" x2="210" y2="410" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
          <line x1="10" y1="210" x2="410" y2="210" stroke="currentColor" strokeWidth="0.5" className="text-gold-500" />
          <line x1="68" y1="68" x2="352" y2="352" stroke="currentColor" strokeWidth="0.3" className="text-gold-500" />
          <line x1="352" y1="68" x2="68" y2="352" stroke="currentColor" strokeWidth="0.3" className="text-gold-500" />
          {/* Cardinal points */}
          <text x="210" y="30" textAnchor="middle" fill="currentColor" className="text-gold-500 text-[10px]" style={{ fontFamily: "serif" }}>N</text>
          <text x="210" y="400" textAnchor="middle" fill="currentColor" className="text-gold-500 text-[10px]" style={{ fontFamily: "serif" }}>S</text>
          <text x="395" y="214" textAnchor="middle" fill="currentColor" className="text-gold-500 text-[10px]" style={{ fontFamily: "serif" }}>E</text>
          <text x="25" y="214" textAnchor="middle" fill="currentColor" className="text-gold-500 text-[10px]" style={{ fontFamily: "serif" }}>W</text>
        </svg>
      </motion.div>

      {/* Floating coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-24 right-12 hidden lg:block text-[11px] text-gold-500/20 font-mono tracking-widest"
      >
        50.8503° N, 4.3517° E
      </motion.div>

      {/* Thin gold vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-12 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block origin-top"
      />

      <Container className="relative z-10 py-32 lg:py-40">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-12 bg-gold-500" />
            <span className="text-gold-500 text-[11px] font-semibold uppercase tracking-[0.3em]">
              Visa & Travel Services
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="overflow-hidden">
            <span className="flex flex-wrap gap-x-[0.35em] text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.15] tracking-tight">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterReveal}
                  className="font-display text-white inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <motion.span
              custom={headlineWords.length}
              variants={letterReveal}
              className="block font-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.15] tracking-tight mt-1"
            >
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                Stress-Free Holiday
              </span>
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            custom={1.0}
            variants={fadeUp}
            className="mt-8 text-[17px] text-slate-400 max-w-lg leading-[1.8] font-light"
          >
            I take care of the details — you simply enjoy the journey. Personalised
            travel planning for families and beginner travellers.
          </motion.p>

          {/* CTAs */}
          <motion.div custom={1.2} variants={fadeUp} className="mt-10 flex gap-5 flex-wrap items-center">
            <Button href="/plan-your-trip">Plan Your Trip</Button>
            <Button href="/why-travel-with-us" variant="ghost">
              Why Ethaüs? &rarr;
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade + ornamental line */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
      />
    </section>
  );
}
