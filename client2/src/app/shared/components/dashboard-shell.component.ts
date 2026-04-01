import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'app-dashboard-shell',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent],
  template: `
    <div class="page-shell">
      <app-header />
      <div class="container-shell dashboard-layout">
        <app-sidebar />
        <main class="dashboard-main">
          <ng-content />
        </main>
      </div>
    </div>
  `,
  styles: `
    .page-shell {
      min-height: 100vh;
    }

    .dashboard-layout {
      display: grid;
      gap: 1.5rem;
      padding: 2rem 0;
      grid-template-columns: 260px minmax(0, 1fr);
    }

    .dashboard-main {
      min-width: 0;
    }

    @media (max-width: 1024px) {
      .dashboard-layout {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class DashboardShellComponent {}
