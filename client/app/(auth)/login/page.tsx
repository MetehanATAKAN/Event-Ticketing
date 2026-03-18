import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { LoginPanel } from "@/components/sections/login-panel";

export const metadata: Metadata = {
  title: "Giris Yap",
  description: "PulsePass hesabina giris yap, siparislerini ve favorilerini yonet.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <LoginPanel />
    </div>
  );
}
