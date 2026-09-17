import { siteConfig } from "../../data/site";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-editorial grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gold-500">
            Quem somos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-ink-900">
            Uma comunidade que vive fé, propósito e pertencimento.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-ink-600">
            {siteConfig.churchName} é uma igreja em {siteConfig.address.city} dedicada a criar um espaço
            genuíno de encontro com Deus e com pessoas. Cremos que fé se vive em comunidade — por isso,
            cada área da nossa igreja existe para acolher, discipular e enviar vidas com propósito.
          </p>
          <a
            href="/sobre"
            className="mt-8 inline-flex min-h-[48px] items-center gap-2 border-b-2 border-ink-950 pb-1 text-sm md:text-base font-medium text-ink-950 transition-colors hover:border-gold-500 hover:text-gold-500"
          >
            Conheça nossa história <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal delay={120} className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
          <img
            src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?q=80&w=1400&auto=format&fit=crop"
            alt="Comunidade da igreja reunida"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
