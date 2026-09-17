import type { ChurchEvent } from "../../data/events";

export function EventCard({ event }: { event: ChurchEvent }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-white border border-ink-900/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gold-500">
          {event.date} · {event.time}
        </p>
        <h3 className="mt-2 font-display text-xl text-ink-900 font-medium leading-snug">{event.name}</h3>
        <p className="mt-2 text-sm text-ink-600">{event.location}</p>
        <p className="mt-3 text-sm text-ink-600 leading-relaxed line-clamp-2">{event.description}</p>
        <a
          href={event.link ?? "#"}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-950 underline decoration-gold-400 decoration-2 underline-offset-4 min-h-[44px]"
        >
          Saiba mais <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
