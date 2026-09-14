"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, type GalleryItem } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { ArtPanel } from "@/components/art-panel";
import { DropletIcon, LeafIcon, SparkleIcon } from "@/components/icons";

// Orden canónico de categorías: se muestran solo las que existen en
// siteConfig.gallery, en este orden. Así un cliente que no ofrece, por
// ejemplo, tratamientos corporales, simplemente no ve ese filtro.
const categoryOrder: GalleryItem["category"][] = ["facial", "corporal", "depilacion", "spa"];
const categoryLabels: Record<GalleryItem["category"], string> = {
  facial: "Facial",
  corporal: "Corporal",
  depilacion: "Depilación",
  spa: "Spa",
};

const categoryIcon: Record<GalleryItem["category"], React.ReactNode> = {
  facial: <DropletIcon className="h-5 w-5" />,
  corporal: <LeafIcon className="h-5 w-5" />,
  depilacion: <SparkleIcon className="h-5 w-5" />,
  spa: <LeafIcon className="h-5 w-5" />,
};

export function Gallery() {
  const presentCategories = categoryOrder.filter((category) =>
    siteConfig.gallery.some((item) => item.category === category)
  );
  const filters: { label: string; value: GalleryItem["category"] | "todos" }[] = [
    { label: "Todos", value: "todos" },
    ...presentCategories.map((category) => ({ label: categoryLabels[category], value: category })),
  ];

  const [active, setActive] = useState<(typeof filters)[number]["value"]>("todos");

  const items = siteConfig.gallery.filter((item) => active === "todos" || item.category === active);

  return (
    <section id="resultados" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Resultados"
          title="Resultados que hablan por sí solos"
          subtitle={`Una muestra de los tratamientos y protocolos que realizamos cada semana en ${siteConfig.business.displayName}.`}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((filter) => {
            const isActive = active === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActive(filter.value)}
                className={`rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "border-ink bg-ink text-warm-white"
                    : "border-ink/15 text-ink-soft hover:border-ink/40 hover:text-ink"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
        >
          {items.map((item, i) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="group"
            >
              <ArtPanel
                tone={item.tone}
                eyebrow={item.category}
                label={item.title}
                icon={categoryIcon[item.category]}
                rounded="rounded-2xl"
                className="aspect-square w-full cursor-pointer transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-[0.98]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
