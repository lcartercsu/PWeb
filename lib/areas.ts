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
      "Nuestra área de mayor tradición. Asesoramos tanto a trabajadores como a empleadores, con una mirada equilibrada y técnica, enfocada en dar certeza jurídica a cada relación de trabajo.",
    bullets: [
      "Término de contrato, despidos y tutela de derechos fundamentales",
      "Negociación colectiva y asesoría a organizaciones sindicales",
      "Accidentes del trabajo y enfermedades profesionales",
      "Auditorías de cumplimiento y reglamentos internos",
      "Representación ante la Dirección del Trabajo y Juzgados Laborales",
      "Subcontratación, suministro y regímenes especiales",
    ],
  },
  {
    slug: "derecho-civil",
    title: "Derecho civil",
    summary:
      "Asesoría a personas naturales y jurídicas en materias contractuales, responsabilidad civil y derechos reales, con un enfoque preventivo y orientado a evitar la litigación.",
    bullets: [
      "Redacción y revisión de contratos",
      "Responsabilidad civil contractual y extracontractual",
      "Obligaciones, cobranzas y cumplimiento forzado",
      "Asuntos inmobiliarios y derechos reales",
    ],
  },
  {
    slug: "derecho-de-familia",
    title: "Derecho de familia",
    summary:
      "Acompañamiento en procesos sensibles, con discreción y estándares profesionales altos. Priorizamos siempre acuerdos cuando ello resulta posible.",
    bullets: [
      "Divorcios, compensación económica y regímenes matrimoniales",
      "Cuidado personal, relación directa y alimentos",
      "Mediaciones y acuerdos extrajudiciales",
    ],
  },
  {
    slug: "derecho-corporativo",
    title: "Derecho corporativo",
    summary:
      "Asesoría permanente a empresas en la organización de su actividad, contratos comerciales, gobierno interno y cumplimiento normativo.",
    bullets: [
      "Constitución y reorganización societaria",
      "Contratos mercantiles y operaciones habituales",
      "Gobierno corporativo y compliance",
      "Due diligence y operaciones de M&A",
    ],
  },
  {
    slug: "litigacion",
    title: "Litigación",
    summary:
      "Representación ante tribunales ordinarios, laborales y de familia en la Región del Biobío, con estrategia procesal clara y comunicación permanente con el cliente.",
    bullets: [
      "Procedimientos ordinarios y especiales",
      "Recursos ante Cortes de Apelaciones y Corte Suprema",
      "Ejecución de sentencias y cumplimiento",
    ],
  },
  {
    slug: "administrativo",
    title: "Derecho administrativo",
    summary:
      "Relación con organismos públicos, procedimientos sancionatorios y defensa de derechos frente a la Administración del Estado.",
    bullets: [
      "Reclamos administrativos y recursos jerárquicos",
      "Procedimientos sancionatorios y multas",
      "Contratación pública y licitaciones",
    ],
  },
];
