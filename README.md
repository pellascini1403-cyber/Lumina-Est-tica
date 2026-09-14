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

Toda la información del negocio está centralizada en
`src/config/site.ts`: nombre, eslogan, WhatsApp, Instagram, dirección,
horarios, tratamientos con precios, testimonios, FAQ y galería. Para
convertir este sitio en el de otro centro de estética, alcanza con:

1. Editar `src/config/site.ts` con los datos del nuevo negocio.
2. Ajustar la paleta de colores en `src/app/globals.css` (bloque `:root`)
   si la nueva marca requiere otros tonos.
3. Reemplazar el número de WhatsApp (`contact.whatsappNumber`, formato
   internacional sin espacios ni `+`) — todos los botones y el formulario
   de reserva lo toman de ahí automáticamente.

## Notas de implementación

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
