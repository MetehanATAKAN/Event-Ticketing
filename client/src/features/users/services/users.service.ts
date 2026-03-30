import type { User } from "@/features/users/types";

const mockUsers: User[] = [
  {
    id: "u_101",
    name: "Melisa Kaya",
    email: "melisa@example.com",
    role: "admin",
    createdAt: "2026-03-12T10:00:00.000Z",
    status: "active",
  },
  {
    id: "u_102",
    name: "Deniz Arslan",
    email: "deniz@example.com",
    role: "customer",
    createdAt: "2026-03-14T09:30:00.000Z",
    status: "active",
  },
  {
    id: "u_103",
    name: "Ece Demir",
    email: "ece@example.com",
    role: "customer",
    createdAt: "2026-03-20T14:15:00.000Z",
    status: "invited",
  },
];

export async function getUsers() {
  return mockUsers;
}

export async function getUserById(id: string) {
  return mockUsers.find((user) => user.id === id) ?? null;
}
