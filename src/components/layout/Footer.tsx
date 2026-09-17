import { navLinks, siteConfig } from "../../data/site";
import { SocialLinks } from "../social/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-medium">{siteConfig.churchShortName}</span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">{siteConfig.tagline}</p>
            <SocialLinks variant="light" className="mt-6" />
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-gold-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">Endereço &amp; horários</h3>
            <div className="mt-5 space-y-1 text-sm text-white/80 leading-relaxed">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.neighborhood} — {siteConfig.address.city}/{siteConfig.address.state}
              </p>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-white/80">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  {s.day} · {s.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.whatsappDisplay}</li>
              <li>{siteConfig.social.instagramHandle}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.churchName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/politica-de-privacidade" className="hover:text-white/80 transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:text-white/80 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
