"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { ChevronDownIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />

        <div className="mt-12 flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={(index % 6) * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-lg text-ink sm:text-xl">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 leading-relaxed text-ink-soft">{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
