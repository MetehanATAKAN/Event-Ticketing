import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page.component').then(
        (module) => module.HomePageComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login-page.component').then(
        (module) => module.LoginPageComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/pages/register-page.component').then(
        (module) => module.RegisterPageComponent,
      ),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard-page.component').then(
        (module) => module.DashboardPageComponent,
      ),
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/users/pages/users-page.component').then(
        (module) => module.UsersPageComponent,
      ),
  },
  {
    path: 'users/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/users/pages/user-detail-page.component').then(
        (module) => module.UserDetailPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
