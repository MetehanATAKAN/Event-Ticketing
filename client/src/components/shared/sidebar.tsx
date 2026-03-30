import Link from "next/link";

import { APP_ROUTES } from "@/lib/constants/routes";

const sidebarItems = [
  { href: APP_ROUTES.dashboard, label: "Overview" },
  { href: APP_ROUTES.users, label: "Users" },
];

export function Sidebar() {
  return (
    <aside className="panel h-fit rounded-[2rem] p-4">
      <p className="px-3 pb-3 text-xs uppercase tracking-[0.24em] text-slate-400">Dashboard</p>
      <nav className="grid gap-2">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/6">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
