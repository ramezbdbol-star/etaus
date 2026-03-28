"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LogOut,
  Plane,
  Users,
  Clock,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Upload,
  ImageIcon,
  Trash2,
} from "lucide-react";
import Container from "@/components/ui/Container";

interface TripRequest {
  id: number;
  fullName: string;
  destination: string;
  travelers: number;
  budget: string;
  startDate: string;
  email: string;
  phone: string;
  status: "new" | "in_progress" | "completed";
  createdAt: string;
}

const sampleRequests: TripRequest[] = [
  {
    id: 1,
    fullName: "Sophie Van der Berg",
    destination: "Bali, Indonesia",
    travelers: 2,
    budget: "Comfort (Mid-range)",
    startDate: "2026-05-15",
    email: "sophie@email.com",
    phone: "+32 491 23 45 67",
    status: "new",
    createdAt: "2026-03-27",
  },
  {
    id: 2,
    fullName: "Marc Janssen",
    destination: "Tokyo & Kyoto, Japan",
    travelers: 4,
    budget: "Luxury",
    startDate: "2026-07-01",
    email: "marc.j@email.com",
    phone: "+32 478 90 12 34",
    status: "in_progress",
    createdAt: "2026-03-25",
  },
  {
    id: 3,
    fullName: "Elena Dubois",
    destination: "Santorini, Greece",
    travelers: 2,
    budget: "Comfort (Mid-range)",
    startDate: "2026-06-20",
    email: "elena.d@email.com",
    phone: "+32 467 56 78 90",
    status: "completed",
    createdAt: "2026-03-20",
  },
  {
    id: 4,
    fullName: "Thomas Peeters",
    destination: "Morocco (Marrakech & Fes)",
    travelers: 3,
    budget: "Economy",
    startDate: "2026-04-10",
    email: "t.peeters@email.com",
    phone: "+32 489 01 23 45",
    status: "new",
    createdAt: "2026-03-28",
  },
];

const statusStyles = {
  new: "bg-gold-500/10 text-gold-500 border-gold-500/20",
  in_progress: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  completed: "bg-green-500/10 text-green-400 border-green-500/20",
};

const statusLabels = {
  new: "New",
  in_progress: "In Progress",
  completed: "Completed",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [requests] = useState<TripRequest[]>(sampleRequests);
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem("ethaus_admin");
    if (auth !== "authenticated") {
      router.replace("/admin");
    } else {
      setAuthenticated(true);
      const saved = localStorage.getItem("ethaus_hero_bg");
      if (saved) setHeroImage(saved);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("ethaus_admin");
    router.push("/admin");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (JPEG, PNG, WebP)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be under 5MB");
      return;
    }

    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      localStorage.setItem("ethaus_hero_bg", dataUrl);
      setHeroImage(dataUrl);
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    localStorage.removeItem("ethaus_hero_bg");
    setHeroImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  if (!authenticated) return null;

  const newCount = requests.filter((r) => r.status === "new").length;
  const inProgressCount = requests.filter((r) => r.status === "in_progress").length;
  const completedCount = requests.filter((r) => r.status === "completed").length;

  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="font-display text-2xl text-white tracking-wide">
              Eth<span className="text-gold-400">a</span>üs
            </span>
            <div className="flex items-center gap-3 mt-1">
              <span className="h-px w-6 bg-gold-500/30" />
              <span className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-semibold">
                Dashboard
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <LogOut size={14} strokeWidth={1.5} />
            Sign Out
          </button>
        </div>

        {/* Hero Background Upload */}
        <div className="mb-12 border border-white/[0.06] bg-white/[0.02] p-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-gold-500" />
            <h2 className="font-display text-lg text-white">Hero Background</h2>
          </div>

          {heroImage ? (
            <div className="space-y-4">
              <div className="relative aspect-[21/9] overflow-hidden border border-white/[0.06]">
                <Image
                  src={heroImage}
                  alt="Hero background preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Dark overlay preview to show how it looks on the live site */}
                <div className="absolute inset-0 bg-navy-950/60" />
                <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white/60 bg-navy-950/60 px-3 py-1">
                  Preview with overlay
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-white/[0.06] text-slate-300 hover:text-white hover:border-gold-500/30 transition-all cursor-pointer"
                >
                  <Upload size={13} strokeWidth={1.5} />
                  Replace Image
                </button>
                <button
                  onClick={handleRemoveImage}
                  className="flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
                >
                  <Trash2 size={13} strokeWidth={1.5} />
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="w-full border border-dashed border-white/10 hover:border-gold-500/30 py-16 flex flex-col items-center gap-3 transition-all cursor-pointer group disabled:opacity-50"
            >
              <div className="w-14 h-14 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-gold-500/30 transition-all">
                {uploading ? (
                  <div className="w-5 h-5 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
                ) : (
                  <ImageIcon size={22} className="text-slate-500 group-hover:text-gold-500 transition-colors" strokeWidth={1.5} />
                )}
              </div>
              <div className="text-center">
                <p className="text-[13px] text-slate-400 group-hover:text-white transition-colors">
                  {uploading ? "Uploading..." : "Click to upload hero background image"}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  JPEG, PNG, or WebP — max 5MB
                </p>
              </div>
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.04] mb-12">
          {[
            { label: "New Requests", value: newCount, icon: Plane, color: "text-gold-500" },
            { label: "In Progress", value: inProgressCount, icon: Clock, color: "text-blue-400" },
            { label: "Completed", value: completedCount, icon: Users, color: "text-green-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-navy-950 p-6 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-full border border-white/[0.06] flex items-center justify-center">
                <stat.icon size={18} className={stat.color} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-2xl font-display text-white">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mt-0.5">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-gold-500" />
          <h2 className="font-display text-lg text-white">Trip Requests</h2>
        </div>

        {/* Requests list */}
        <div className="space-y-3">
          {requests.map((req) => (
            <div
              key={req.id}
              className="border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy-700/50 flex items-center justify-center text-[13px] font-semibold text-white">
                    {req.fullName.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white">
                      {req.fullName}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      #{String(req.id).padStart(4, "0")}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold border ${statusStyles[req.status]} w-fit`}
                >
                  {statusLabels[req.status]}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[12px]">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={12} strokeWidth={1.5} className="text-gold-500/60" />
                  <span>{req.destination}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Users size={12} strokeWidth={1.5} className="text-gold-500/60" />
                  <span>{req.travelers} traveler{req.travelers > 1 ? "s" : ""}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={12} strokeWidth={1.5} className="text-gold-500/60" />
                  <span>{req.startDate}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">{req.budget}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] flex flex-wrap gap-4 text-[11px] text-slate-500">
                <a href={`mailto:${req.email}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
                  <Mail size={11} strokeWidth={1.5} /> {req.email}
                </a>
                <a href={`tel:${req.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
                  <Phone size={11} strokeWidth={1.5} /> {req.phone}
                </a>
                <span className="ml-auto text-slate-600">Submitted {req.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
