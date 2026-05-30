export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  featured?: boolean;
};

export const areas: PracticeArea[] = [
  {
    slug: "derecho-laboral",
    title: "Derecho laboral",
    featured: true,
    summary:
      "Nuestra especialidad. Asesoría equilibrada a trabajadores y empleadores.",
    bullets: [
      "Despidos y tutela laboral",
      "Negociación colectiva",
      "Accidentes del trabajo",
      "Auditorías de cumplimiento",
      "Representación ante tribunales",
      "Subcontratación y regímenes especiales",
    ],
  },
  {
    slug: "derecho-civil",
    title: "Derecho civil",
    summary:
      "Contratos, responsabilidad civil y asuntos inmobiliarios con enfoque preventivo.",
    bullets: [
      "Redacción y revisión de contratos",
      "Responsabilidad civil",
      "Cobranzas y cumplimiento forzado",
      "Derechos reales e inmobiliarios",
    ],
  },
  {
    slug: "derecho-de-familia",
    title: "Derecho de familia",
    summary:
      "Divorcios, cuidado personal y alimentos. Priorizamos acuerdos cuando es posible.",
    bullets: [
      "Divorcios y compensación económica",
      "Cuidado personal y alimentos",
      "Mediaciones y acuerdos",
    ],
  },
  {
    slug: "derecho-corporativo",
    title: "Derecho corporativo",
    summary:
      "Asesoría permanente a empresas en organización, contratos y cumplimiento normativo.",
    bullets: [
      "Constitución y reorganización societaria",
      "Contratos mercantiles",
      "Gobierno corporativo y compliance",
      "Due diligence y M&A",
    ],
  },
  {
    slug: "litigacion",
    title: "Litigación",
    summary:
      "Representación ante tribunales ordinarios, laborales y de familia en el Biobío.",
    bullets: [
      "Procedimientos ordinarios y especiales",
      "Recursos ante Cortes de Apelaciones",
      "Ejecución de sentencias",
    ],
  },
  {
    slug: "administrativo",
    title: "Derecho administrativo",
    summary:
      "Defensa ante la Administración del Estado y procedimientos sancionatorios.",
    bullets: [
      "Reclamos y recursos administrativos",
      "Procedimientos sancionatorios",
      "Contratación pública",
    ],
  },
];
