"use client";

import { motion } from "framer-motion";
import { Users, Wallet, HeartHandshake, Phone } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { FEATURES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Wallet,
  HeartHandshake,
  Phone,
};

export default function Features() {
  return (
    <section className="py-28 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <Container className="relative z-10">
        <SectionHeading
          title="Why Travel With Me"
          subtitle="Personal service that puts your comfort and happiness first."
          light
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200/60 max-w-4xl mx-auto"
        >
          {FEATURES.map((feat, i) => {
            const Icon = iconMap[feat.icon];
            return (
              <motion.div
                key={feat.title}
                variants={fadeInUp}
                className="bg-cream-50 p-8 sm:p-10 group relative hover:bg-white transition-colors duration-500"
              >
                {/* Number */}
                <span className="absolute top-5 right-6 font-display text-[3.5rem] leading-none text-navy-950/[0.03] select-none">
                  0{i + 1}
                </span>

                <div className="w-11 h-11 rounded-full border border-navy-950/10 flex items-center justify-center mb-5 group-hover:border-gold-500/30 group-hover:bg-gold-500/5 transition-all duration-500">
                  {Icon && <Icon size={18} className="text-gold-600" />}
                </div>
                <h3 className="font-display text-lg text-navy-950 mb-2">
                  {feat.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-[1.7]">
                  {feat.description}
                </p>
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gold-500 transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
