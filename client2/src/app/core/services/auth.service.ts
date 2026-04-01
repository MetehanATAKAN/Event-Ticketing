import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { API_BASE_URL, API_ENDPOINTS } from '../constants/api-endpoints';
import { APP_ROUTES } from '../constants/app-routes';
import type { ApiResponse } from '../models/api.model';
import { StorageService } from './storage.service';

type AuthPayload = {
  email: string;
  password: string;
  name?: string;
};

type AuthResponse = ApiResponse<{ token: string }>;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly storageService = inject(StorageService);
  private readonly token = signal<string | null>(this.storageService.getToken());

  readonly isAuthenticated = computed(() => Boolean(this.token()));

  login(payload: AuthPayload) {
    return this.http
      .post<AuthResponse>(`${API_BASE_URL}${API_ENDPOINTS.auth.login}`, payload)
      .pipe(tap((response) => this.setToken(response.data.token)));
  }

  register(payload: AuthPayload) {
    return this.http
      .post<AuthResponse>(`${API_BASE_URL}${API_ENDPOINTS.auth.register}`, payload)
      .pipe(tap((response) => this.setToken(response.data.token)));
  }

  setToken(token: string) {
    this.storageService.setToken(token);
    this.token.set(token);
  }

  logout() {
    this.storageService.clearToken();
    this.token.set(null);
    void this.router.navigateByUrl(APP_ROUTES.login);
  }
}
