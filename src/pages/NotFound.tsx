export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center py-28">
      <span className="font-display text-6xl text-ink-900">404</span>
      <h1 className="mt-4 font-display text-2xl md:text-3xl font-medium text-ink-900">
        Página não encontrada
      </h1>
      <a
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-white"
      >
        Voltar para a home
      </a>
    </section>
  );
}
