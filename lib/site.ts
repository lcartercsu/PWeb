export const site = {
  name: "García Neiman y Asociados",
  shortName: "García Neiman",
  domain: "garcianeiman.cl",
  tagline: "Estudio jurídico en Concepción",
  description:
    "Estudio jurídico en Concepción con una trayectoria de casi 30 años. Asesoría integral a personas y empresas, con énfasis en derecho laboral.",
  contact: {
    email: "contacto@garcianeiman.cl",
    phone: "(41) 2913070",
    address: "Colo-Colo 379, oficina 1405",
    city: "Concepción, Región del Biobío, Chile",
    hours: "Lunes a viernes · 09:00 a 18:00 hrs.",
  },
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/estudio", label: "Estudio" },
    { href: "/equipo", label: "Equipo" },
    { href: "/areas", label: "Áreas de práctica" },
    { href: "/contacto", label: "Contacto" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
