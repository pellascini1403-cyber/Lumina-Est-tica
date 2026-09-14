"use client";

import { buildWhatsappUrl, whatsappGenericMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-ink/10 bg-warm-white/95 px-4 py-3 backdrop-blur-md sm:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href={buildWhatsappUrl(whatsappGenericMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-10px_rgba(37,211,102,0.7)]"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href="#reservar"
        className="flex flex-1 items-center justify-center rounded-full bg-ink py-3.5 text-sm font-medium tracking-wide text-warm-white"
      >
        Reservar turno
      </a>
    </div>
  );
}
