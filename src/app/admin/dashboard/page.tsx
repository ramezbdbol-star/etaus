import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Dashboard — Ethaüs Admin",
  robots: "noindex, nofollow",
};

export default function DashboardPage() {
  return <AdminDashboard />;
}
