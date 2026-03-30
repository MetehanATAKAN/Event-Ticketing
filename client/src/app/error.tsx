"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="panel max-w-xl rounded-[2rem] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Sistem Hatasi</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white">
          Uygulama beklenmeyen bir hata ile karsilasti.
        </h1>
        <p className="mt-4 text-slate-300">Yeniden deneyebilirsin; sorun devam ederse console kaydini kontrol et.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button onClick={reset}>Tekrar Dene</Button>
          <Button href="/" variant="secondary">Ana Sayfa</Button>
        </div>
      </div>
    </main>
  );
}
