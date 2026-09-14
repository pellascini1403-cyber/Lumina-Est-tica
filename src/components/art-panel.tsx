import type { ReactNode } from "react";

type Tone = "champagne" | "rose" | "nude" | "beige" | "ink";

const toneStyles: Record<Tone, { base: string; blobA: string; blobB: string; ring: string }> = {
  champagne: {
    base: "from-[#f3e6cc] via-[#eddbb8] to-[#e3c99e]",
    blobA: "bg-[#fbf1de]",
    blobB: "bg-[#c9a877]",
    ring: "ring-[#d9c191]/40",
  },
  rose: {
    base: "from-[#f4e2da] via-[#eccabd] to-[#dfaa9a]",
    blobA: "bg-[#fbeee8]",
    blobB: "bg-[#c98f80]",
    ring: "ring-[#d9a291]/40",
  },
  nude: {
    base: "from-[#f0e5d6] via-[#e5d3ba] to-[#d5bd9c]",
    blobA: "bg-[#f8f0e3]",
    blobB: "bg-[#b89876]",
    ring: "ring-[#cdb28c]/40",
  },
  beige: {
    base: "from-[#f6f1e8] via-[#eee3d0] to-[#e0cfb2]",
    blobA: "bg-[#fdfaf4]",
    blobB: "bg-[#c3ab84]",
    ring: "ring-[#ddcba7]/40",
  },
  ink: {
    base: "from-[#3a332c] via-[#2a2420] to-[#1c1815]",
    blobA: "bg-[#6b5c4c]",
    blobB: "bg-[#c98f80]",
    ring: "ring-[#e6d2ba]/20",
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
  rounded = "rounded-[2rem]",
  children,
}: ArtPanelProps) {
  const styles = toneStyles[tone];

  return (
    <div
      className={`relative overflow-hidden ${rounded} bg-gradient-to-br ${styles.base} ring-1 ${styles.ring} shadow-[0_30px_60px_-25px_rgba(42,36,32,0.35)] ${className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute -top-[18%] -right-[14%] h-[55%] w-[55%] rounded-full ${styles.blobA} opacity-60 blur-3xl animate-blob`}
      />
      <div
        aria-hidden="true"
        className={`absolute -bottom-[22%] -left-[16%] h-[60%] w-[60%] rounded-full ${styles.blobB} opacity-40 blur-3xl animate-blob-slow`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-overlay opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div aria-hidden="true" className="absolute inset-4 rounded-[1.6rem] border border-white/30" />

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
