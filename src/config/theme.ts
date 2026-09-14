// Colores de marca en formato hex plano.
//
// Se usan SOLO en los assets generados con next/og (favicon, apple-icon y la
// imagen de Open Graph: src/app/icon.tsx, apple-icon.tsx, opengraph-image.tsx),
// porque ese renderer (Satori) no puede leer src/app/globals.css.
//
// El resto del sitio toma los colores directamente de las variables CSS
// definidas en globals.css (:root). Si cambiás la paleta de marca, actualizá
// los valores acá Y ahí para que favicon/OG queden coordinados con el sitio.
export const palette = {
  ink: "#2a2420",
  inkSoft: "#4a413a",
  warmWhite: "#fbf7f2",
  // Acento usado en el eyebrow de la imagen de Open Graph.
  accent: "#8a5b4a",
  // Degradé de fondo del favicon, el apple-icon y la imagen de Open Graph.
  logoGradientFrom: "#f3e6cc",
  logoGradientVia: "#e3b8ac",
  logoGradientTo: "#dfaa9a",
} as const;
