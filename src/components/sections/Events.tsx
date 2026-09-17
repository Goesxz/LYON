import { getUpcomingEvents } from "../../data/events";
import { SectionHeading } from "../ui/SectionHeading";
import { EventCard } from "../cards/EventCard";
import { Reveal } from "../ui/Reveal";

export function Events() {
  const events = getUpcomingEvents();

  return (
    <section className="bg-sand-50 py-20 md:py-32">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow="Agenda"
            title="Próximos eventos"
            description="Momentos especiais para viver comunidade, aprender e celebrar juntos."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.id} delay={i * 90}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
