import { siteConfig } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { IconYoutube, IconInstagram } from "../ui/icons";

export function OnlineChurch() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-editorial grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1 relative aspect-video w-full overflow-hidden rounded-card">
          <img
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1400&auto=format&fit=crop"
            alt="Transmissão de culto online"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <a
            href={siteConfig.online.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Assistir ao culto ao vivo"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 hover:scale-105">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-ink-950" />
            </span>
          </a>
        </Reveal>

        <Reveal delay={100} className="order-1 md:order-2">
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gold-500">
            Cultos Online
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-ink-900">
            {siteConfig.online.title}
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-ink-600">
            {siteConfig.online.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.online.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink-950 px-6 py-3.5 text-sm md:text-base font-medium text-white transition-colors hover:bg-gold-500 hover:text-ink-950"
            >
              Assistir ao culto
            </a>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:bg-ink-900/5"
              >
                <IconYoutube />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:bg-ink-900/5"
              >
                <IconInstagram />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
