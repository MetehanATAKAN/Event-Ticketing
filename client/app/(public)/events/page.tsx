import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description: "PulsePass etkinlik listeleme sayfasi icin arayuz girisi.",
};

export default function EventsPage() {
  return (
    <PageHero
      eyebrow="Etkinlikler"
      title="Listeleme sayfasi icin arayuz temeli hazir."
      description="Buraya siradaki adimda kategori, sehir, tarih ve arama filtreleri olan etkinlik listesi ekleyebiliriz. Tasarim dili ana sayfa ve login ekrani ile uyumlu tutuldu."
      primaryHref="/login"
      primaryLabel="Giris Ekranini Goster"
    />
  );
}
