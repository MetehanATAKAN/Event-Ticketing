import { SectionTitle } from "@/components/ui/section-title";

const items = [
  {
    title: "Kesif odakli ana sayfa",
    text: "Kampanyalar, one cikan etkinlikler ve sehir bazli oneriler tek bakista ulasilabilir halde.",
  },
  {
    title: "Temiz giris deneyimi",
    text: "Kullanici auth akisina uygun sade ama premium gorunen ekranlar ile devam etmek kolay.",
  },
  {
    title: "Admin paneline hazir sistem",
    text: "Ayni tasarim dili dashboard, etkinlik olusturma ve stok yonetimi sayfalarina tasinabilir.",
  },
];

export function PlatformHighlightsSection() {
  return (
    <section className="pb-20">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionTitle
          eyebrow="Platform"
          title="Ayrik frontend ve backend mimarisi icin uygun bir temel"
          description="Bu tasarim Next.js tarafinda routing, layout ve sayfa deneyimini one cikarirken; Node.js backend tarafina temiz bir entegrasyon alani birakir."
        />

        <div className="grid gap-4">
          {items.map((item) => (
            <article key={item.title} className="panel rounded-[1.5rem] p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
