"use client";

import { Button } from "@/components/ui/button";

export default function UsersError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-shell py-8">
      <div className="panel rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Users Error</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white">Kullanici verisi yuklenemedi.</h1>
        <p className="mt-3 text-slate-300">Service katmanini veya API endpointlerini kontrol et.</p>
        <div className="mt-6">
          <Button onClick={reset}>Tekrar Dene</Button>
        </div>
      </div>
    </div>
  );
}
