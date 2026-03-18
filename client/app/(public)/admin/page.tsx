import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin panel giris noktasi icin placeholder arayuz.",
};

export default function AdminPage() {
  return (
    <PageHero
      eyebrow="Admin"
      title="Yonetim paneli icin alan ayrildi."
      description="Etkinlik olusturma, siparis izleme ve kullanici yonetimi ekranlarini ayni komponent sistemiyle devam ettirebiliriz."
      primaryHref="/events"
      primaryLabel="Etkinlikleri Incele"
    />
  );
}
