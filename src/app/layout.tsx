import type { Metadata, Viewport } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.business.url),
  title: {
    default: `${siteConfig.business.name} | Tratamientos faciales y corporales`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.business.description,
  keywords: [
    "centro de estética",
    "tratamientos faciales",
    "tratamientos corporales",
    "depilación definitiva",
    "estética Buenos Aires",
    "limpieza facial",
  ],
  authors: [{ name: siteConfig.business.name }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.business.url,
    siteName: siteConfig.business.name,
    title: `${siteConfig.business.name} | Tratamientos faciales y corporales`,
    description: siteConfig.business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.business.name} | Tratamientos faciales y corporales`,
    description: siteConfig.business.description,
  },
  alternates: {
    canonical: siteConfig.business.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.business.name,
  description: siteConfig.business.description,
  image: `${siteConfig.business.url}/opengraph-image`,
  telephone: siteConfig.contact.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.addressLine1,
    addressLocality: siteConfig.business.city,
    addressCountry: "AR",
  },
  openingHoursSpecification: siteConfig.location.hours
    .filter((h) => h.time !== "Cerrado")
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.time.split(" – ")[0],
      closes: h.time.split(" – ")[1],
    })),
  sameAs: [siteConfig.contact.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${playfair.variable} ${jost.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-warm-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
