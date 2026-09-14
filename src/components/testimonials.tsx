import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { StarIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestras clientas" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={(i % 4) * 0.08} className="h-full">
              <figure className="flex h-full flex-col gap-5 rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-[0_25px_45px_-25px_rgba(42,36,32,0.3)]">
                <div className="flex items-center gap-1 text-rose-deep">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <StarIcon key={idx} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="flex-1 text-balance text-[0.95rem] leading-relaxed text-ink-soft">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="border-t border-ink/8 pt-4">
                  <p className="font-display text-lg text-ink">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-soft/70">
                    {testimonial.treatment}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
