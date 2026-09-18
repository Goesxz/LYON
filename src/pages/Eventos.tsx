import { getUpcomingEvents } from "../data/events";
import { siteConfig } from "../data/site";
import { EventCard } from "../components/cards/EventCard";
import { Reveal } from "../components/ui/Reveal";
import { IconInstagram, IconWhatsapp } from "../components/ui/icons";

export default function Eventos() {
  const events = getUpcomingEvents();
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Quero saber mais sobre os próximos eventos da igreja."
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[42svh] min-h-[300px] w-full items-end overflow-hidden md:h-[48svh]">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/15" />

        <div className="container-editorial relative z-10 pb-10 md:pb-14">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">Eventos</li>
            </ol>
          </nav>
          <h1 className="mt-3 font-display text-4xl font-medium text-white sm:text-5xl md:text-6xl">
            Eventos
          </h1>
        </div>
      </section>

      {/* Grid de eventos */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          {events.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, i) => (
                <Reveal key={event.id} delay={i * 70}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-center text-ink-600">
              Nenhum evento programado no momento — volte em breve.
            </p>
          )}
        </div>
      </section>

      {/* Fique por dentro — substitui a newsletter, já que não temos backend de e-mail */}
      <section className="bg-ink-950 py-14 md:py-20">
        <div className="container-editorial flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white">
              Não perca nenhum evento.
            </h2>
            <p className="mt-2 max-w-md text-sm md:text-base text-white/65">
              Acompanhe nossas novidades pelo Instagram ou fale com a gente pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            
            <a  href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm md:text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              <IconInstagram className="h-5 w-5" /> Seguir no Instagram
            </a>
            
            <a  href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm md:text-base font-medium text-ink-950 transition-colors hover:bg-gold-400"
            >
              <IconWhatsapp className="h-5 w-5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}