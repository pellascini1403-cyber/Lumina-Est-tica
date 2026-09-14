"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { buildWhatsappUrl, whatsappGenericMessage } from "@/lib/whatsapp";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-warm-white/90 shadow-[0_1px_0_0_rgba(42,36,32,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#inicio" className="font-display text-2xl tracking-[0.08em] text-ink">
          {siteConfig.business.shortName}
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rose-deep after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#reservar"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium tracking-wide text-warm-white transition-transform duration-300 hover:scale-[1.03] hover:bg-espresso"
          >
            Reservar turno
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-beige lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-warm-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-5 sm:px-8">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-beige hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-5 pb-6 sm:px-8">
              <a
                href="#reservar"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-warm-white"
              >
                Reservar turno
              </a>
              <a
                href={buildWhatsappUrl(whatsappGenericMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium tracking-wide text-ink"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
