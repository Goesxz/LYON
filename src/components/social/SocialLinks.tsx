import { siteConfig } from "../../data/site";
import { IconInstagram, IconYoutube, IconWhatsapp } from "../ui/icons";

interface SocialLinksProps {
  variant?: "light" | "dark";
  className?: string;
}

export function SocialLinks({ variant = "dark", className = "" }: SocialLinksProps) {
  const color = variant === "light" ? "text-white/80 hover:text-white" : "text-ink-700 hover:text-ink-950";

  const links = [
    { href: siteConfig.social.instagram, label: "Instagram", Icon: IconInstagram },
    { href: siteConfig.social.youtube, label: "YouTube", Icon: IconYoutube },
    {
      href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`,
      label: "WhatsApp",
      Icon: IconWhatsapp,
    },
    // Links vazios (ex: rede social que a igreja ainda não usa) são filtrados
    // automaticamente, então nenhum botão quebrado aparece no site.
  ].filter((link) => link.href && !link.href.startsWith("["));

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition-colors duration-200 ${color}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
