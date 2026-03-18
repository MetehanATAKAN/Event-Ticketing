import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginPanel() {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] items-center py-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <div className="inline-flex rounded-full border border-orange-300/20 bg-orange-300/8 px-4 py-2 text-sm text-orange-100">
            Hesabina gir ve siparislerini yonet
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Biletlerin, favorilerin ve gecmis siparislerin tek yerde.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              PulsePass hesabina giris yaptiginda satin alma akisini
              hizlandirabilir, kaydettigin etkinlikleri takip edebilir ve admin
              yetkin varsa yonetim paneline gecebilirsin.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="panel rounded-3xl p-5">
              <p className="text-sm text-slate-400">Hizli checkout</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">
                Tekrar bilgi girme
              </p>
            </div>
            <div className="panel rounded-3xl p-5">
              <p className="text-sm text-slate-400">Siparis takibi</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">
                QR ve durum takibi
              </p>
            </div>
            <div className="panel rounded-3xl p-5">
              <p className="text-sm text-slate-400">Admin erisimi</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">
                Rol bazli yonetim
              </p>
            </div>
          </div>
        </section>

        <section className="panel glow-ring rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(6,14,26,0.76)] p-6 sm:p-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
                Giris Yap
              </p>
              <h2 className="font-display text-3xl font-semibold text-white">
                Hesabina hos geldin
              </h2>
              <p className="text-sm leading-6 text-slate-400">
                Simdilik bu alan arayuz odakli hazirlandi. Sonraki adimda backend
                auth endpointlerine baglayabiliriz.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <Input
                label="E-posta"
                name="email"
                type="email"
                placeholder="ornek@mail.com"
              />
              <Input
                label="Sifre"
                name="password"
                type="password"
                placeholder="••••••••"
                hint="En az 8 karakterli sifre kullan."
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/12 bg-white/6" />
                  Beni hatirla
                </label>
                <Link href="/" className="text-sky-300 transition hover:text-sky-200">
                  Sifremi unuttum
                </Link>
              </div>

              <Button className="w-full justify-center">Giris Yap</Button>

              <div className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                Hesabin yok mu?{" "}
                <Link href="/register" className="font-semibold text-orange-300">
                  Simdi kayit ol
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
