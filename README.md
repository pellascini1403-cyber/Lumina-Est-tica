# Plantilla de sitios para centros de estética

Base reutilizable de sitios web premium para centros de estética / beauty
studios, construida con **Next.js (App Router) + TypeScript + Tailwind CSS
v4 + Framer Motion**. Un mismo código sirve **más de un cliente**: cada
negocio tiene su propia configuración de contenido y su propia identidad
visual (colores, tipografía, forma de las tarjetas), eligiéndose en tiempo
de build con una variable de entorno. Los componentes son 100% genéricos:
no tienen texto ni colores de ningún cliente hardcodeados.

Clientes incluidos hoy:

- **Lumina Estética** — centro de estética cálido/spa (default).
- **Nova Beauty Studio** — beauty studio boutique minimalista (cejas,
  pestañas, piel).

## Stack

- **Next.js 16** (App Router, Server Components por defecto)
- **TypeScript**
- **Tailwind CSS v4** (theming vía `@theme` en `globals.css`, sin `tailwind.config`)
- **Framer Motion** para micro-animaciones y reveals al hacer scroll

## Cómo correr el proyecto

```bash
npm install

# Lumina (cliente por defecto, no necesita variable de entorno)
npm run dev            # http://localhost:3000
npm run build
npm run start

# Nova
npm run dev:nova
npm run build:nova
npm run start:nova

npm run lint
```

`dev:nova` / `build:nova` / `start:nova` son atajos de
`NEXT_PUBLIC_SITE_ID=nova next <comando>` (ver `package.json`). En producción,
cada cliente se despliega como un proyecto separado (branch o repo aparte)
con esa variable de entorno seteada — es lo mismo build, apuntando a datos y
colores distintos.

## Arquitectura multi-cliente

```
src/config/
  types.ts                 tipos compartidos (Treatment, Testimonial, FaqItem, …)
  clients/
    lumina.ts               contenido + identidad de Lumina
    nova.ts                 contenido + identidad de Nova
  site.ts                   resolver: elige el cliente según NEXT_PUBLIC_SITE_ID
  theme.ts                  paleta hex por cliente (solo para favicon/OG image)
src/app/globals.css         colores del sitio, con overrides por marca vía
                             [data-brand="nova"] (ver siteConfig.theme.id)
```

Ningún componente importa `clients/lumina.ts` ni `clients/nova.ts`
directamente: todos siguen haciendo `import { siteConfig } from
"@/config/site"` como antes. `site.ts` es el único que sabe que existe más
de un cliente — el resto del código no lo necesita saber.

### Cómo se resuelve la identidad visual

- **Contenido** (textos, precios, testimonios, etc.): `siteConfig` ya
  apunta al objeto correcto (`luminaConfig` o `novaConfig`) gracias al
  resolver de `site.ts`.
- **Colores**: `globals.css` define la paleta de Lumina en `:root` y la de
  Nova en `:root[data-brand="nova"]`, usando los mismos nombres de token
  (`--color-rose`, `--art-champagne-from`, etc.) con valores distintos.
  `src/app/layout.tsx` setea `<html data-brand={siteConfig.theme.id}>`, así
  que el CSS correcto se activa solo.
- **Tipografía**: layout.tsx carga las 4 fuentes (Playfair+Jost de Lumina,
  Fraunces+Inter de Nova) pero cada marca solo *usa* su propio par — el
  navegador no descarga la fuente que no se aplica a ningún texto.
- **Forma de las tarjetas** (`ArtPanel`, el componente que genera las
  composiciones abstractas que reemplazan a la fotografía): el radio de
  borde, la sombra y la opacidad de los "blobs" también son tokens CSS
  (`--panel-radius`, `--panel-shadow`, …), así que Nova puede verse más
  recta/plana que Lumina sin que el componente sepa nada de marcas.

## Cómo crear un tercer cliente

