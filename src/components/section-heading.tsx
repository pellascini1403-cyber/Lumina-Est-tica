import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      {eyebrow ? (
        <span
          className={`text-xs font-medium uppercase tracking-[0.3em] ${
            tone === "dark" ? "text-champagne" : "text-rose-deep"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-3xl leading-[1.15] text-balance sm:text-4xl md:text-5xl ${
          tone === "dark" ? "text-warm-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-balance text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-warm-white/75" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
