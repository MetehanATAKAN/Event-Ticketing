import { featuredEvents, quickStats } from "@/data/mock-events";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="grid-overlay overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-sky-300/20 bg-sky-300/8 px-4 py-2 text-sm text-sky-200">
            Canli etkinlikler, hizli satin alma, admin odakli yonetim
          </div>

          <div className="space-y-5">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Sehirde ne varsa tek akista kesfet.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Konser, festival ve sahne etkinliklerini modern bir deneyimle
              incele. PulsePass ile etkinligi bul, koltugunu sec ve biletini
              saniyeler icinde tamamla.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/events">Etkinlikleri Kesfet</Button>
            <Button href="/login" variant="secondary">
              Hesabima Giris Yap
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="panel rounded-3xl p-5">
                <p className="font-display text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel glow-ring rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300">
                  Bu haftanin secimleri
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  Dolmadan yerini ayirt
                </h2>
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                Stok aktif
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {featuredEvents.map((event, index) => (
                <article
                  key={event.id}
                  className="rounded-3xl border border-white/8 bg-slate-950/30 p-5 transition hover:border-sky-300/25 hover:bg-slate-950/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-orange-300">
                        0{index + 1} {event.category}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <p className="rounded-full bg-white/8 px-3 py-1 text-sm text-white/88">
                      {event.price}
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                    <p>{event.date}</p>
                    <p>{event.city}</p>
                    <p>{event.venue}</p>
                    <p className="text-emerald-300">{event.attendees}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
