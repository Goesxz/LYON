import type { ReactNode } from "react";

interface LocationCardProps {
  icon: ReactNode;
  title: string;
  lines: string[];
}

export function LocationCard({ icon, title, lines }: LocationCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-card border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
      <div className="text-gold-300" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-display text-lg text-white font-medium">{title}</h3>
      <div className="text-sm text-white/70 leading-relaxed space-y-0.5">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
