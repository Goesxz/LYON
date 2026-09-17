import { siteConfig } from "../../data/site";
import { Reveal } from "../ui/Reveal";

export function Give() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-editorial">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-card bg-sand-100 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-medium text-ink-900">
              Dízimos e ofertas
            </h2>
            <p className="mt-2 max-w-lg text-sm md:text-base text-ink-600 leading-relaxed">
              {siteConfig.giving.description}
            </p>
          </div>
          <a
            href="/contribua"
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full border border-ink-900/15 bg-white px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
          >
            Saiba como contribuir
          </a>
        </Reveal>
      </div>
    </section>
  );
}
