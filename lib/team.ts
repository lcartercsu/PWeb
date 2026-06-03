export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  photoPosition?: string;
  lead?: boolean;
  linkedin?: string;
  email?: string;
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
    photo: "/team/abogado_rodrigo_foto_web.png",
    lead: true,
    linkedin: "https://www.linkedin.com/in/rodr%C3%ADgo-garc%C3%ADa-neiman-604059413/",
    email: "rgarcia@garcianeiman.cl",
    bio: "Cerca de treinta años de ejercicio profesional en Concepción. Práctica concentrada en derecho laboral, tanto en asesoría a empresas como en representación de trabajadores.",
    focus: [
      "Derecho laboral individual y colectivo",
      "Litigación laboral",
      "Negociación colectiva",
      "Cumplimiento normativo",
    ],
    education: [
      "Abogado, Pontificia Universidad Católica de Chile",
    ],
  },
  {
    slug: "gonzalo-venegas-claramunt",
    name: "Gonzalo Venegas Claramunt",
    role: "Abogado asociado senior",
    initials: "GV",
    photo: "/team/abogado_gonzalo_foto_web.png",
    photoPosition: "center 42%",
    linkedin: "https://www.linkedin.com/in/gonzalo-venegas-claramunt-a0a84840/",
    email: "gvenegas@garcianeiman.cl",
    bio: "Litigante laboral con más de quince años de ejercicio en la Región del Biobío, especializado en defensa de trabajadores, empleadores y cumplimiento normativo.",
    focus: [
      "Litigación laboral",
      "Derecho administrativo laboral",
      "Cumplimiento normativo",
    ],
    education: [
      "Magíster en Derecho de la Empresa, Universidad del Desarrollo",
      "Postítulo en Derecho Laboral, Universidad del Desarrollo",
      "Postítulo en Derecho Administrativo General, Universidad de Concepción",
      "Licenciado en Ciencias Jurídicas, Universidad del Desarrollo",
    ],
  },
  {
    slug: "vicente-campos-caro",
    name: "Vicente Campos Caro",
    role: "Abogado asociado",
    initials: "VC",
    photo: "/team/abogado_vicente_foto_web.png",
    photoPosition: "center 20%",
    linkedin: "https://www.linkedin.com/in/vicente-campos-caro/",
    email: "vcampos@garcianeiman.cl",
    bio: "Abogado laboralista especializado en asesoría a trabajadores y empresas. Énfasis en derecho individual y colectivo, compliance laboral y tramitación de causas.",
    focus: [
      "Derecho laboral individual y colectivo",
      "Compliance laboral",
      "Tramitación de causas",
    ],
    education: [
      "Diplomado en Compliance Laboral, Empresarial, Económico y Tributario, UCSC",
      "Diplomado en Derecho del Trabajo y Negociación Colectiva en la Empresa, PUC",
      "Licenciado en Ciencias Jurídicas y Sociales, Universidad de Concepción",
    ],
  },
];
