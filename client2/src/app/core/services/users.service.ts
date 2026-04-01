import { Injectable } from '@angular/core';

import type { User } from '../models/user.model';

const mockUsers: User[] = [
  {
    id: 'u_101',
    name: 'Melisa Kaya',
    email: 'melisa@example.com',
    role: 'admin',
    createdAt: '2026-03-12T10:00:00.000Z',
    status: 'active',
  },
  {
    id: 'u_102',
    name: 'Deniz Arslan',
    email: 'deniz@example.com',
    role: 'customer',
    createdAt: '2026-03-14T09:30:00.000Z',
    status: 'active',
  },
  {
    id: 'u_103',
    name: 'Ece Demir',
    email: 'ece@example.com',
    role: 'customer',
    createdAt: '2026-03-20T14:15:00.000Z',
    status: 'invited',
  },
];

@Injectable({ providedIn: 'root' })
export class UsersService {
  getUsers() {
    return Promise.resolve(mockUsers);
  }

  async getUserById(id: string) {
    const users = await this.getUsers();
    return users.find((user) => user.id === id) ?? null;
  }
}
