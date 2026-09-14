import { siteConfig } from "@/config/site";
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
      <WhatsappBanner {...siteConfig.ctas.chooseTreatment} />
      <About />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Faq />
      <WhatsappBanner {...siteConfig.ctas.finalPush} />
      <Location />
      <InstagramSection />
    </>
  );
}
