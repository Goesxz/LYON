import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "../../data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-16 md:h-20 items-center justify-between">
        <a href="/" className="font-display text-lg md:text-xl font-medium tracking-tight text-ink-950">
          {siteConfig.churchShortName}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            
            <a  key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-800 transition-colors hover:text-gold-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          
          <a  href="/visite-nos"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink-950 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-gold-500 hover:text-ink-950"
          >
            Visite nossa igreja
          </a>
        </div>
      </div>
    </header>
  );
}