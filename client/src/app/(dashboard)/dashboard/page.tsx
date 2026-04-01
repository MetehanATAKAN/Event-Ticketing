import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";
import { EventsGrid } from "@/features/events/components/events-grid";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container-shell grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
        <Sidebar />

        <main className="space-y-6">
          <section className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300">
              Dashboard
            </p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  Etkinlikleri akici bir feed halinde kesfet.
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Liste scroll edildikce yeni etkinlikler 12 ser 12 ser yuklenir. Genis
                  ekranda her satirda 4 kart gorunur ve deneyim performansli kalir.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/4 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Batch Size
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white">12</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-white/4 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Grid
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white">4 Kolon</p>
                </div>
              </div>
            </div>
          </section>

          <EventsGrid />
        </main>
      </div>
    </div>
  );
}
