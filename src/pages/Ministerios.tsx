import { ministries } from "../data/ministries";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MinistryCard } from "../components/cards/MinistryCard";
import { Reveal } from "../components/ui/Reveal";

export default function Ministerios() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow="Ministérios"
            title="Um lugar para cada fase da sua vida."
            description="Encontre onde você e sua família podem crescer, servir e se conectar. Toque em um ministério para saber mais."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {ministries.map((m, i) => (
            <Reveal key={m.id} delay={i * 70} className="w-full">
              <MinistryCard ministry={m} scrollWidth={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
