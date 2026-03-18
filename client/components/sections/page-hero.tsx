import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/",
  primaryLabel = "Ana Sayfaya Don",
}: PageHeroProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-shell">
        <div className="panel max-w-3xl rounded-[2rem] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
          <div className="mt-8">
            <Button href={primaryHref}>{primaryLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
