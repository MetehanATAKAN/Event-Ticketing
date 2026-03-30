import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";
import { UsersTable } from "@/features/users/components/users-table";

export default function UsersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container-shell grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <main className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Users</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-white">Kullanici listesi</h1>
            <p className="mt-3 text-slate-300">Tum kullanicilari bu ekrandan gorebilirsin.</p>
          </div>
          <UsersTable />
        </main>
      </div>
    </div>
  );
}
