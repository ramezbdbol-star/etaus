"use client";

import { motion } from "framer-motion";
import { Ear, PenTool, Handshake } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Ear,
  PenTool,
  Handshake,
};

export default function ProcessSteps() {
  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,168,83,0.04)_0%,_transparent_60%)]" />

      <Container className="relative z-10">
        <SectionHeading
          title="How Your Trip Comes to Life"
          subtitle="A simple three-step process from idea to adventure."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 relative max-w-4xl mx-auto"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-gold-500/10 via-gold-500/30 to-gold-500/10" />

          {PROCESS_STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="text-center relative px-6 py-4"
              >
                {/* Number circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border border-gold-500/20" />
                  <div className="absolute inset-2 rounded-full border border-gold-500/10 flex items-center justify-center bg-navy-900">
                    {Icon && <Icon size={28} className="text-gold-500" />}
                  </div>
                </div>

                <span className="text-gold-500 text-[10px] font-semibold tracking-[0.3em] uppercase">
                  Step {step.number}
                </span>
                <h3 className="font-display text-xl text-white mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-[13px] leading-[1.7] max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
