import type { Ministry } from "../../data/ministries";

export function MinistryCard({ ministry }: { ministry: Ministry }) {
  return (
    <a
      href={`/ministerios#${ministry.id}`}
      className="group relative flex-shrink-0 w-[78vw] xs:w-[70vw] sm:w-auto aspect-[3/4] overflow-hidden rounded-card bg-ink-900 snap-start"
    >
      <img
        src={ministry.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
        <h3 className="font-display text-xl md:text-2xl text-white font-medium">{ministry.name}</h3>
        <p className="mt-2 text-sm text-white/75 leading-relaxed line-clamp-3">{ministry.description}</p>
      </div>
    </a>
  );
}
