interface PlaceholderPageProps {
  title: string;
  description: string;
}

/**
 * Página provisória para rotas ainda não desenvolvidas em detalhe.
 * Substitua por uma página completa quando o conteúdo estiver definido.
 */
export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="flex min-h-[70svh] items-center py-28 md:py-40">
      <div className="container-editorial max-w-2xl">
        <span className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gold-500">
          Em breve
        </span>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-ink-900">
          {title}
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-ink-600">{description}</p>
        <a
          href="/"
          className="mt-8 inline-flex min-h-[48px] items-center gap-2 border-b-2 border-ink-950 pb-1 text-sm md:text-base font-medium text-ink-950"
        >
          ← Voltar para a home
        </a>
      </div>
    </section>
  );
}
