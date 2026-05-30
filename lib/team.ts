export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  lead?: boolean;
  linkedin?: string;
  bio: string;
  focus: string[];
  education: string[];
};

export const team: TeamMember[] = [
  {
    slug: "rodrigo-garcia-neiman",
    name: "Rodrigo García Neiman",
    role: "Socio fundador",
    initials: "RG",
    photo: "/team/rodrigo.jpg",
    lead: true,
    bio: "Cerca de treinta años de ejercicio profesional en Concepción. Práctica concentrada en derecho laboral, tanto en asesoría a empresas como en representación de trabajadores.",
    focus: [
      "Derecho laboral individual y colectivo",
      "Litigación laboral",
      "Negociación colectiva",
      "Cumplimiento normativo",
    ],
    linkedin: "https://www.linkedin.com/in/rodrigo-garc%C3%ADa-neiman-4560852a9/",
    education: [
      "Licenciado en Ciencias Jurídicas, Pontificia Universidad Católica de Chile",
    ],
  },
  {
    slug: "abogado-asociado-1",
    name: "María José Placeholder",
    role: "Abogada asociada",
    initials: "MP",
    bio: "Dedicada al derecho laboral y seguridad social. Experiencia en litigio ante Juzgados del Trabajo y auditorías de cumplimiento.",
    focus: [
      "Procedimientos laborales",
      "Fiscalización y sumarios",
      "Políticas y reglamentos internos",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, UCSC",
    ],
  },
  {
    slug: "abogado-asociado-2",
    name: "Ignacio Placeholder",
    role: "Abogado asociado",
    initials: "IP",
    bio: "Foco en derecho civil patrimonial y asesoría a personas. Apoyo transversal en causas laborales con materias contractuales conexas.",
    focus: [
      "Derecho civil y de familia",
      "Contratos y responsabilidad civil",
      "Asesoría integral a personas",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas, Universidad de Concepción",
    ],
  },
  {
    slug: "abogado-asociado-3",
    name: "Consuelo Placeholder",
    role: "Abogada asociada",
    initials: "CP",
    bio: "Interés en derecho corporativo y cumplimiento. Colabora con clientes empresariales en contratación y prevención de riesgos.",
    focus: [
      "Derecho corporativo",
      "Compliance y prevención",
      "Asesoría a empresas",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, Universidad de Concepción",
    ],
  },
];
