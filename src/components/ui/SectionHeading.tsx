"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight ${
          light ? "text-navy-950" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-[15px] leading-relaxed ${center ? "mx-auto" : ""} ${
            light ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center gap-3 justify-center">
        <span className="h-px w-8 bg-gold-500/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
        <span className="h-px w-8 bg-gold-500/40" />
      </div>
    </motion.div>
  );
}
