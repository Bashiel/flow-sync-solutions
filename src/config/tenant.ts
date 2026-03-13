// ═══════════════════════════════════════════════════════
// CONFIGURACIÓN MULTI-TENANT
// Cambiá estos valores para cada cliente nuevo.
// ═══════════════════════════════════════════════════════

export const AGENCY_CONFIG = {
  name: "FlowLabs",
  tagline: "Sistemas digitales para negocios reales.",
  whatsapp: "5491123456789", // WhatsApp de la agencia
  instagram: "@flowlabs.dev",
  email: "hola@flowlabs.dev",
};

export type TenantConfig = {
  id: string;
  name: string;
  slug: string;
  product: "gastroflow" | "barbersync";
  whatsapp: string;
  brandColor: string; // Tailwind class
  logo?: string;
};

// Clientes de ejemplo — reemplazar con datos reales
export const TENANTS: Record<string, TenantConfig> = {
  "demo-burger": {
    id: "demo-burger",
    name: "Smash House",
    slug: "smash-house",
    product: "gastroflow",
    whatsapp: "5491198765432",
    brandColor: "neon-green",
  },
  "demo-barber": {
    id: "demo-barber",
    name: "The Cut Studio",
    slug: "the-cut-studio",
    product: "barbersync",
    whatsapp: "5491187654321",
    brandColor: "neon-cyan",
  },
};

export const PRICING = {
  gastroflow: {
    price: "$40.000",
    currency: "ARS",
    period: "/mes",
    features: [
      "Catálogo visual de productos",
      "Carrito de compras optimizado",
      "Pedido directo a WhatsApp",
      "Sin comisiones por pedido",
      "Panel de administración",
      "Dominio personalizado",
    ],
  },
  barbersync: {
    price: "$30.000",
    currency: "ARS",
    period: "/mes",
    features: [
      "Landing page profesional",
      "Sistema de reservas online",
      "Integración con WhatsApp",
      "Gestión de turnos y agenda",
      "Panel de administración",
      "Dominio personalizado",
    ],
  },
};
