import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegisterPanel() {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] items-center py-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <div className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/8 px-4 py-2 text-sm text-sky-100">
            Yeni hesap olustur ve etkinlik dunyasina katil
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Favorilerini kaydet, biletlerini yonet ve hizli satin al.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              PulsePass uyeligi ile etkinlik takibini kolaylastirabilir,
              siparis gecmisini gorebilir ve ileride admin rolune uygun giris
              akisini ayni sistem icinde kullanabilirsin.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="panel rounded-3xl p-5">
              <p className="text-sm text-slate-400">Favori etkinlikler</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">
                Tek dokunusla kaydet
              </p>
            </div>
            <div className="panel rounded-3xl p-5">
              <p className="text-sm text-slate-400">Hizli satin alma</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">
                Bilgilerini sakla
              </p>
            </div>
            <div className="panel rounded-3xl p-5">
              <p className="text-sm text-slate-400">Bildirim altyapisi</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">
                Duyurulara hazir
              </p>
            </div>
          </div>
        </section>

        <section className="panel glow-ring rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(6,14,26,0.76)] p-6 sm:p-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
                Kayit Ol
              </p>
              <h2 className="font-display text-3xl font-semibold text-white">
                PulsePass hesabini olustur
              </h2>
              <p className="text-sm leading-6 text-slate-400">
                Simdilik bu alan arayuz odakli. Sonraki adimda register endpointi
                ve form validasyonu ekleyebiliriz.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <Input
                label="Ad Soyad"
                name="fullName"
                type="text"
                placeholder="Melisa Kaya"
              />
              <Input
                label="E-posta"
                name="email"
                type="email"
                placeholder="ornek@mail.com"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Sifre"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  hint="En az 8 karakter."
                />
                <Input
                  label="Sifre Tekrar"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  hint="Ayni sifreyi tekrar gir."
                />
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-white/12 bg-white/6"
                />
                <span>
                  Kullanim kosullarini ve gizlilik politikasini okudum,
                  onayliyorum.
                </span>
              </label>

              <Button className="w-full justify-center">Hesap Olustur</Button>

              <div className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                Zaten hesabin var mi?{" "}
                <Link href="/login" className="font-semibold text-sky-300">
                  Giris yap
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