1. **Copiá un archivo de cliente existente**: `src/config/clients/lumina.ts`
   → `src/config/clients/<nuevo-cliente>.ts`. Cambiá `theme.id` por un id
   nuevo (ej. `"aurora"`) y completá todos los campos (nombre, WhatsApp,
   tratamientos, testimonios, FAQ, SEO, etc.). El tipo de cada campo ya está
   validado contra `src/config/types.ts`, así que TypeScript avisa si falta
   algo.
2. **Sumalo al resolver** en `src/config/site.ts`:
   ```ts
   import { auroraConfig } from "@/config/clients/aurora";
   const clients = { lumina: luminaConfig, nova: novaConfig, aurora: auroraConfig };
   ```
3. **Definí su paleta de colores** en `src/app/globals.css`, agregando un
   bloque `:root[data-brand="aurora"] { --color-warm-white: …; … }` con los
   mismos tokens que ya usan Lumina y Nova (copiá el bloque de Nova como
   punto de partida y ajustá los valores). Si querés bordes/sombra propios,
   sumá también `--panel-radius`, `--panel-shadow`, etc. ahí.
4. **Sumá su paleta hex** en `src/config/theme.ts` (mismo objeto que las de
   Lumina/Nova) para que favicon, apple-icon y la imagen de Open Graph usen
   los colores correctos.
5. (Opcional) **Tipografía propia**: si no querés reusar Playfair/Jost o
   Fraunces/Inter, cargá el nuevo par de fuentes en `layout.tsx` (junto a
   las demás) y referencialas en el bloque `--font-display`/`--font-sans`
   del punto 3.
6. **Agregá scripts** `dev:aurora` / `build:aurora` / `start:aurora` a
   `package.json` (opcional, para comodidad local).

Con eso alcanza — no hace falta tocar ningún archivo de `src/components/`.

### Qué NO hace falta tocar

- Ningún componente en `src/components/` tiene texto ni color de negocio
  hardcodeado: todos leen de `siteConfig` o de tokens CSS.
- Las categorías de tratamientos (`facial` / `corporal` / `depilacion` /
  `spa`) son parte del diseño del template y cubren cualquier centro de
  estética o beauty studio. La sección de resultados solo muestra los
  filtros de las categorías que el cliente realmente usa (Nova, por
  ejemplo, no tiene "Corporal" y ese botón no aparece).
- El radio/sombra de las tarjetas más chicas (tratamientos, testimonios,
  galería) se mantiene compartido entre marcas a propósito, para no arriesgar
  el layout — solo los paneles grandes (hero, "nosotros", ubicación) se
  theming vía `--panel-*`. Si un cliente necesita también tarjetas más
  chicas con otra forma, es la única parte que requeriría tocar componentes.

## Notas de implementación

- **Colores**: viven en `src/app/globals.css` como variables CSS, una vez
  por marca. Los componentes nunca tienen hex hardcodeado, siempre usan
  clases Tailwind (`bg-rose`, `bg-whatsapp`, etc.) o `var(--token)`. La
  única excepción son el favicon/apple-icon/OG image (`src/config/theme.ts`),
  porque ese renderer no puede leer archivos CSS.
- **Imágenes**: las áreas visuales (hero, tratamientos, galería, "nosotros",
  Instagram) usan el componente `ArtPanel` (`src/components/art-panel.tsx`)
  que genera composiciones abstractas con gradientes y textura, en vez de
  fotografías externas. Esto evita dependencias de CDNs de terceros, mantiene
  el sitio liviano y hace que sea trivial reemplazar cada panel por una
  fotografía real del cliente más adelante (mismo tamaño, mismo `rounded`).
- **Reserva de turnos**: el formulario (`src/components/booking-form.tsx`)
  valida los campos en el cliente y arma un mensaje prellenado que abre
  WhatsApp (`wa.me`) con los datos cargados — no requiere backend.
- **SEO**: metadata, Open Graph dinámico (`opengraph-image.tsx`), favicon,
  `robots.ts`, `sitemap.ts` y datos estructurados JSON-LD (`BeautySalon`)
  configurados en `src/app/layout.tsx`, todos derivados de `siteConfig`.
