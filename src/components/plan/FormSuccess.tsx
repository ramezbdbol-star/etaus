"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FormSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-16"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
      >
        <CheckCircle size={56} className="text-gold-500 mx-auto mb-6" strokeWidth={1.5} />
      </motion.div>
      <h3 className="font-display text-2xl sm:text-3xl text-navy-950 mb-3">
        Your Trip Request Has Been Sent
      </h3>
      <p className="text-slate-500 max-w-md mx-auto mb-10 text-[14px] leading-relaxed">
        Thank you for sharing your travel wishes. We&apos;ll craft a personalised
        itinerary and contact you within 24 hours.
      </p>
      <Button href="/">Back to Home</Button>
    </motion.div>
  );
}
