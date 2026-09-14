import type { Treatment } from "@/config/site";
import { buildWhatsappUrl, whatsappTreatmentMessage } from "@/lib/whatsapp";
import { ArtPanel } from "@/components/art-panel";
import { DropletIcon, LeafIcon, SparkleIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const categoryTone = {
  facial: "champagne",
  corporal: "nude",
  depilacion: "rose",
  spa: "beige",
} as const;

const categoryIcon = {
  facial: <DropletIcon className="h-5 w-5" />,
  corporal: <LeafIcon className="h-5 w-5" />,
  depilacion: <SparkleIcon className="h-5 w-5" />,
  spa: <LeafIcon className="h-5 w-5" />,
} as const;

export function TreatmentCard({ treatment, delay = 0 }: { treatment: Treatment; delay?: number }) {
  return (
    <Reveal delay={delay} className="group h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-25px_rgba(42,36,32,0.35)]">
        <div className="p-3">
          <ArtPanel
            tone={categoryTone[treatment.category]}
            icon={categoryIcon[treatment.category]}
            rounded="rounded-[1.4rem]"
            className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl leading-snug text-ink">{treatment.name}</h3>
            <span className="whitespace-nowrap pt-1 text-sm font-medium text-rose-deep">
              {treatment.duration}
            </span>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-ink-soft">{treatment.description}</p>

          <div className="mt-2 flex items-center justify-between gap-3 border-t border-ink/8 pt-4">
            <span className="font-display text-lg text-ink">{treatment.price}</span>
            <a
              href={buildWhatsappUrl(whatsappTreatmentMessage(treatment.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-warm-white"
            >
              Consultar
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
