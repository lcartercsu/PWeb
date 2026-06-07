export const site = {
  name: "García Neiman y Asociados",
  shortName: "García Neiman",
  domain: "garcianeiman.cl",
  tagline: "Estudio jurídico en Concepción",
  description:
    "Estudio jurídico en Concepción con una trayectoria de casi 30 años. Asesoría integral a personas y empresas, con énfasis en derecho laboral.",
  contact: {
    email: "contacto@garcianeiman.cl",
    phone: "(41) 291 3070",
    address: "Colo-Colo 379, oficina 1405",
    city: "Concepción, Región del Biobío, Chile",
    hours: "Lunes a viernes · 09:00 a 14:00 y 15:00 a 18:00 hrs.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/garc%C3%ADa-neiman-asociados",
  },
  nav: [
    { href: "/", label: "Inicio" },
    { href: "#equipo", label: "Equipo" },
    { href: "#estudio", label: "Estudio" },
    { href: "#contacto", label: "Contacto" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
