import Link from "next/link";

import type { User } from "@/features/users/types";
import { formatDate } from "@/lib/utils/format-date";

export function UserDetailCard({ user }: { user: User }) {
  return (
    <section className="panel rounded-[2rem] p-8">
      <p className="text-sm uppercase tracking-[0.24em] text-sky-300">User Detail</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-white">{user.name}</h1>
      <p className="mt-3 text-slate-300">{user.email}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
          <p className="text-sm text-slate-400">Rol</p>
          <p className="mt-2 text-lg text-white">{user.role}</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
          <p className="text-sm text-slate-400">Durum</p>
          <p className="mt-2 text-lg text-white">{user.status}</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
          <p className="text-sm text-slate-400">Kayit Tarihi</p>
          <p className="mt-2 text-lg text-white">{formatDate(user.createdAt)}</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
          <p className="text-sm text-slate-400">ID</p>
          <p className="mt-2 text-lg text-white">{user.id}</p>
        </div>
      </div>

      <Link href="/users" className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-white/85 transition hover:bg-white/6">
        Listeye Don
      </Link>
    </section>
  );
}
