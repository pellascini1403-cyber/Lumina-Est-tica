import type { ReactNode } from "react";

type Tone = "champagne" | "rose" | "nude" | "beige" | "ink";

// Los valores de color viven en src/app/globals.css (tokens --art-*) para que
// quede todo centralizado ahí: cambiar la paleta no requiere tocar este archivo.
const toneStyles: Record<Tone, { base: string; blobA: string; blobB: string; ring: string }> = {
  champagne: {
    base: "from-[var(--art-champagne-from)] via-[var(--art-champagne-via)] to-[var(--art-champagne-to)]",
    blobA: "bg-[var(--art-champagne-blob-a)]",
    blobB: "bg-[var(--art-champagne-blob-b)]",
    ring: "ring-[var(--art-champagne-ring)]/40",
  },
  rose: {
    base: "from-[var(--art-rose-from)] via-[var(--art-rose-via)] to-[var(--art-rose-to)]",
    blobA: "bg-[var(--art-rose-blob-a)]",
    blobB: "bg-[var(--art-rose-blob-b)]",
    ring: "ring-[var(--art-rose-ring)]/40",
  },
  nude: {
    base: "from-[var(--art-nude-from)] via-[var(--art-nude-via)] to-[var(--art-nude-to)]",
    blobA: "bg-[var(--art-nude-blob-a)]",
    blobB: "bg-[var(--art-nude-blob-b)]",
    ring: "ring-[var(--art-nude-ring)]/40",
  },
  beige: {
    base: "from-[var(--art-beige-from)] via-[var(--art-beige-via)] to-[var(--art-beige-to)]",
    blobA: "bg-[var(--art-beige-blob-a)]",
    blobB: "bg-[var(--art-beige-blob-b)]",
    ring: "ring-[var(--art-beige-ring)]/40",
  },
  ink: {
    base: "from-[var(--art-ink-from)] via-[var(--art-ink-via)] to-[var(--art-ink-to)]",
    blobA: "bg-[var(--art-ink-blob-a)]",
    blobB: "bg-[var(--art-ink-blob-b)]",
    ring: "ring-[var(--art-ink-ring)]/20",
  },
};

type ArtPanelProps = {
  tone?: Tone;
  className?: string;
  label?: string;
  eyebrow?: string;
  icon?: ReactNode;
  rounded?: string;
  children?: ReactNode;
};

export function ArtPanel({
  tone = "champagne",
  className = "",
  label,
  eyebrow,
  icon,
  // Sin `rounded` explícito, el panel usa el radio de la marca activa
  // (--panel-radius en globals.css) — así Nova puede verse más recta que
  // Lumina sin que este componente sepa nada de marcas.
  rounded = "rounded-[var(--panel-radius)]",
  children,
}: ArtPanelProps) {
  const styles = toneStyles[tone];

  return (
    <div
      className={`relative overflow-hidden ${rounded} bg-gradient-to-br ${styles.base} ring-1 ${styles.ring} shadow-[var(--panel-shadow)] ${className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute -top-[18%] -right-[14%] h-[55%] w-[55%] rounded-full ${styles.blobA} opacity-[var(--panel-blob-opacity-a)] blur-3xl animate-blob`}
      />
      <div
        aria-hidden="true"
        className={`absolute -bottom-[22%] -left-[16%] h-[60%] w-[60%] rounded-full ${styles.blobB} opacity-[var(--panel-blob-opacity-b)] blur-3xl animate-blob-slow`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-overlay opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-[var(--panel-inner-radius)] border border-white/30"
      />

      {icon ? (
        <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-espresso backdrop-blur-sm sm:h-12 sm:w-12">
          {icon}
        </div>
      ) : null}

      {(label || eyebrow) && (
        <div className="absolute bottom-6 left-6 right-6">
          {eyebrow ? (
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink-soft/70">{eyebrow}</p>
          ) : null}
          {label ? (
            <p className="mt-1 font-display text-xl italic text-ink sm:text-2xl">{label}</p>
          ) : null}
        </div>
      )}

      {children}
    </div>
  );
}
