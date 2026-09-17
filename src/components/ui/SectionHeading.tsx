interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const textColor = light ? "text-white" : "text-ink-900";
  const descColor = light ? "text-white/70" : "text-ink-600";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs md:text-sm font-medium tracking-[0.18em] uppercase ${
            light ? "text-gold-300" : "text-gold-500"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] ${textColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
