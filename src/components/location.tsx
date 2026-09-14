import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { ArtPanel } from "@/components/art-panel";
import { ArrowRightIcon, ClockIcon, MapPinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.location.mapsQuery
  )}`;

  return (
    <section id="contacto" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Ubicación" title="Encontranos" align="left" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.08}>
            <ArtPanel
              tone="nude"
              eyebrow={siteConfig.location.neighborhood}
              label={siteConfig.business.city}
              icon={<MapPinIcon className="h-5 w-5" />}
              className="aspect-[4/3] w-full sm:aspect-[16/10]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg viewBox="0 0 200 200" className="h-2/3 w-2/3 text-ink/15">
                  <g fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M10 60 H190" />
                    <path d="M10 110 H190" />
                    <path d="M60 10 V190" />
                    <path d="M130 10 V190" />
                    <path d="M10 140 H190" strokeDasharray="4 4" />
                  </g>
                </svg>
              </div>
            </ArtPanel>
          </Reveal>

          <Reveal delay={0.16} className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-rose-deep ring-1 ring-ink/5">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl text-ink">Dirección</p>
                <p className="mt-1 leading-relaxed text-ink-soft">
                  {siteConfig.location.addressLine1}
                  <br />
                  {siteConfig.location.addressLine2}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-rose-deep ring-1 ring-ink/5">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-display text-xl text-ink">Horarios</p>
                {siteConfig.location.hours.map((h) => (
                  <p key={h.days} className="flex justify-between gap-6 text-ink-soft">
                    <span>{h.days}</span>
                    <span className="text-ink">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-warm-white transition-transform duration-300 hover:scale-[1.02] hover:bg-espresso"
            >
              Cómo llegar
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
