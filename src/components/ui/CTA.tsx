import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm md:text-base font-medium tracking-wide transition-all duration-300 ease-out min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-ink-950 text-white hover:bg-gold-500 hover:text-ink-950",
  secondary: "bg-white text-ink-950 hover:bg-sand-100",
  ghost: "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white",
};

interface CTALinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

/** CTA como link (navegação/âncora/link externo). */
export function CTA({ variant = "primary", className = "", children, ...props }: CTALinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

/** CTA como botão real (ação, não navegação) — importante para acessibilidade. */
export function CTAButton({ variant = "primary", className = "", children, ...props }: CTAButtonProps) {
  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
