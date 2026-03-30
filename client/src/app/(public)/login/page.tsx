import type { Metadata } from "next";

import { Header } from "@/components/shared/header";
import { LoginForm } from "@/features/auth/components/login-form";
import { APP_ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Giris Yap",
  description: "PulsePass hesabina giris yap ve dashboard alanina gec.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <div className="min-h-screen">
      <Header />
      <LoginForm nextPath={next || APP_ROUTES.dashboard} />
    </div>
  );
}
