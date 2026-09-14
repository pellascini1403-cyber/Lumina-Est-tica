import { Hero } from "@/components/hero";
import { Treatments } from "@/components/treatments";
import { WhatsappBanner } from "@/components/whatsapp-banner";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { BookingForm } from "@/components/booking-form";
import { Faq } from "@/components/faq";
import { Location } from "@/components/location";
import { InstagramSection } from "@/components/instagram-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Treatments />
      <WhatsappBanner
        title="¿No sabés qué tratamiento elegir?"
        subtitle="Contanos qué estás buscando y te recomendamos la mejor opción para vos."
        message="Hola Lumina Estética, no estoy segura de qué tratamiento elegir. ¿Me pueden ayudar a encontrar el ideal para mí?"
      />
      <About />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Faq />
      <WhatsappBanner
        title="Tu próximo turno está a un mensaje de distancia"
        subtitle="Escribinos ahora y coordinamos el día y horario que mejor te quede."
        message="Hola Lumina Estética, quiero coordinar un turno."
        buttonText="Coordinar por WhatsApp"
      />
      <Location />
      <InstagramSection />
    </>
  );
}
