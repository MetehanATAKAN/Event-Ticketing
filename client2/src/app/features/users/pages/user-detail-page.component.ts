import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { APP_ROUTES } from '../../../core/constants/app-routes';
import type { User } from '../../../core/models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { formatDate } from '../../../core/utils/format-date';
import { DashboardShellComponent } from '../../../shared/components/dashboard-shell.component';

@Component({
  selector: 'app-user-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, DashboardShellComponent],
  template: `
    <app-dashboard-shell>
      @if (user(); as currentUser) {
        <section class="panel detail-card">
          <a [routerLink]="routes.users" class="back-link">Kullanicilara don</a>
          <p class="eyebrow">User Detail</p>
          <h1>{{ currentUser.name }}</h1>
          <div class="detail-grid">
            <div>
              <span>E-posta</span>
              <strong>{{ currentUser.email }}</strong>
            </div>
            <div>
              <span>Rol</span>
              <strong>{{ currentUser.role }}</strong>
            </div>
            <div>
              <span>Durum</span>
              <strong>{{ currentUser.status }}</strong>
            </div>
            <div>
              <span>Tarih</span>
              <strong>{{ formatDate(currentUser.createdAt) }}</strong>
            </div>
          </div>
        </section>
      } @else {
        <section class="panel detail-card">
          <p>Kullanici bulunamadi.</p>
        </section>
      }
    </app-dashboard-shell>
  `,
  styles: `
    .detail-card {
      padding: 2rem;
      border-radius: 2rem;
    }

    .back-link,
    .eyebrow,
    span {
      color: #94a3b8;
    }

    .back-link {
      display: inline-flex;
      margin-bottom: 1rem;
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

    .detail-grid {
      display: grid;
      gap: 1rem;
      margin-top: 1.5rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .detail-grid div {
      padding: 1rem;
      border-radius: 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    span,
    strong {
      display: block;
    }

    strong {
      margin-top: 0.65rem;
      color: white;
      font-size: 1.1rem;
    }

    @media (max-width: 720px) {
      .detail-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class UserDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly usersService = inject(UsersService);

  protected readonly routes = APP_ROUTES;
  protected readonly formatDate = formatDate;
  protected readonly user = signal<User | null>(null);

  constructor() {
    const userId = this.route.snapshot.paramMap.get('id');

    if (!userId) {
      return;
    }

    void this.usersService.getUserById(userId).then((user) => this.user.set(user));
  }
}
