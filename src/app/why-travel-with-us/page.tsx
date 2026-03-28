import type { Metadata } from "next";
import AboutSection from "@/components/why/AboutSection";
import ProcessSteps from "@/components/why/ProcessSteps";
import Features from "@/components/why/Features";

export const metadata: Metadata = {
  title: "Why Travel With Us — Ethaüs",
  description:
    "Discover how Ethaüs turns stressful travel planning into smooth, personalised journeys for families and beginner travellers.",
};

export default function WhyTravelPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <ProcessSteps />
      <Features />
    </div>
  );
}
