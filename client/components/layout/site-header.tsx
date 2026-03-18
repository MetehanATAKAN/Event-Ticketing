import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/events", label: "Etkinlikler" },
  { href: "/favorites", label: "Favoriler" },
  { href: "/admin", label: "Admin" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(4,10,20,0.7)] backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-orange-400 font-display text-lg font-bold text-slate-950">
            PP
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-wide text-white">
              PulsePass
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Event Ticketing
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/7 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/login" variant="ghost" className="hidden sm:inline-flex">
            Giris Yap
          </Button>
          <Button href="/events">Bilet Bul</Button>
        </div>
      </div>
    </header>
  );
}
