import { siteConfig } from "../../data/site";
import { IconPin, IconClock, IconCalendarPlus } from "../ui/icons";
import { Reveal } from "../ui/Reveal";

export function NextService() {
  const { nextService, address } = siteConfig;

  return (
    <section className="relative z-10 -mt-10 md:-mt-14 px-4 md:px-0">
      <Reveal className="container-editorial">
        <div className="rounded-card bg-white shadow-[0_20px_60px_rgba(15,17,20,0.12)] px-6 py-7 md:px-10 md:py-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-gold-500">
                {nextService.label}
              </span>
              <p className="mt-2 font-display text-2xl md:text-3xl font-medium text-ink-950">
                {nextService.day}, {nextService.date}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600">
                <span className="inline-flex items-center gap-2">
                  <IconClock className="h-4 w-4 text-gold-500" /> {nextService.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconPin className="h-4 w-4 text-gold-500" /> {nextService.location}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-500 hover:text-ink-950"
              >
                Como chegar
              </a>
              <a
                href="#"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900/5"
              >
                <IconCalendarPlus className="h-4 w-4" /> Adicionar à agenda
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
