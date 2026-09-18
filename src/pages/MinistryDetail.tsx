import { useParams } from "react-router-dom";
import { getMinistryById, ministries } from "../data/ministries";
import { siteConfig } from "../data/site";
import { IconClock, IconPin } from "../components/ui/icons";
import { Reveal } from "../components/ui/Reveal";
import NotFound from "./NotFound";

export default function MinistryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const ministry = slug ? getMinistryById(slug) : undefined;

  if (!ministry) {
    return <NotFound />;
  }

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Olá! Tenho interesse em saber mais sobre o ministério de ${ministry.name}.`
  )}`;

  const otherMinistries = ministries.filter((m) => m.id !== ministry.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[56svh] min-h-[380px] w-full items-end overflow-hidden md:h-[64svh]">
        <img
          src={ministry.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
        <div className="container-editorial relative z-10 pb-12 md:pb-16">
          <a href="/ministerios" className="text-sm font-medium text-white/70 hover:text-white">
            ← Todos os ministérios
          </a>
          <h1 className="mt-3 font-display text-4xl font-medium text-white sm:text-5xl md:text-6xl">
            {ministry.name}
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 md:py-24">
        <div className="container-editorial grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          <Reveal className="md:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed text-ink-700">{ministry.description}</p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink-600 whitespace-pre-line">
              {ministry.fullDescription}
            </p>

            
            <a  href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink-950 px-7 py-3.5 text-sm md:text-base font-medium text-white transition-colors hover:bg-gold-500 hover:text-ink-950"
            >
              Quero fazer parte
            </a>
          </Reveal>

          <Reveal delay={100} className="md:col-span-1">
            <div className="rounded-card border border-ink-900/[0.08] bg-sand-50 p-6 md:p-7">
              <h2 className="font-display text-lg font-medium text-ink-900">Informações</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {ministry.leader && (
                  <div>
                    <dt className="text-ink-500 uppercase tracking-wide text-xs">Liderança</dt>
                    <dd className="mt-1 text-ink-900">{ministry.leader}</dd>
                  </div>
                )}
                {(ministry.meetingDay || ministry.meetingTime) && (
                  <div>
                    <dt className="text-ink-500 uppercase tracking-wide text-xs">Encontros</dt>
                    <dd className="mt-1 flex items-center gap-2 text-ink-900">
                      <IconClock className="h-4 w-4 text-gold-500 shrink-0" />
                      {[ministry.meetingDay, ministry.meetingTime].filter(Boolean).join(" · ")}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-ink-500 uppercase tracking-wide text-xs">Local</dt>
                  <dd className="mt-1 flex items-start gap-2 text-ink-900">
                    <IconPin className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                    {ministry.meetingLocation ?? siteConfig.address.street}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        {otherMinistries.length > 0 && (
          <div className="container-editorial mt-20 md:mt-28">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink-900">
              Outros ministérios
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {otherMinistries.map((m) => (
                
                <a  key={m.id}
                  href={`/ministerios/${m.id}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-card"
                >
                  <img
                    src={m.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-950/40" />
                  <span className="relative flex h-full items-end p-4 font-display text-lg font-medium text-white">
                    {m.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
