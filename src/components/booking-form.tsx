"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { buildWhatsappUrl, whatsappBookingMessage } from "@/lib/whatsapp";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

type FormState = {
  name: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  treatment: "",
  date: "",
  time: "",
};

const inputCls =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-soft/50 outline-none transition-colors duration-200 focus:border-ink";

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) next.name = "Ingresá tu nombre completo.";
    if (form.phone.trim().length < 6) next.phone = "Ingresá un teléfono válido.";
    if (!form.treatment) next.treatment = "Elegí un tratamiento.";
    if (!form.date) next.date = "Elegí una fecha.";
    if (!form.time) next.time = "Elegí un horario.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const formattedDate = new Date(`${form.date}T00:00:00`).toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    const message = whatsappBookingMessage({
      name: form.name.trim(),
      phone: form.phone.trim(),
      treatment: form.treatment,
      date: formattedDate,
      time: form.time,
    });

    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setForm(initialState);
    window.setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section id="reservar" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-rose/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-champagne/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-champagne">
              Reservá tu turno
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl leading-[1.15] text-balance text-warm-white sm:text-4xl md:text-5xl">
              Reservá tu turno
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md text-balance leading-relaxed text-warm-white/70">
              Completá tus datos y te confirmamos la disponibilidad por WhatsApp en minutos. Sin
              vueltas, sin esperas.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-4 flex flex-col gap-4 text-sm text-warm-white/70">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-champagne">
                <CheckIcon className="h-4 w-4" />
              </span>
              Confirmación rápida por WhatsApp
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-champagne">
                <CheckIcon className="h-4 w-4" />
              </span>
              Sin costo por reservar tu horario
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-champagne">
                <CheckIcon className="h-4 w-4" />
              </span>
              Podés reprogramar cuando lo necesites
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[1.75rem] bg-warm-white p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={`${inputCls} ${errors.name ? "border-rose-deep" : "border-ink/12"}`}
                />
                {errors.name ? <p className="mt-1 text-xs text-rose-deep">{errors.name}</p> : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="11 2233-4455"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={`${inputCls} ${errors.phone ? "border-rose-deep" : "border-ink/12"}`}
                />
                {errors.phone ? <p className="mt-1 text-xs text-rose-deep">{errors.phone}</p> : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="treatment" className="mb-1.5 block text-sm font-medium text-ink">
                  Tratamiento
                </label>
                <select
                  id="treatment"
                  value={form.treatment}
                  onChange={(e) => update("treatment", e.target.value)}
                  className={`${inputCls} ${errors.treatment ? "border-rose-deep" : "border-ink/12"}`}
                >
                  <option value="">Elegí un tratamiento</option>
                  {siteConfig.treatments.map((t) => (
                    <option key={t.slug} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                  <option value="Aún no lo sé, quiero asesoramiento">
                    Aún no lo sé, quiero asesoramiento
                  </option>
                </select>
                {errors.treatment ? (
                  <p className="mt-1 text-xs text-rose-deep">{errors.treatment}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-ink">
                  Fecha preferida
                </label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className={`${inputCls} ${errors.date ? "border-rose-deep" : "border-ink/12"}`}
                />
                {errors.date ? <p className="mt-1 text-xs text-rose-deep">{errors.date}</p> : null}
              </div>

              <div>
                <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-ink">
                  Horario preferido
                </label>
                <select
                  id="time"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className={`${inputCls} ${errors.time ? "border-rose-deep" : "border-ink/12"}`}
                >
                  <option value="">Elegí un horario</option>
                  {siteConfig.booking.timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time ? <p className="mt-1 text-xs text-rose-deep">{errors.time}</p> : null}
              </div>
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-warm-white transition-transform duration-300 hover:scale-[1.01] hover:bg-espresso"
            >
              Solicitar turno
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft/70">
              Al solicitar tu turno se abrirá WhatsApp con tus datos para confirmar disponibilidad.
            </p>

            {submitted ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-champagne/40 px-4 py-3 text-sm text-espresso">
                <CheckIcon className="h-4 w-4 shrink-0" />
                ¡Listo! Te abrimos WhatsApp para confirmar tu turno.
              </div>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
