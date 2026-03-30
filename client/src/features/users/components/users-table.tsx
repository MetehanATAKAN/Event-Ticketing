"use client";

import Link from "next/link";
import { useState } from "react";

import { useUsers } from "@/features/users/hooks/use-users";
import { normalizeUserQuery } from "@/features/users/schemas/user-filter-schema";
import { useDebounce } from "@/hooks/use-debounce";
import { formatDate } from "@/lib/utils/format-date";

export function UsersTable() {
  const { users, isLoading } = useUsers();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);

  const filteredUsers = users.filter((user) => {
    const normalized = normalizeUserQuery(debouncedQuery);

    if (!normalized) {
      return true;
    }

    return [user.name, user.email, user.role].join(" ").toLowerCase().includes(normalized);
  });

  return (
    <section className="panel rounded-[2rem] p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white">Kullanicilar</h2>
          <p className="mt-2 text-sm text-slate-400">Ad, e-posta veya role gore arama yapabilirsin.</p>
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ad, email veya rol ara"
          className="h-12 rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/8">
        <div className="grid grid-cols-[1.3fr_1.5fr_0.8fr_0.9fr_0.9fr] gap-4 bg-white/5 px-5 py-4 text-xs uppercase tracking-[0.18em] text-slate-400">
          <span>Ad</span>
          <span>E-posta</span>
          <span>Rol</span>
          <span>Durum</span>
          <span>Tarih</span>
        </div>
        {isLoading ? (
          <div className="px-5 py-8 text-sm text-slate-300">Yukleniyor...</div>
        ) : (
          filteredUsers.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="grid grid-cols-[1.3fr_1.5fr_0.8fr_0.9fr_0.9fr] gap-4 border-t border-white/8 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/5"
            >
              <span>{user.name}</span>
              <span className="text-slate-300">{user.email}</span>
              <span className="capitalize">{user.role}</span>
              <span className="capitalize">{user.status}</span>
              <span className="text-slate-400">{formatDate(user.createdAt)}</span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
