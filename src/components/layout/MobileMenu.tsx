import { useEffect } from "react";
import { navLinks, siteConfig } from "../../data/site";
import { IconClose } from "../ui/icons";
import { SocialLinks } from "../social/SocialLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Trava o scroll do body enquanto o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fecha com a tecla Esc (acessibilidade / navegação por teclado)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-[2px]" onClick={onClose} />

      <div
        className={`absolute inset-y-0 right-0 flex h-full w-[86%] max-w-sm flex-col bg-cream px-6 pt-6 pb-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-medium text-ink-950">{siteConfig.churchShortName}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-900/5"
          >
            <IconClose />
          </button>
        </div>

        <nav className="mt-10 flex flex-1 flex-col gap-1" aria-label="Navegação principal">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="border-b border-ink-900/[0.06] py-4 font-display text-2xl text-ink-900 transition-colors hover:text-gold-500"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contato"
          onClick={onClose}
          className="min-h-[48px] inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3.5 text-center font-medium text-white transition-colors hover:bg-gold-500 hover:text-ink-950"
        >
          Visite nossa igreja
        </a>

        <SocialLinks className="mt-6 justify-center" />
      </div>
    </div>
  );
}
