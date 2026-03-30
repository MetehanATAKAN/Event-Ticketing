import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="panel max-w-xl rounded-[2rem] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white">
          Aradigin sayfa bulunamadi.
        </h1>
        <p className="mt-4 text-slate-300">Route degismis olabilir ya da link artik aktif degildir.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button href="/">Ana Sayfa</Button>
          <Link href="/dashboard" className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/85 hover:bg-white/6">
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
