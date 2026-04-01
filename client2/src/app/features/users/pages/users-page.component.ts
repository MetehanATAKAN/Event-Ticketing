import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import type { User } from '../../../core/models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { formatDate } from '../../../core/utils/format-date';
import { DashboardShellComponent } from '../../../shared/components/dashboard-shell.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, DashboardShellComponent],
  template: `
    <app-dashboard-shell>
      <section class="intro-section">
        <p class="eyebrow">Users</p>
        <h1>Kullanici listesi</h1>
        <p>Tum kullanicilari bu ekrandan gorebilirsin.</p>
      </section>

      <section class="panel table-card">
        <div class="table-toolbar">
          <div>
            <h2>Kullanicilar</h2>
            <p>Ad, e-posta veya role gore arama yapabilirsin.</p>
          </div>

          <input
            [(ngModel)]="query"
            type="text"
            placeholder="Ad, email veya rol ara"
          />
        </div>

        <div class="table-grid header-row">
          <span>Ad</span>
          <span>E-posta</span>
          <span>Rol</span>
          <span>Durum</span>
          <span>Tarih</span>
        </div>

        @for (user of filteredUsers(); track user.id) {
          <a [routerLink]="['/users', user.id]" class="table-grid body-row">
            <span>{{ user.name }}</span>
            <span class="muted">{{ user.email }}</span>
            <span>{{ user.role }}</span>
            <span>{{ user.status }}</span>
            <span class="muted">{{ formatDate(user.createdAt) }}</span>
          </a>
        }
      </section>
    </app-dashboard-shell>
  `,
  styles: `
    .intro-section p,
    .table-toolbar p {
      color: #94a3b8;
    }

    .eyebrow {
      margin: 0;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: #7dd3fc;
    }

    h1 {
      margin: 0.75rem 0 0;
      font-size: 2.8rem;
    }

    .table-card {
      margin-top: 1.5rem;
      padding: 1.5rem;
      border-radius: 2rem;
    }

    .table-toolbar {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
    }

    h2 {
      margin: 0;
    }

    input {
      width: min(100%, 20rem);
      height: 3rem;
      padding: 0 1rem;
      border-radius: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: white;
    }

    .table-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1.3fr 1.5fr 0.8fr 0.9fr 0.9fr;
      padding: 1rem 1.1rem;
    }

    .header-row {
      margin-top: 1.5rem;
      border-radius: 1.2rem 1.2rem 0 0;
      background: rgba(255, 255, 255, 0.05);
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 0.72rem;
    }

    .body-row {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      transition: 160ms ease;
    }

    .body-row:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .muted {
      color: #cbd5e1;
    }

    @media (max-width: 900px) {
      .table-toolbar,
      .table-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class UsersPageComponent {
  private readonly usersService = inject(UsersService);

  protected readonly users = signal<User[]>([]);
  protected query = '';
  protected readonly formatDate = formatDate;

  protected readonly filteredUsers = computed(() => {
    const normalizedQuery = this.query.trim().toLowerCase();

    if (!normalizedQuery) {
      return this.users();
    }

    return this.users().filter((user) =>
      [user.name, user.email, user.role].join(' ').toLowerCase().includes(normalizedQuery),
    );
  });

  constructor() {
    void this.usersService.getUsers().then((users) => this.users.set(users));
  }
}
