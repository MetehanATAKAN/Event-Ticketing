import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { RegisterPanel } from "@/components/sections/register-panel";

export const metadata: Metadata = {
  title: "Kayit Ol",
  description: "PulsePass hesabini olustur, favorilerini ve siparislerini yonet.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <RegisterPanel />
    </div>
  );
}
