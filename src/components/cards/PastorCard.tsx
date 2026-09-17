import type { Pastor } from "../../data/pastors";

export function PastorCard({ pastor }: { pastor: Pastor }) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-ink-100">
        <img
          src={pastor.photo}
          alt={`Fotografia de ${pastor.name}`}
          loading="lazy"
          className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5">
        <h3 className="font-display text-xl md:text-2xl text-ink-900 font-medium">{pastor.name}</h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-500">{pastor.role}</p>
        <p className="mt-3 text-sm md:text-base text-ink-600 leading-relaxed">{pastor.bio}</p>
      </div>
    </div>
  );
}
