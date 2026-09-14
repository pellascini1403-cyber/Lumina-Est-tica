import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { ArtPanel } from "@/components/art-panel";
import { DropletIcon, InstagramIcon, LeafIcon, SparkleIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const tones = ["champagne", "rose", "nude", "beige", "nude", "rose"] as const;
const icons = [
  <DropletIcon key="1" className="h-4 w-4" />,
  <LeafIcon key="2" className="h-4 w-4" />,
  <SparkleIcon key="3" className="h-4 w-4" />,
  <DropletIcon key="4" className="h-4 w-4" />,
  <LeafIcon key="5" className="h-4 w-4" />,
  <SparkleIcon key="6" className="h-4 w-4" />,
];

export function InstagramSection() {
  return (
    <section className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Instagram"
          title="Más inspiración en Instagram"
          subtitle={siteConfig.contact.instagramHandle}
        />

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
          {tones.map((tone, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <ArtPanel
                  tone={tone}
                  icon={icons[i]}
                  rounded="rounded-xl"
                  className="aspect-square w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-warm-white"
          >
            <InstagramIcon className="h-4 w-4" />
            Seguir en Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
