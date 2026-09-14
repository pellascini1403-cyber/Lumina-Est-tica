// Resolver de configuración multi-cliente.
//
// Esta base sirve más de un negocio desde el mismo código: cada cliente
// tiene su propia config en src/config/clients/<cliente>.ts, y acá se
// elige cuál se usa según la variable de entorno NEXT_PUBLIC_SITE_ID.
// El resto del código (todos los componentes) sigue importando
// `siteConfig` desde "@/config/site" sin saber nada de esto.
//
// Cómo correr/buildear cada cliente: ver los scripts "dev:nova" /
// "build:nova" en package.json, o exportar la variable a mano:
//   NEXT_PUBLIC_SITE_ID=nova npm run dev
//
// Cómo sumar un cliente nuevo: ver README.md, sección "Cómo agregar un
// tercer cliente".
import { luminaConfig } from "@/config/clients/lumina";
import { novaConfig } from "@/config/clients/nova";

const clients = {
  lumina: luminaConfig,
  nova: novaConfig,
};

export type ClientId = keyof typeof clients;

function resolveClientId(): ClientId {
  const raw = process.env.NEXT_PUBLIC_SITE_ID;
  return raw && raw in clients ? (raw as ClientId) : "lumina";
}

export const siteConfig = clients[resolveClientId()];

export * from "@/config/types";
