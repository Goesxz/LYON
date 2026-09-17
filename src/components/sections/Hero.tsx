import { siteConfig } from "../../data/site";

export function Hero() {
  return (
    <section className="relative flex h-[92svh] min-h-[560px] w-full items-end overflow-hidden md:h-[94svh]">
      <img
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2400&auto=format&fit=crop"
        alt="Comunidade reunida em um momento de culto"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/10" />

      <div className="container-editorial relative z-10 pb-14 md:pb-20">
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gold-300">
          {siteConfig.churchName}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.tagline}
        </h1>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/sobre"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-ink-950 transition-colors duration-300 hover:bg-gold-400"
          >
            Conheça nossa igreja
          </a>
          <a
            href="/visite-nos"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-sm md:text-base font-medium text-white transition-colors duration-300 hover:bg-white/10 hover:border-white"
          >
            Venha nos visitar
          </a>
        </div>
      </div>
    </section>
  );
}
