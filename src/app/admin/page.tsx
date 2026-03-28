import type { Metadata } from "next";
import AdminLogin from "@/components/admin/AdminLogin";

export const metadata: Metadata = {
  title: "Admin — Ethaüs",
  robots: "noindex, nofollow",
};

export default function AdminPage() {
  return <AdminLogin />;
}
