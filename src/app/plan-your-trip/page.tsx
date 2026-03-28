import type { Metadata } from "next";
import ServicesGrid from "@/components/plan/ServicesGrid";
import TripForm from "@/components/plan/TripForm";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Plan Your Trip — Ethaüs",
  description:
    "Tell us your travel wishes and we'll design a personalised trip just for you. Flights, accommodation, activities, and visa help — all sorted.",
};

export default function PlanYourTripPage() {
  return (
    <div className="pt-20">
      {/* Hero / Intro */}
      <section className="py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,_rgba(21,32,56,0.8)_0%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,83,0.05)_0%,_transparent_60%)]" />

        {/* Decorative border */}
        <div className="absolute inset-12 sm:inset-20 border border-gold-500/[0.04] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold-500/40" />
            <span className="text-gold-500 text-[10px] font-semibold uppercase tracking-[0.3em]">
              Your Journey Starts Here
            </span>
            <span className="h-px w-12 bg-gold-500/40" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-tight">
            Because Everyone Deserves a{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Holiday Without Worry
            </span>
          </h1>
          <p className="mt-6 text-[15px] text-slate-400 leading-[1.8] max-w-2xl mx-auto">
            Imagine your perfect holiday, and let us make it happen. Just tell us what
            you&apos;re thinking of, how long you want to be away, what you love to do, and
            how much you want to spend. We&apos;ll carefully put together a travel plan
            that&apos;s as special as you are.
          </p>
        </Container>
      </section>

      <ServicesGrid />
      <TripForm />
    </div>
  );
}
