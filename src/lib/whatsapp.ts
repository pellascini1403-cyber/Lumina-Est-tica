import { siteConfig } from "@/config/site";

export function buildWhatsappUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

export function whatsappGenericMessage() {
  return `Hola ${siteConfig.business.name}, quiero más información sobre sus tratamientos.`;
}

export function whatsappTreatmentMessage(treatmentName: string) {
  return `Hola ${siteConfig.business.name}, quiero consultar por el tratamiento "${treatmentName}".`;
}

export function whatsappBookingMessage(data: {
  name: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
}) {
  return [
    `Hola ${siteConfig.business.name}, quiero solicitar un turno.`,
    "",
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Tratamiento: ${data.treatment}`,
    `Fecha preferida: ${data.date}`,
    `Horario preferido: ${data.time}`,
  ].join("\n");
}
