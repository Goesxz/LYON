import { ministries } from "../../data/ministries";
import { SectionHeading } from "../ui/SectionHeading";
import { MinistryCard } from "../cards/MinistryCard";
import { Reveal } from "../ui/Reveal";

export function Ministries() {
  return (
    <section className="bg-sand-50 py-20 md:py-32">
      <div className="container-editorial">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Ministérios"
            title="Um lugar para cada fase da sua vida."
            description="Encontre onde você e sua família podem crescer, servir e se conectar."
          />
          <a
            href="/ministerios"
            className="hidden shrink-0 min-h-[48px] items-center border-b-2 border-ink-950 pb-1 text-sm font-medium text-ink-950 transition-colors hover:border-gold-500 hover:text-gold-500 sm:inline-flex"
          >
            Conheça nossos ministérios →
          </a>
        </Reveal>
      </div>

      <div className="container-editorial mt-10 md:mt-14">
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {ministries.map((m) => (
            <MinistryCard key={m.id} ministry={m} />
          ))}
        </div>
      </div>

      <div className="container-editorial mt-8 sm:hidden">
        <a
          href="/ministerios"
          className="inline-flex min-h-[48px] items-center border-b-2 border-ink-950 pb-1 text-sm font-medium text-ink-950"
        >
          Conheça nossos ministérios →
        </a>
      </div>
    </section>
  );
}
