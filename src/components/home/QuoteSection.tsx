"use client";

import { motion } from "framer-motion";
import { QUOTE_TEXT } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function QuoteSection() {
  return (
    <section className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.04)_0%,_transparent_70%)]" />

      {/* Decorative vertical lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Giant quotation mark */}
          <span className="block font-display text-[8rem] leading-none text-gold-500/10 -mb-16 select-none">
            &ldquo;
          </span>
          <p className="font-display text-xl sm:text-2xl text-slate-200 leading-[1.7] italic">
            {QUOTE_TEXT}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-500/30" />
            <span className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-semibold">
              Our Philosophy
            </span>
            <span className="h-px w-8 bg-gold-500/30" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
