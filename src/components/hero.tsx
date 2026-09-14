import { siteConfig } from "@/config/site";
import { buildWhatsappUrl, whatsappGenericMessage } from "@/lib/whatsapp";
import { ArrowRightIcon, SparkleIcon, StarIcon, WhatsAppIcon } from "@/components/icons";
import { ArtPanel } from "@/components/art-panel";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const clientsStat = siteConfig.stats.find((s) => s.id === "clients");
  const recommendStat = siteConfig.stats.find((s) => s.id === "recommend");

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-warm-white to-warm-white pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-rose/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[24rem] w-[24rem] rounded-full bg-champagne/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-deep/25 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-rose-deep backdrop-blur-sm">
              <SparkleIcon className="h-3.5 w-3.5" />
              {siteConfig.business.categoryLabel} en {siteConfig.business.city}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl leading-[1.08] text-balance text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem]">
              {siteConfig.business.heroHeadline.line1}
              <br />
              <span className="italic text-rose-deep">
                {siteConfig.business.heroHeadline.accentLine}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-md text-balance text-lg leading-relaxed text-ink-soft">
              {siteConfig.business.subSlogan}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#reservar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-warm-white shadow-[0_18px_35px_-15px_rgba(42,36,32,0.5)] transition-transform duration-300 hover:scale-[1.02] hover:bg-espresso"
            >
              Reservar turno
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/50 px-7 py-3.5 text-sm font-medium tracking-wide text-ink backdrop-blur-sm transition-colors duration-300 hover:border-ink/30 hover:bg-white"
            >
              Ver tratamientos
            </a>
          </Reveal>

          <Reveal delay={0.32} className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-rose-deep">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm text-ink-soft">
              <span className="font-medium text-ink">{clientsStat?.value} clientas</span> confían
              en nosotras
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <ArtPanel
            tone="rose"
            eyebrow={siteConfig.business.heroVisual.eyebrow}
            label={siteConfig.business.heroVisual.label}
            icon={<SparkleIcon className="h-5 w-5" />}
            className="aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -left-4 hidden max-w-[13rem] rounded-2xl border border-ink/5 bg-white/90 p-4 shadow-[0_20px_40px_-20px_rgba(42,36,32,0.35)] backdrop-blur-sm sm:block">
            <p className="font-display text-2xl italic text-ink">{recommendStat?.value}</p>
            <p className="mt-0.5 text-xs leading-snug text-ink-soft">
              de nuestras clientas recomiendan {siteConfig.business.displayName}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal delay={0.1}>
          <a
            href={buildWhatsappUrl(whatsappGenericMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp-ink">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            ¿Tenés dudas? Escribinos por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
