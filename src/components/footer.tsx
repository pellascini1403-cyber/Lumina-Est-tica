import { siteConfig } from "@/config/site";
import { buildWhatsappUrl, whatsappGenericMessage } from "@/lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-warm-white/70 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
            <p className="font-display text-2xl tracking-[0.08em] text-warm-white">
              {siteConfig.business.name.toUpperCase()}
            </p>
            <p className="font-display text-lg italic text-champagne">
              &ldquo;{siteConfig.business.slogan}&rdquo;
            </p>
            <p className="max-w-sm text-sm leading-relaxed">
              Tratamientos faciales, corporales, depilación y bienestar en{" "}
              {siteConfig.business.city}. Reservá tu turno y viví la experiencia{" "}
              {siteConfig.business.displayName}.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-warm-white">
              Navegación
            </p>
            {siteConfig.footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-warm-white/70 transition-colors hover:text-warm-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-warm-white">
              Seguinos
            </p>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-sm text-warm-white/70 transition-colors hover:text-warm-white"
            >
              <InstagramIcon className="h-4 w-4" />
              {siteConfig.contact.instagramHandle}
            </a>
            <a
              href={buildWhatsappUrl(whatsappGenericMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-sm text-warm-white/70 transition-colors hover:text-warm-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {siteConfig.contact.whatsappDisplay}
            </a>
            <p className="text-sm text-warm-white/70">{siteConfig.location.addressLine1}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-warm-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.business.name}. Todos los derechos
            reservados.
          </p>
          <p>
            {siteConfig.business.legalNote ? `${siteConfig.business.legalNote} · ` : ""}
            {siteConfig.business.city}, {siteConfig.business.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
