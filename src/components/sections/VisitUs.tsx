import { siteConfig } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { LocationCard } from "../cards/LocationCard";
import { IconPin, IconClock, IconWhatsapp } from "../ui/icons";
import { SocialLinks } from "../social/SocialLinks";

export function VisitUs() {
  const { address, services, contact } = siteConfig;

  return (
    <section id="visite-nos" className="bg-ink-950 py-20 md:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-2xl">
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gold-300">
            Visite-nos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-white">
            Esperamos por você.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
            Chegue sem pressa. Não importa onde você esteja na sua caminhada de fé — há um lugar
            preparado para você aqui.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3">
          <Reveal>
            <LocationCard
              icon={<IconPin />}
              title="Endereço"
              lines={[address.street, `${address.neighborhood} — ${address.city}/${address.state}`, address.zip]}
            />
          </Reveal>
          <Reveal delay={90}>
            <LocationCard
              icon={<IconClock />}
              title="Horários dos cultos"
              lines={services.map((s) => `${s.day} · ${s.time}`)}
            />
          </Reveal>
          <Reveal delay={180}>
            <LocationCard
              icon={<IconWhatsapp />}
              title="Fale conosco"
              lines={[contact.whatsappDisplay, contact.email]}
            />
          </Reveal>
        </div>

        <Reveal delay={220} className="mt-10 overflow-hidden rounded-card">
          <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
            <iframe
              title="Mapa de localização da igreja"
              src={address.mapsEmbedUrl}
              className="h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm md:text-base font-medium text-ink-950 transition-colors hover:bg-gold-400"
          >
            Como chegar
          </a>
          <SocialLinks variant="light" />
        </div>
      </div>
    </section>
  );
}
