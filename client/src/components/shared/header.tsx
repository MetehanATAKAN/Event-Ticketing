import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/constants/routes";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(4,10,20,0.78)] backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href={APP_ROUTES.home} className="flex items-center gap-3">
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

        <div className="flex items-center gap-3">
          <Button href={APP_ROUTES.login} variant="ghost">
            Login
          </Button>
          <Button href={APP_ROUTES.register}>Kayit Ol</Button>
        </div>
      </div>
    </header>
  );
}
