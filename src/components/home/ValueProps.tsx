"use client";

import { motion } from "framer-motion";
import { Luggage, PiggyBank, Heart, PhoneCall } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { VALUE_PROPS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Luggage,
  PiggyBank,
  Heart,
  PhoneCall,
};

export default function ValueProps() {
  return (
    <section className="py-28 bg-navy-950 relative overflow-hidden">
      {/* Subtle gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_rgba(212,168,83,0.04)_0%,_transparent_70%)]" />

      <Container className="relative z-10">
        <SectionHeading
          title="What Makes Ethaüs Unique"
          subtitle="We go beyond booking — we design experiences tailored to your story."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]"
        >
          {VALUE_PROPS.map((prop, i) => {
            const Icon = iconMap[prop.icon];
            return (
              <motion.div
                key={prop.title}
                variants={fadeInUp}
                className="bg-navy-950 p-8 lg:p-7 group relative hover:bg-white/[0.03] transition-colors duration-500"
              >
                {/* Number overlay */}
                <span className="absolute top-4 right-5 font-display text-[4rem] leading-none text-white/[0.03] select-none">
                  0{i + 1}
                </span>

                <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/10 group-hover:border-gold-500/40 transition-all duration-500">
                  {Icon && <Icon size={18} className="text-gold-500" />}
                </div>
                <h3 className="font-display text-lg text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-[13px] text-slate-400 leading-[1.7]">
                  {prop.description}
                </p>
                {/* Bottom gold accent on hover */}
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gold-500 transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
