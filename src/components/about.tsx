import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { ArtPanel } from "@/components/art-panel";
import { LeafIcon, SparkleIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="nosotros" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <ArtPanel
                tone="beige"
                eyebrow="El espacio"
                label="Diseñado para vos"
                icon={<LeafIcon className="h-5 w-5" />}
                className="col-span-5 row-span-4 aspect-[4/5] sm:col-span-3"
              />
              <ArtPanel
                tone="nude"
                eyebrow="Equipo"
                label="Profesionales"
                icon={<SparkleIcon className="h-5 w-5" />}
                className="col-span-5 row-span-4 hidden aspect-square sm:col-span-2 sm:block"
              />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <SectionHeading
              eyebrow="Nosotros"
              title={siteConfig.about.title}
              align="left"
              subtitle={siteConfig.about.body}
            />

            <Reveal delay={0.1} className="grid grid-cols-3 gap-4 border-t border-ink/10 pt-8 sm:gap-6">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display text-2xl text-ink sm:text-3xl">{stat.value}</span>
                  <span className="text-xs leading-snug text-ink-soft sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
