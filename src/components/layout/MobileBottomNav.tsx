import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconHome, IconUsers, IconCalendarDots, IconPin, IconDots } from "../ui/icons";
import { MobileMenu } from "./MobileMenu";

/**
 * Barra de navegação fixa no rodapé, visível apenas no mobile (md:hidden).
 * Os 4 destinos mais buscados ficam sempre um toque de distância; o resto
 * do menu (Sobre, Cultos, Conecte-se, Contribua) abre pelo botão "Mais".
 *
 * O item da rota atual aparece "elevado" dentro de um círculo, com o ícone
 * preenchido e o rótulo em negrito — mesma linguagem visual de apps como
 * bancos digitais, só que aplicada à navegação da igreja.
 */

const primaryItems = [
  { label: "Home", href: "/", Icon: IconHome, end: true },
  { label: "Ministérios", href: "/ministerios", Icon: IconUsers, end: false },
  { label: "Eventos", href: "/eventos", Icon: IconCalendarDots, end: false },
  { label: "Visite-nos", href: "/visite-nos", Icon: IconPin, end: false },
] as const;

// Rotas que vivem "dentro" do menu Mais — usado só para destacar o botão
// Mais quando o visitante está em uma dessas páginas.
const moreRoutes = ["/sobre", "/cultos", "/conecte-se", "/contribua"];

export function MobileBottomNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isOnMoreRoute = moreRoutes.some((route) => pathname.startsWith(route));

  return (
    <>
      <nav
        aria-label="Navegação principal (mobile)"
        className="fixed inset-x-0 bottom-0 z-40 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-3 mb-3 flex items-center justify-between rounded-[28px] bg-white/95 px-2 py-2 shadow-[0_8px_30px_rgba(15,17,20,0.18)] backdrop-blur-md">
          {primaryItems.map(({ label, href, Icon, end }) => (
            <NavLink
              key={href}
              to={href}
              end={end}
              className="relative flex flex-1 flex-col items-center gap-1 py-1.5 min-h-[48px] justify-center"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive ? "-translate-y-4 bg-ink-950 text-white shadow-[0_8px_16px_rgba(15,17,20,0.28)]" : "text-ink-500"
                    }`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <span
                    className={`text-[11px] leading-none transition-all duration-300 ${
                      isActive ? "-translate-y-3 font-semibold text-ink-950" : "text-ink-500"
                    }`}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir mais opções do menu"
            aria-haspopup="dialog"
            className="relative flex flex-1 flex-col items-center gap-1 py-1.5 min-h-[48px] justify-center"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                isOnMoreRoute ? "-translate-y-4 bg-ink-950 text-white shadow-[0_8px_16px_rgba(15,17,20,0.28)]" : "text-ink-500"
              }`}
            >
              <IconDots className="h-[22px] w-[22px]" />
            </span>
            <span
              className={`text-[11px] leading-none transition-all duration-300 ${
                isOnMoreRoute ? "-translate-y-3 font-semibold text-ink-950" : "text-ink-500"
              }`}
            >
              Mais
            </span>
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
