import { featuredEvents } from "@/data/mock-events";
import { SectionTitle } from "@/components/ui/section-title";

export function FeaturedEventsSection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-shell space-y-8">
        <SectionTitle
          eyebrow="One Cikanlar"
          title="Hizli karar verebilmen icin net kartlar"
          description="Etkinlik kartlarinda tarih, mekan, sehir ve fiyat bilgisini ilk bakista gorebilecegin bir yapi kurduk. Daha sonra filtre ve arama katmanlari buna kolayca eklenebilir."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <article key={event.id} className="panel rounded-[1.75rem] p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
                  {event.category}
                </span>
                <span className="text-sm font-semibold text-orange-300">
                  {event.price}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                {event.title}
              </h3>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p>{event.date}</p>
                <p>{event.city}</p>
                <p>{event.venue}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="text-sm text-emerald-300">{event.attendees}</span>
                <span className="text-sm text-white/80">Detayi Gor</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
