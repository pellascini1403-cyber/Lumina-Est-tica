import { siteConfig } from "@/config/site";

// Colores de marca en formato hex plano, uno por cliente.
//
// Se usan SOLO en los assets generados con next/og (favicon, apple-icon y la
// imagen de Open Graph: src/app/icon.tsx, apple-icon.tsx, opengraph-image.tsx),
// porque ese renderer (Satori) no puede leer src/app/globals.css.
//
// El resto del sitio toma los colores directamente de las variables CSS
// definidas en globals.css ([data-brand="…"]). Si cambiás la paleta de una
// marca, actualizá los valores acá Y ahí para que favicon/OG queden
// coordinados con el sitio.
const palettes = {
  lumina: {
    ink: "#2a2420",
    inkSoft: "#4a413a",
    warmWhite: "#fbf7f2",
    accent: "#8a5b4a",
    logoGradientFrom: "#f3e6cc",
    logoGradientVia: "#e3b8ac",
    logoGradientTo: "#dfaa9a",
  },
  nova: {
    ink: "#17171a",
    inkSoft: "#55524d",
    warmWhite: "#ffffff",
    accent: "#a8532e",
    logoGradientFrom: "#f2efe9",
    logoGradientVia: "#ddd3c7",
    logoGradientTo: "#a8532e",
  },
} as const;

export const palette = palettes[siteConfig.theme.id];
