import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Favoriler",
  description: "Favori etkinliklerin listelenecegi arayuz alani.",
};

export default function FavoritesPage() {
  return (
    <PageHero
      eyebrow="Favoriler"
      title="Kaydettigin etkinlikler burada toplanacak."
      description="Backend baglantisi geldiginde kullanicinin favori etkinlikleri bu ekranda listelenebilir. Simdilik tasarim ve route yapisi hazir."
    />
  );
}
