"use client";

import { useInfiniteEvents } from "@/features/events/hooks/use-infinite-events";
import { formatDate } from "@/lib/utils/format-date";

function formatPrice(price: string, currency: string) {
  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return `${price} ${currency}`;
  }

  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

export function EventsGrid() {
  const {
    error,
    events,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    sentinelRef,
    totalLoaded,
  } = useInfiniteEvents();

  if (isLoading) {
    return (
      <section className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="panel h-80 animate-pulse rounded-[1.75rem] border border-white/8 bg-white/5"
            />
          ))}
        </div>
      </section>
    );
  }

  if (error && events.length === 0) {
    return (
      <section className="panel rounded-[2rem] p-6">
        <p className="text-base text-rose-200">{error}</p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 rounded-[1.75rem] border border-white/8 bg-white/4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Live Feed</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-white">
            Etkinlik akisi
          </h2>
        </div>
        <p className="text-sm text-slate-300">{totalLoaded} etkinlik yuklendi</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {events.map((event) => (
          <article
            key={event.id}
            className="panel glow-ring flex min-h-80 flex-col overflow-hidden rounded-[1.75rem]"
          >
            <div className="relative h-44 overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,118,110,0.38))]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,7,18,0.62)_100%)]" />
              <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-orange-200">
                {event.status}
              </div>
              {event.is_featured ? (
                <div className="absolute right-4 top-4 rounded-full border border-orange-300/25 bg-orange-400/12 px-3 py-1 text-xs font-medium text-orange-100">
                  Featured
                </div>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{formatDate(event.start_date)}</p>
                </div>
                <div className="rounded-2xl border border-emerald-300/12 bg-emerald-400/8 px-3 py-2 text-right">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">Baslangic</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {formatPrice(event.price_from, event.currency)}
                  </p>
                </div>
              </div>

              <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-300">
                {event.description || "Bu etkinlik icin aciklama henuz eklenmedi."}
              </p>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Kalan</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {event.available_ticket_count}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Toplam</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {event.total_ticket_count}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div ref={sentinelRef} className="flex min-h-16 items-center justify-center">
        {isFetchingNextPage ? (
          <p className="text-sm text-slate-300">Yeni etkinlikler yukleniyor...</p>
        ) : null}
        {!hasNextPage && events.length > 0 ? (
          <p className="text-sm text-slate-400">Tum etkinlikler gosterildi.</p>
        ) : null}
      </div>

      {error && events.length > 0 ? <p className="text-sm text-rose-200">{error}</p> : null}
    </section>
  );
}
