import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/constants/routes";

const ticketHighlights = [
  {
    title: "Hizli biletleme",
    text: "Konser, festival ve sahne etkinlikleri icin dakikalar icinde bilet secip satin alma akisi.",
  },
  {
    title: "Guclu organizasyon",
    text: "Etkinlik detaylari, salon bilgileri ve kategori bazli listeleme ile temiz bir kesif deneyimi.",
  },
  {
    title: "Modern deneyim",
    text: "Mobil ve masaustunde hizli acilan, sade ve odakli bir ticketing arayuzu.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="grid-overlay overflow-hidden py-10 md:py-16">
        <section className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/8 px-4 py-2 text-sm text-sky-100">
              Konser, festival ve etkinlik biletleri tek platformda
            </div>

            <div className="space-y-5">
              <h1 className="font-display text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Sevdigin etkinliklere bilet bulmanin en temiz yolu.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                PulsePass ile populer etkinlikleri inceleyebilir, uygun koltuklari secip biletleme surecini hizli ve guvenli bir sekilde tamamlayabilirsin.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={APP_ROUTES.login}>Login</Button>
              <Button href={APP_ROUTES.register} variant="secondary">
                Kayit Ol
              </Button>
            </div>
          </div>

          <div className="panel glow-ring rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(6,14,26,0.76)] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-300">
                Bu haftanin one cikanlari
              </p>
              <div className="mt-6 space-y-4">
                <article className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-sky-300">
                    Konser
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                    Midnight Echoes Live
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    28 Haziran 2026, Harbiye Acik Hava, Istanbul
                  </p>
                </article>
                <article className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-sky-300">
                    Festival
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                    City Lights Festival
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    12 Temmuz 2026, CerModern, Ankara
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell mt-16 grid gap-4 md:grid-cols-3">
          {ticketHighlights.map((item) => (
            <article key={item.title} className="panel rounded-[1.75rem] p-6">
              <h2 className="font-display text-2xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
