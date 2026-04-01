import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { APP_ROUTES } from '../../core/constants/app-routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="header-shell border-b border-white/8 bg-brand-surface-strong/80 backdrop-blur-xl">
      <div class="container-shell header-row">
        <a [routerLink]="routes.home" class="brand">
          <div class="brand-mark shadow-[var(--shadow-panel)]">PP</div>
          <div>
            <p class="brand-title text-brand-foreground">PulsePass</p>
            <p class="brand-subtitle text-brand-muted">Event Ticketing</p>
          </div>
        </a>

        <div class="header-actions">
          <a
            [routerLink]="routes.login"
            class="button ghost border border-brand-border text-brand-foreground hover:bg-white/6"
          >
            Login
          </a>
          <a
            [routerLink]="routes.register"
            class="button primary bg-linear-to-br from-sky-400 to-orange-400 text-slate-950"
          >
            Kayit Ol
          </a>
        </div>
      </div>
    </header>
  `,
  styles: `
    .header-shell {
      position: sticky;
      top: 0;
      z-index: 40;
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      min-height: 5rem;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-mark {
      display: grid;
      place-items: center;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 1rem;
      background: linear-gradient(135deg, #38bdf8, #fb923c);
      color: #0f172a;
      font-weight: 800;
    }

    .brand-title {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 700;
    }

    .brand-subtitle {
      margin: 0.2rem 0 0;
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #94a3b8;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 2.8rem;
      padding: 0 1.1rem;
      border-radius: 999px;
      transition: 160ms ease;
    }

    .button.primary {
      color: #07111f;
      font-weight: 700;
    }

    .button.ghost:hover,
    .button.primary:hover {
      transform: translateY(-1px);
    }

    @media (max-width: 640px) {
      .header-row {
        min-height: auto;
        padding: 1rem 0;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `,
})
export class HeaderComponent {
  protected readonly routes = APP_ROUTES;
}
