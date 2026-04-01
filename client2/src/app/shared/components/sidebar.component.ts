import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { APP_ROUTES } from '../../core/constants/app-routes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="panel sidebar">
      <p class="sidebar-label">Dashboard</p>
      <nav class="sidebar-nav">
        @for (item of items; track item.href) {
          <a
            [routerLink]="item.href"
            routerLinkActive="active"
            class="sidebar-link"
          >
            {{ item.label }}
          </a>
        }
      </nav>
    </aside>
  `,
  styles: `
    .sidebar {
      height: fit-content;
      padding: 1rem;
      border-radius: 2rem;
    }

    .sidebar-label {
      margin: 0;
      padding: 0 0.75rem 0.75rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: #94a3b8;
    }

    .sidebar-nav {
      display: grid;
      gap: 0.5rem;
    }

    .sidebar-link {
      padding: 0.95rem 1rem;
      border-radius: 1rem;
      color: #e2e8f0;
      transition: 160ms ease;
    }

    .sidebar-link:hover,
    .sidebar-link.active {
      background: rgba(255, 255, 255, 0.06);
    }
  `,
})
export class SidebarComponent {
  protected readonly items = [
    { href: APP_ROUTES.dashboard, label: 'Overview' },
    { href: APP_ROUTES.users, label: 'Users' },
  ];
}
