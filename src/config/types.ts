// Tipos compartidos por todas las configuraciones de cliente
// (src/config/clients/*.ts). Un cliente nuevo reutiliza estos mismos tipos.

export type Treatment = {
  slug: string;
  name: string;
  description: string;
  price: string;
  priceValue: number | null;
  category: "facial" | "corporal" | "depilacion" | "spa";
  duration: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  treatment: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "facial" | "corporal" | "depilacion" | "spa";
  tone: "champagne" | "rose" | "nude" | "beige";
};

export type Stat = {
  // Id estable usado para referenciar una estadística puntual desde otras
  // secciones (por ejemplo el hero) sin repetir el número a mano.
  id: "experience" | "clients" | "recommend";
  value: string;
  label: string;
};

export type WhatsappCta = {
  title: string;
  subtitle: string;
  message: string;
  buttonText?: string;
};

// Id de marca. Controla qué bloque de colores (globals.css, atributo
// data-brand) y qué paleta hex plana (theme.ts) usa el sitio.
export type BrandId = "lumina" | "nova";
