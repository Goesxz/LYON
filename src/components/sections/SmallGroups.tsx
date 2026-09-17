import { Reveal } from "../ui/Reveal";

export function SmallGroups() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/75" />

      <div className="container-editorial relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gold-300">
            Pequenos Grupos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-white">
            Você não precisa caminhar sozinho.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base md:text-lg leading-relaxed text-white/75">
            Nossos pequenos grupos são espaços de amizade genuína, cuidado e crescimento espiritual
            durante a semana, perto de onde você mora.
          </p>
          <a
            href="/conecte-se"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-ink-950 transition-colors duration-300 hover:bg-gold-400"
          >
            Encontre um grupo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
