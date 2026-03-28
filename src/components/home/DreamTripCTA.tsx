"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function DreamTripCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,_rgba(212,168,83,0.06)_0%,_transparent_100%)]" />

      {/* Decorative border frame */}
      <div className="absolute inset-8 sm:inset-16 border border-gold-500/[0.06] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="text-gold-500 text-[10px] uppercase tracking-[0.4em] font-semibold">
              Ready to begin?
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight"
          >
            Let&apos;s Plan Your{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Dream Trip
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-slate-400 text-[15px] leading-relaxed"
          >
            Got a travel idea? Share it with us and we&apos;ll turn it into a
            personalised plan — crafted with care, delivered within 24 hours.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <Button href="/plan-your-trip">Plan Now</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
