import { buildWhatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

type WhatsappBannerProps = {
  title: string;
  subtitle: string;
  message: string;
  buttonText?: string;
};

export function WhatsappBanner({
  title,
  subtitle,
  message,
  buttonText = "Hablar por WhatsApp",
}: WhatsappBannerProps) {
  return (
    <section className="bg-warm-white px-5 py-4 sm:px-8 lg:px-10">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 text-center sm:px-14 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-rose/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-champagne/15 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-4">
            <h3 className="font-display text-2xl text-balance text-warm-white sm:text-3xl">
              {title}
            </h3>
            <p className="text-balance text-sm leading-relaxed text-warm-white/70 sm:text-base">
              {subtitle}
            </p>
            <a
              href={buildWhatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_18px_35px_-15px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {buttonText}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
