"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff } from "lucide-react";
import Container from "@/components/ui/Container";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        sessionStorage.setItem("ethaus_admin", "authenticated");
        router.push("/admin/dashboard");
      } else {
        setError("Invalid username or password");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,_rgba(212,168,83,0.04)_0%,_transparent_70%)]" />

      <Container className="relative z-10 max-w-md w-full">
        <div className="text-center mb-10">
          <span className="font-display text-3xl text-white tracking-wide">
            Eth<span className="text-gold-400">a</span>üs
          </span>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-500/30" />
            <span className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-semibold">
              Admin Portal
            </span>
            <span className="h-px w-8 bg-gold-500/30" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 space-y-6"
        >
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full border border-gold-500/20 flex items-center justify-center">
              <Lock size={20} className="text-gold-500" strokeWidth={1.5} />
            </div>
          </div>

          {error && (
            <div className="text-[13px] text-red-400 text-center bg-red-500/5 border border-red-500/10 py-3 px-4">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="username" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-slate-400 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              autoComplete="username"
              className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-[14px] text-white placeholder-slate-600 outline-none focus:border-gold-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-slate-400 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-[14px] text-white placeholder-slate-600 outline-none focus:border-gold-500 transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-3 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-600 mt-6 tracking-wide">
          Authorised personnel only
        </p>
      </Container>
    </section>
  );
}
