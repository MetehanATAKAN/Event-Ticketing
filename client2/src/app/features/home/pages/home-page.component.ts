import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { APP_ROUTES } from '../../../core/constants/app-routes';
import { HeaderComponent } from '../../../shared/components/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  template: `
    <div class="page-shell">
      <app-header />

      <main class="grid-overlay hero-shell">
        <section class="container-shell hero-grid">
          <div class="hero-copy">
            <div class="eyebrow">Konser, festival ve etkinlik biletleri tek platformda</div>
            <div>
              <h1>Sevdigin etkinliklere bilet bulmanin en temiz yolu.</h1>
              <p>
                PulsePass ile populer etkinlikleri inceleyebilir, uygun koltuklari
                secip biletleme surecini hizli ve guvenli bir sekilde tamamlayabilirsin.
              </p>
            </div>
            <div class="cta-row">
              <a [routerLink]="routes.login" class="button primary">Login</a>
              <a [routerLink]="routes.register" class="button secondary">Kayit Ol</a>
            </div>
          </div>

          <div class="panel feature-panel">
            <div class="feature-inner">
              <p class="feature-kicker">Bu haftanin one cikanlari</p>
              <article class="feature-card">
                <p class="feature-type">Konser</p>
                <h2>Midnight Echoes Live</h2>
                <p>28 Haziran 2026, Harbiye Acik Hava, Istanbul</p>
              </article>
              <article class="feature-card">
                <p class="feature-type">Festival</p>
                <h2>City Lights Festival</h2>
                <p>12 Temmuz 2026, CerModern, Ankara</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
  styles: `
    .page-shell {
      min-height: 100vh;
    }

    .hero-shell {
      overflow: hidden;
      padding: 2.5rem 0 4rem;
    }

    .hero-grid {
      display: grid;
      gap: 2.5rem;
      align-items: center;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    }

    .hero-copy {
      display: grid;
      gap: 2rem;
    }

    .eyebrow {
      width: fit-content;
      padding: 0.7rem 1rem;
      border-radius: 999px;
      border: 1px solid rgba(125, 211, 252, 0.2);
      background: rgba(125, 211, 252, 0.08);
      color: #e0f2fe;
      font-size: 0.95rem;
    }

    h1 {
      margin: 0;
      font-size: clamp(3rem, 8vw, 5rem);
      line-height: 0.98;
    }

    p {
      color: #cbd5e1;
      line-height: 1.8;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 3rem;
      padding: 0 1.25rem;
      border-radius: 999px;
      transition: 160ms ease;
    }

    .button.primary {
      background: linear-gradient(135deg, #38bdf8, #fb923c);
      color: #07111f;
      font-weight: 700;
    }

    .button.secondary {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.03);
    }

    .feature-panel {
      padding: 1.5rem;
      border-radius: 2rem;
    }

    .feature-inner {
      padding: 2rem;
      border-radius: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(6, 14, 26, 0.76);
    }

    .feature-kicker,
    .feature-type {
      margin: 0 0 0.5rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #fdba74;
    }

    .feature-card {
      margin-top: 1rem;
      padding: 1.25rem;
      border-radius: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    .feature-card h2 {
      margin: 0.4rem 0 0.6rem;
      font-size: 1.7rem;
    }

    @media (max-width: 960px) {
      .hero-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class HomePageComponent {
  protected readonly routes = APP_ROUTES;
}
