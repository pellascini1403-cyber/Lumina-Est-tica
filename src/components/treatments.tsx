import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { TreatmentCard } from "@/components/treatment-card";

export function Treatments() {
  return (
    <section id="tratamientos" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Nuestros tratamientos"
          title="Tratamientos pensados para vos"
          subtitle="Elegimos cada tratamiento según tus objetivos, tu piel y tus necesidades."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.treatments.map((treatment, i) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
