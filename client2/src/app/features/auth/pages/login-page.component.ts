import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { APP_ROUTES } from '../../../core/constants/app-routes';
import { AuthService } from '../../../core/services/auth.service';
import { HeaderComponent } from '../../../shared/components/header.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  template: `
    <div class="page-shell">
      <app-header />

      <main class="container-shell auth-shell">
        <section class="panel auth-card">
          <p class="eyebrow">Login</p>
          <h1>Dashboard alanina giris yap</h1>
          <p class="copy">Token backend'den alinir ve localStorage icinde tutulur.</p>

          <form class="auth-form" (ngSubmit)="submit()">
            <label>
              <span>E-posta</span>
              <input [(ngModel)]="email" name="email" type="email" required />
            </label>
            <label>
              <span>Sifre</span>
              <input [(ngModel)]="password" name="password" type="password" required />
            </label>

            @if (error()) {
              <p class="error">{{ error() }}</p>
            }

            <button type="submit" [disabled]="loading()">
              {{ loading() ? 'Giris yapiliyor...' : 'Login' }}
            </button>
          </form>
        </section>
      </main>
    </div>
  `,
  styles: `
    .auth-shell {
      display: grid;
      place-items: center;
      min-height: calc(100vh - 5rem);
      padding: 2rem 0;
    }

    .auth-card {
      width: min(100%, 32rem);
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

    h1 {
      margin: 1rem 0 0;
      font-size: 2.4rem;
    }

    .copy {
      color: #94a3b8;
    }

    .auth-form {
      display: grid;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    label {
      display: grid;
      gap: 0.45rem;
    }

    span {
      font-size: 0.92rem;
      color: #cbd5e1;
    }

    input {
      height: 3rem;
      padding: 0 1rem;
      border-radius: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: white;
      outline: none;
    }

    button {
      height: 3rem;
      border: 0;
      border-radius: 999px;
      background: linear-gradient(135deg, #38bdf8, #fb923c);
      color: #07111f;
      font-weight: 700;
      cursor: pointer;
    }

    .error {
      margin: 0;
      color: #fecaca;
    }
  `,
})
export class LoginPageComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected email = '';
  protected password = '';
  protected loading = signal(false);
  protected error = signal('');

  protected submit() {
    this.loading.set(true);
    this.error.set('');

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        void this.router.navigateByUrl(APP_ROUTES.dashboard);
      },
      error: (response) => {
        this.error.set(response?.error?.message ?? 'Giris sirasinda bir hata olustu.');
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
