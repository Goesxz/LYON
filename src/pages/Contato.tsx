import { useState, type FormEvent } from "react";
import { siteConfig } from "../data/site";
import { Reveal } from "../components/ui/Reveal";
import { IconPhone, IconClock, IconMail } from "../components/ui/icons";

/**
 * Página de Contato.
 *
 * O site não tem backend, então este formulário não "salva" os dados em
 * lugar nenhum — em vez disso, ao enviar, ele monta uma mensagem de
 * WhatsApp com o que a pessoa preencheu e abre o WhatsApp já com o texto
 * pronto. Isso garante que a mensagem realmente chega até a igreja, sem
 * precisar de servidor, banco de dados ou serviço de e-mail externo.
 */
export default function Contato() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      "Olá! Vim pelo site e gostaria de falar com vocês.",
      "",
      `Nome: ${name || "-"}`,
      `Telefone: ${phone || "-"}`,
      email ? `E-mail: ${email}` : null,
      "",
      `Mensagem: ${message || "-"}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="py-28 md:py-36">
      <div className="container-editorial">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gold-500">
              Fale com a gente
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-medium text-ink-900">
              Contato
            </h1>
          </div>
          <p className="max-w-sm text-sm md:text-base text-ink-600 leading-relaxed">
            Preencha o formulário — ao enviar, você abre uma conversa direto no WhatsApp com a gente.
          </p>
        </Reveal>

        {/* Formulário + imagem */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-5 md:gap-8">
          <Reveal className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-card border border-ink-900/[0.07] bg-white p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink-800">Nome</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="min-h-[48px] rounded-lg border border-ink-900/15 bg-sand-50 px-4 text-ink-900 placeholder:text-ink-400 focus:border-gold-500 focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink-800">Telefone / WhatsApp</span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="min-h-[48px] rounded-lg border border-ink-900/15 bg-sand-50 px-4 text-ink-900 placeholder:text-ink-400 focus:border-gold-500 focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                  <span className="font-medium text-ink-800">E-mail (opcional)</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@exemplo.com"
                    className="min-h-[48px] rounded-lg border border-ink-900/15 bg-sand-50 px-4 text-ink-900 placeholder:text-ink-400 focus:border-gold-500 focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                  <span className="font-medium text-ink-800">Mensagem</span>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Como podemos te ajudar?"
                    className="rounded-lg border border-ink-900/15 bg-sand-50 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-gold-500 focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-sm md:text-base font-medium text-white transition-colors hover:bg-gold-500 hover:text-ink-950"
              >
                Enviar mensagem <span aria-hidden="true">→</span>
              </button>
            </form>
          </Reveal>

          <Reveal delay={100} className="md:col-span-2">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-card">
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200&auto=format&fit=crop"
                alt="Comunidade da Lyon Church reunida"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Canais de contato */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-ink-900/[0.08] pt-12 text-center sm:grid-cols-3 md:mt-20">
          <div className="flex flex-col items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-ink-900">
              <IconPhone />
            </span>
            <h3 className="font-display text-lg font-medium text-ink-900">Ligue ou chame no WhatsApp</h3>
            <p className="text-sm text-ink-600">{siteConfig.contact.phone}</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-ink-900">
              <IconClock />
            </span>
            <h3 className="font-display text-lg font-medium text-ink-900">Horário de atendimento</h3>
            <p className="text-sm text-ink-600">{siteConfig.contact.hours}</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-ink-900">
              <IconMail />
            </span>
            <h3 className="font-display text-lg font-medium text-ink-900">Escreva pra gente</h3>
            <p className="text-sm text-ink-600">{siteConfig.contact.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
