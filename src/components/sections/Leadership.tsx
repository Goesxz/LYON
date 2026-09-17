import { pastors } from "../../data/pastors";
import { SectionHeading } from "../ui/SectionHeading";
import { PastorCard } from "../cards/PastorCard";
import { Reveal } from "../ui/Reveal";

export function Leadership() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow="Liderança"
            title="Pessoas que caminham à frente com você."
            description="Uma liderança acessível, comprometida em servir a igreja com integridade e cuidado pastoral."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
          {pastors.map((pastor, i) => (
            <Reveal key={pastor.id} delay={i * 90}>
              <PastorCard pastor={pastor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
