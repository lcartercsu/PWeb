export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
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
    role: "Socio principal · Director del estudio",
    initials: "RG",
    lead: true,
    bio: "Abogado con cerca de treinta años de ejercicio profesional en la ciudad de Concepción. Su práctica se ha concentrado en derecho laboral, tanto en la asesoría permanente a empresas como en la representación de trabajadores en procedimientos ante los tribunales de justicia. Ha conducido negociaciones colectivas, defensa en juicios de tutela laboral, despidos, accidentes del trabajo y reestructuraciones, privilegiando siempre soluciones equilibradas y conformes a derecho.",
    focus: [
      "Derecho laboral individual y colectivo",
      "Litigación laboral y previsional",
      "Asesoría a comités paritarios y mesas de negociación",
      "Cumplimiento normativo en materia de trabajo",
    ],
    linkedin: "https://www.linkedin.com/in/rodrigo-garc%C3%ADa-neiman-4560852a9/",
    education: [
      "Licenciado en Ciencias Jurídicas y Sociales, Pontificia Universidad Católica de Chile, Sede Talcahuano",
    ],
  },
  {
    slug: "abogado-asociado-1",
    name: "María José Placeholder",
    role: "Abogada asociada",
    initials: "MP",
    bio: "Abogada dedicada al ejercicio en derecho laboral y seguridad social, con experiencia en el litigio ante los Juzgados de Letras del Trabajo y en la elaboración de auditorías de cumplimiento laboral para empresas de mediano tamaño.",
    focus: [
      "Procedimientos de aplicación general y monitorios",
      "Sumarios administrativos y fiscalización DT",
      "Asesoría en reglamentos internos y políticas",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas, Universidad Católica de la Santísima Concepción",
    ],
  },
  {
    slug: "abogado-asociado-2",
    name: "Ignacio Placeholder",
    role: "Abogado asociado",
    initials: "IP",
    bio: "Se integra al estudio con foco en derecho civil patrimonial y asesoría a personas naturales. Apoya transversalmente las causas laborales en materias contractuales y de responsabilidad civil conexa.",
    focus: [
      "Derecho civil patrimonial y de familia",
      "Contratos y responsabilidad civil",
      "Asesoría integral a personas",
    ],
    education: [
      "Licenciado en Ciencias Jurídicas y Sociales, Universidad de Concepción",
    ],
  },
  {
    slug: "abogado-asociado-3",
    name: "Consuelo Placeholder",
    role: "Abogada asociada",
    initials: "CP",
    bio: "Abogada con interés en derecho corporativo y cumplimiento. Colabora con clientes empresariales en materias de contratación, gobierno interno y prevención de riesgos laborales.",
    focus: [
      "Derecho corporativo y contractual",
      "Compliance y prevención",
      "Asesoría permanente a empresas",
    ],
    education: [
      "Licenciada en Ciencias Jurídicas y Sociales, Universidad de Concepción",
    ],
  },
];
