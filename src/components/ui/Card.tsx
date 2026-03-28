"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Card({ children, className = "", dark = true }: CardProps) {
  const bg = dark
    ? "bg-white/5 border-white/10"
    : "bg-white border-slate-200 shadow-sm";

  return (
    <motion.div
      variants={fadeInUp}
      className={`backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${bg} ${className}`}
    >
      {children}
    </motion.div>
  );
}
