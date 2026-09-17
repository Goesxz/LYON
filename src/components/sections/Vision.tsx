import { Reveal } from "../ui/Reveal";

const pillars = [
  {
    label: "Nossa visão",
    text: "Ser uma igreja que revela a presença de Deus em cada geração.",
  },
  {
    label: "Nossa missão",
    text: "Acolher pessoas, formar discípulos e enviar vidas com propósito.",
  },
  {
    label: "Nossos valores",
    text: "Fé genuína, comunidade real, excelência e serviço ao próximo.",
  },
];

export function Vision() {
  return (
    <section className="bg-ink-950 py-20 md:py-32">
      <div className="container-editorial">
        <Reveal>
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gold-300">
            Propósito
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 100} className="border-t border-white/15 pt-6">
              <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">{p.label}</h3>
              <p className="mt-4 font-display text-2xl md:text-3xl font-medium leading-snug text-white">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
