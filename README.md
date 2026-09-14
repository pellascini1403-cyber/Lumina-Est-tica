# Lumina Estética

Sitio web premium para un centro de estética, construido con **Next.js (App
Router) + TypeScript + Tailwind CSS v4 + Framer Motion**. Pensado como base
reutilizable: todo el contenido del negocio vive en un único archivo de
configuración para poder transformar el sitio en el de otro centro de
estética cambiando texto y colores, sin tocar los componentes.

## Stack

- **Next.js 16** (App Router, Server Components por defecto)
- **TypeScript**
- **Tailwind CSS v4** (theming vía `@theme` en `globals.css`, sin `tailwind.config`)
- **Framer Motion** para micro-animaciones y reveals al hacer scroll

## Cómo correr el proyecto

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build de producción
npm run lint
```

## Reutilización para otro cliente

Para convertir este sitio en el de otro centro de estética, en el 99% de los
casos alcanza con tocar dos archivos de configuración (nada de contenido vive
hardcodeado dentro de los componentes):

1. **`src/config/site.ts`** — toda la información del negocio: nombre,
   eslogan, WhatsApp, teléfono, email, Instagram, dirección, horarios,
   tratamientos con precios, estadísticas, testimonios, FAQ, galería, textos
   de "Nosotros", franjas horarias del formulario de reserva, banners de
   WhatsApp, links del footer y datos de SEO (title, keywords).
2. **`src/app/globals.css`** (bloque `:root`) — la paleta de colores del
   sitio (marca + tokens de degradé del `ArtPanel`) y, si hace falta,
   **`src/config/theme.ts`** — los mismos colores en hex plano que usan el
   favicon, el apple-icon y la imagen de Open Graph (no pueden leer CSS, así
   que si cambiás la paleta hay que actualizarla en los dos lugares).

Después de editar esos archivos, reemplazá las imágenes/arte visual (ver
nota más abajo) y listo — no hace falta tocar ningún componente de
`src/components/`.

### Qué NO hace falta tocar

- Ningún componente en `src/components/` tiene texto de negocio hardcodeado:
  todos leen de `siteConfig`.
- Las categorías de tratamientos (`facial` / `corporal` / `depilacion` /
  `spa`) son parte del diseño del template (filtros de galería, íconos por
  categoría) y están pensadas para cualquier centro de estética. Sólo
  requieren tocar código si el nuevo negocio necesita categorías distintas.

## Notas de implementación

- **Colores**: viven en `src/app/globals.css` (`:root`) como variables CSS —
  paleta de marca, verde de WhatsApp y tokens de degradé del `ArtPanel`. Los
  componentes nunca tienen hex hardcodeado, siempre usan clases Tailwind
  (`bg-rose`, `bg-whatsapp`, etc.) o `var(--token)`. La única excepción son
  el favicon/apple-icon/OG image (`src/config/theme.ts`), porque ese
  renderer no puede leer archivos CSS.
- **Imágenes**: las áreas visuales (hero, tratamientos, galería, "nosotros",
  Instagram) usan un componente `ArtPanel` (`src/components/art-panel.tsx`)
  que genera composiciones abstractas con gradientes y textura, en vez de
  fotografías externas. Esto evita dependencias de CDNs de terceros, mantiene
  el sitio liviano y hace que sea trivial reemplazar cada panel por una
  fotografía real del cliente más adelante (mismo tamaño, mismo `rounded`).
- **Reserva de turnos**: el formulario (`src/components/booking-form.tsx`)
  valida los campos en el cliente y arma un mensaje prellenado que abre
  WhatsApp (`wa.me`) con los datos cargados — no requiere backend.
- **SEO**: metadata, Open Graph dinámico (`opengraph-image.tsx`), favicon,
  `robots.ts`, `sitemap.ts` y datos estructurados JSON-LD (`BeautySalon`)
  configurados en `src/app/layout.tsx`.
