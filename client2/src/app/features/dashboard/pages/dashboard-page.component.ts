import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import type { EventItem } from '../../../core/models/event.model';
import { EventsService } from '../../../core/services/events.service';
import { formatDate } from '../../../core/utils/format-date';
import { DashboardShellComponent } from '../../../shared/components/dashboard-shell.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, DashboardShellComponent],
  template: `
    <app-dashboard-shell>
      <section class="panel hero-card border border-brand-border bg-brand-surface">
        <p class="eyebrow text-sky-300">Dashboard</p>
        <div class="hero-row">
          <div class="hero-copy">
            <h1 class="text-brand-foreground">Etkinlikleri akici bir feed halinde kesfet.</h1>
            <p class="text-brand-muted">
              Liste scroll edildikce yeni etkinlikler 12 ser 12 ser yuklenir.
              Genis ekranda her satirda 4 kart gorunur ve deneyim performansli kalir.
            </p>
          </div>

          <div class="metric-grid">
            <div class="metric-card border border-brand-border bg-brand-surface-strong">
              <p class="text-brand-muted">Batch Size</p>
              <strong class="text-brand-foreground">12</strong>
            </div>
            <div class="metric-card border border-brand-border bg-brand-surface-strong">
              <p class="text-brand-muted">Grid</p>
              <strong class="text-brand-foreground">4 Kolon</strong>
            </div>
          </div>
        </div>
      </section>

      @if (error() && events().length === 0) {
        <section class="panel fallback-card">
          <p>{{ error() }}</p>
        </section>
      } @else {
        <section class="feed-section">
          <div class="feed-header border border-brand-border bg-brand-surface/70">
            <div>
              <p class="eyebrow text-sky-300">Live Feed</p>
              <h2 class="text-brand-foreground">Etkinlik akisi</h2>
            </div>
            <p class="loaded-copy text-brand-muted">{{ events().length }} etkinlik yuklendi</p>
          </div>

          <div class="events-grid">
            @for (event of events(); track event.id) {
              <article class="panel glow-ring event-card border border-brand-border">
                <div class="event-media">
                  <div class="status-badge">{{ event.status }}</div>
                  @if (event.is_featured) {
                    <div class="featured-badge">Featured</div>
                  }
                </div>

                <div class="event-content">
                  <div class="event-heading">
                    <div>
                      <h3 class="text-brand-foreground">{{ event.title }}</h3>
                      <p class="event-date text-brand-muted">{{ formatDate(event.start_date) }}</p>
                    </div>
                    <div class="price-box border border-emerald-300/15 bg-emerald-400/8">
                      <span class="text-emerald-200">Baslangic</span>
                      <strong class="text-brand-foreground">{{ formatPrice(event.price_from, event.currency) }}</strong>
                    </div>
                  </div>

                  <p class="event-description text-brand-muted">
                    {{ event.description || 'Bu etkinlik icin aciklama henuz eklenmedi.' }}
                  </p>

                  <div class="ticket-stats">
                    <div class="border border-brand-border bg-brand-surface-strong">
                      <span class="text-brand-muted">Kalan</span>
                      <strong class="text-brand-foreground">{{ event.available_ticket_count }}</strong>
                    </div>
                    <div class="border border-brand-border bg-brand-surface-strong">
                      <span class="text-brand-muted">Toplam</span>
                      <strong class="text-brand-foreground">{{ event.total_ticket_count }}</strong>
                    </div>
                  </div>
                </div>
              </article>
            }

            @if (isLoading()) {
              @for (item of skeletonItems; track item) {
                <div class="panel skeleton-card"></div>
              }
            }
          </div>

          <div #sentinel class="sentinel">
            @if (isFetchingNextPage()) {
              <p>Yeni etkinlikler yukleniyor...</p>
            } @else if (!hasNextPage() && events().length > 0) {
              <p>Tum etkinlikler gosterildi.</p>
            }
          </div>

          @if (error() && events().length > 0) {
            <p class="inline-error">{{ error() }}</p>
          }
        </section>
      }
    </app-dashboard-shell>
  `,
  styles: `
    :host {
      display: block;
    }

    .hero-card {
      padding: 2rem;
      border-radius: 2rem;
    }

    .eyebrow {
      margin: 0;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: #7dd3fc;
    }

    .hero-row {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      margin-top: 1rem;
    }

    .hero-copy {
      max-width: 48rem;
    }

    h1 {
      margin: 0;
      font-size: clamp(2.5rem, 5vw, 4rem);
    }

    h2,
    h3 {
      margin: 0;
    }

    p {
      color: #cbd5e1;
      line-height: 1.75;
    }

    .metric-grid {
      display: grid;
      gap: 0.75rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      min-width: 18rem;
    }

    .metric-card,
    .ticket-stats div,
    .price-box {
      padding: 1rem 1.1rem;
      border-radius: 1.3rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    .metric-card p,
    .price-box span,
    .ticket-stats span {
      margin: 0;
      color: #94a3b8;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .metric-card strong,
    .price-box strong,
    .ticket-stats strong {
      display: block;
      margin-top: 0.65rem;
      font-size: 1.45rem;
      color: white;
    }

    .feed-section {
      margin-top: 1.5rem;
    }

    .feed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem 1.25rem;
      border-radius: 1.75rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    .loaded-copy {
      margin: 0;
    }

    .events-grid {
      display: grid;
      gap: 1.25rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .event-card {
      display: flex;
      min-height: 20rem;
      flex-direction: column;
      overflow: hidden;
      border-radius: 1.75rem;
    }

    .event-media {
      position: relative;
      height: 11rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background:
        radial-gradient(circle at top left, rgba(56, 189, 248, 0.35), transparent 35%),
        linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(15, 118, 110, 0.38));
    }

    .status-badge,
    .featured-badge {
      position: absolute;
      top: 1rem;
      padding: 0.4rem 0.75rem;
      border-radius: 999px;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
    }

    .status-badge {
      left: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.2);
      color: #fed7aa;
    }

    .featured-badge {
      right: 1rem;
      border: 1px solid rgba(253, 186, 116, 0.25);
      background: rgba(251, 146, 60, 0.12);
      color: #ffedd5;
    }

    .event-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 1.25rem;
    }

    .event-heading {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }

    .event-date {
      margin: 0.5rem 0 0;
      color: #94a3b8;
      font-size: 0.92rem;
    }

    .event-description {
      margin: 1rem 0 0;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ticket-stats {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
      margin-top: auto;
      padding-top: 1.5rem;
    }

    .skeleton-card {
      min-height: 20rem;
      border-radius: 1.75rem;
      opacity: 0.65;
      animation: pulse 1.3s ease-in-out infinite;
    }

    .sentinel,
    .fallback-card {
      display: grid;
      place-items: center;
      min-height: 4rem;
    }

    .inline-error {
      color: #fecaca;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.35;
      }
      50% {
        opacity: 0.8;
      }
    }

    @media (max-width: 1280px) {
      .events-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 960px) {
      .hero-row,
      .feed-header,
      .event-heading {
        flex-direction: column;
      }

      .events-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .hero-card {
        padding: 1.25rem;
      }

      .metric-grid,
      .events-grid,
      .ticket-stats {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class DashboardPageComponent implements AfterViewInit {
  private readonly eventsService = inject(EventsService);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('sentinel') private sentinelRef?: ElementRef<HTMLDivElement>;

  protected readonly events = signal<EventItem[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly isFetchingNextPage = signal(false);
  protected readonly hasNextPage = signal(true);
  protected readonly error = signal('');
  protected readonly skeletonItems = Array.from({ length: 8 }, (_, index) => index);

  private page = 1;

  constructor() {
    this.loadPage(1, true);
  }

  ngAfterViewInit() {
    const sentinel = this.sentinelRef?.nativeElement;

    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (!target?.isIntersecting || this.isLoading() || this.isFetchingNextPage() || !this.hasNextPage()) {
          return;
        }

        this.loadPage(this.page + 1);
      },
      { rootMargin: '240px 0px' },
    );

    observer.observe(sentinel);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  protected formatDate = formatDate;

  protected formatPrice(price: string, currency: string) {
    const numericPrice = Number(price);

    if (Number.isNaN(numericPrice)) {
      return `${price} ${currency}`;
    }

    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(numericPrice);
  }

  private loadPage(page: number, replace = false) {
    if (replace) {
      this.isLoading.set(true);
      this.error.set('');
    } else {
      this.isFetchingNextPage.set(true);
    }

    this.eventsService
      .getEvents(page, 12)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.page = response.page;
          this.hasNextPage.set(response.hasNextPage);
          this.events.set(replace ? response.items : [...this.events(), ...response.items]);
        },
        error: (response) => {
          this.error.set(response?.error?.message ?? 'Etkinlikler yuklenemedi.');
          this.isLoading.set(false);
          this.isFetchingNextPage.set(false);
        },
        complete: () => {
          this.isLoading.set(false);
          this.isFetchingNextPage.set(false);
        },
      });
  }
}
