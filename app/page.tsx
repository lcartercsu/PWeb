import Link from "next/link";
import { site } from "@/lib/site";
import { team } from "@/lib/team";
import { ConcepcionSkyline } from "@/components/ConcepcionSkyline";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";

const principles = [
  {
    title: "Criterio técnico",
    body: "Rigor jurídico. Análisis fundado. Soluciones estables en el tiempo.",
  },
  {
    title: "Trato directo",
    body: "El cliente conversa con los abogados que llevan su causa. Sin intermediaciones.",
  },
  {
    title: "Discreción",
    body: "Confidencialidad dentro y fuera de los procesos. Sin excepciones.",
  },
  {
    title: "Equilibrio",
    body: "Asesoramos a personas y empresas. Entendemos el conflicto desde ambas perspectivas.",
  },
];

export default function HomePage() {
  const lead = team.find((t) => t.lead)!;
  const associates = team.filter((t) => !t.lead);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pb-20 pt-28 md:pb-28 md:pt-36">
        <ConcepcionSkyline className="pointer-events-none absolute bottom-0 left-1/2 w-[1400px] max-w-none -translate-x-1/2 text-brand-600/[0.12]" />
        <div className="relative mx-auto max-w-site px-6 text-center">
          <h1 className="fade-up text-[34px] font-bold leading-[1.04] tracking-tight text-gray-900 md:text-[50px] lg:text-[56px]">
            Derecho laboral.
            <br />
            Trayectoria y
            <br />
            cercanía.
          </h1>
          <p className="fade-up delay-1 mx-auto mt-5 max-w-[420px] text-[16px] leading-relaxed text-gray-600 md:text-[18px]">
            Estudio jurídico en Concepción para personas y empresas.
          </p>
          <div className="fade-up delay-2 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="#contacto" className="btn-dark">Agendar consulta</Link>
            <Link href="#estudio" className="btn-light">Conocer más</Link>
          </div>
        </div>
      </section>

      {/* ── Especialidad ─────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-site px-6">
          <SectionHeader
            eyebrow="Nuestra especialidad"
            title="Derecho laboral."
            description="Asesoramos tanto a trabajadores como a empleadores. Esa doble experiencia nos permite entender el conflicto desde ambas perspectivas."
          />

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-gray-200/60 sm:grid-cols-2">
            <div className="bg-gray-50 p-7 md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">Para personas</p>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-gray-600">
                <li>Despidos y término de contrato</li>
                <li>Tutela laboral y derechos fundamentales</li>
                <li>Accidentes del trabajo</li>
                <li>Cobro de prestaciones y finiquitos</li>
                <li>Seguridad social</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-7 md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-900">Para empresas</p>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-gray-600">
                <li>Auditorías y cumplimiento laboral</li>
                <li>Reglamentos internos y políticas</li>
                <li>Defensa ante la Dirección del Trabajo</li>
                <li>Negociación colectiva</li>
                <li>Reestructuraciones</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-[520px] text-[14px] leading-relaxed text-gray-500">
            También vemos materias civiles, administrativas y de litigación
            relacionadas con el ámbito laboral.
          </p>
        </div>
      </section>

      {/* ── Equipo ───────────────────────────────────────── */}
      <section id="equipo" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-site px-6">
          <SectionHeader
            eyebrow="Equipo"
            title="Tres abogados. Un criterio."
            description="Equipo integrado bajo la dirección de Rodrigo García Neiman. Cada abogado participa directamente en los asuntos encomendados."
          />

          <div className="mt-12">
            <TeamCard member={lead} variant="lead" />
          </div>

          <div className="mt-16 grid gap-y-10 gap-x-20 sm:grid-cols-[240px_240px]">
            {associates.map((m) => (
              <TeamCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Estudio ──────────────────────────────────────── */}
      <section id="estudio" className="scroll-mt-20 bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-site px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <SectionHeader eyebrow="El estudio" title="Trabajo serio y continuo desde 1996." />
            <div className="space-y-4 text-[15px] leading-relaxed text-gray-600 md:pt-2">
              <p>
                Bajo la dirección de Rodrigo García Neiman, el estudio se ha
                consolidado como referencia regional en derecho laboral. Desde
                esa base atendemos también materias civiles, administrativas y
                de litigación relacionadas.
              </p>
              <p>
                Somos un equipo pequeño y por diseño. La calidad depende de la
                dedicación personal a cada asunto. Mantenemos una cartera
                acotada y privilegiamos relaciones de largo plazo.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-gray-200/60 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="flex flex-col gap-2 bg-gray-50 p-7 md:p-10">
                <span className="text-[13px] font-semibold text-gray-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[20px] font-semibold tracking-tight text-gray-900">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ─────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-site px-6">
          <SectionHeader
            eyebrow="Contacto"
            title="Conversemos."
            description="Escriba, llame o visite nuestra oficina. Respondemos dentro del día hábil siguiente."
          />

          <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-20">
            {/* Info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="label">Oficina</p>
                <p className="mt-3 text-[22px] font-bold leading-tight tracking-tight text-gray-900">
                  {site.contact.address}
                </p>
                <p className="mt-1 text-[15px] text-gray-600">{site.contact.city}</p>
              </div>

              <div className="grid gap-6 border-t border-gray-200/80 pt-6 sm:grid-cols-2">
                <div>
                  <p className="label">Teléfono</p>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="mt-2 block text-[18px] font-semibold text-gray-900 hover:text-brand-600"
                  >
                    {site.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="label">Correo</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="mt-2 block break-all text-[16px] font-semibold text-gray-900 hover:text-brand-600"
                  >
                    {site.contact.email}
                  </a>
                </div>
                <div>
                  <p className="label">Horario</p>
                  <p className="mt-2 text-[14px] text-gray-600">{site.contact.hours}</p>
                </div>
              </div>

              <div className="border-t border-gray-200/80 pt-6">
                <p className="text-[13px] leading-relaxed text-gray-500">
                  Toda consulta se trata con estricta confidencialidad.
                  La respuesta inicial no implica aceptación del encargo.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <form method="post" action="#" className="grid gap-5" aria-label="Contacto">
                <Field label="Nombre *" name="nombre" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email *" name="email" type="email" required />
                  <Field label="Teléfono" name="telefono" type="tel" />
                </div>
                <Field label="Materia" name="materia" />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="label">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none transition-colors focus:border-brand-600 placeholder:text-gray-500"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-500">
                  <input type="checkbox" name="privacidad" required className="mt-0.5 h-4 w-4 accent-brand-600" />
                  Acepto que los datos se usen exclusivamente para responder esta consulta. *
                </label>

                <button type="submit" className="btn-dark mt-1 w-fit">
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-16 overflow-hidden rounded-xl border border-gray-200/80" style={{ aspectRatio: "16/6" }}>
            <iframe
              title="Ubicación García Neiman y Asociados"
              src="https://maps.google.com/maps?q=Colo-Colo+379,+Concepci%C3%B3n,+Chile&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="label">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none transition-colors focus:border-brand-600"
      />
    </div>
  );
}
