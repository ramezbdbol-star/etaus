"use client";

import { motion } from "framer-motion";
import { Hotel, Plane, Compass, Car, FileCheck } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Hotel,
  Plane,
  Compass,
  Car,
  FileCheck,
};

export default function ServicesGrid() {
  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,168,83,0.04)_0%,_transparent_60%)]" />

      <Container className="relative z-10">
        <SectionHeading
          title="What We Offer"
          subtitle="Everything you need for a seamless, unforgettable trip."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {SERVICES.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div
                key={svc.title}
                variants={fadeInUp}
                className="group relative border border-white/[0.06] p-7 hover:border-gold-500/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04]"
              >
                {/* Number */}
                <span className="absolute top-4 right-5 font-display text-[2.5rem] leading-none text-white/[0.03] select-none">
                  0{i + 1}
                </span>

                <div className="w-9 h-9 flex items-center justify-center mb-5">
                  {Icon && <Icon size={20} className="text-gold-500" strokeWidth={1.5} />}
                </div>
                <h3 className="font-display text-base text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-slate-400 leading-[1.7]">
                  {svc.description}
                </p>
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-gold-500 to-transparent transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
