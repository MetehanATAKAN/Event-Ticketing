import type { Metadata } from "next";

import { Header } from "@/components/shared/header";
import { RegisterForm } from "@/features/auth/components/register-form";

export const metadata: Metadata = {
  title: "Kayit Ol",
  description: "PulsePass hesabini olustur ve uygulama akisini baslat.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <RegisterForm />
    </div>
  );
}
