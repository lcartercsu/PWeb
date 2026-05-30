import Link from "next/link";
import Image from "next/image";
import { areas } from "@/lib/areas";
import { team } from "@/lib/team";
import { site } from "@/lib/site";
import { ConcepcionSkyline } from "@/components/ConcepcionSkyline";

export default function HomePage() {
  const lead = team.find((t) => t.lead)!;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pb-20 pt-28 md:pb-28 md:pt-36">
        <ConcepcionSkyline className="pointer-events-none absolute bottom-0 left-1/2 w-[1400px] max-w-none -translate-x-1/2 text-gray-900/[0.14]" />
        <div className="relative mx-auto max-w-site px-6 text-center">
          <h1 className="fade-up text-[48px] font-bold leading-[1.04] tracking-tight text-gray-900 md:text-[72px] lg:text-[80px]">
            Derecho laboral.
            <br />
            Tres décadas
            <br />
            de experiencia.
          </h1>
          <p className="fade-up delay-1 mx-auto mt-5 max-w-[420px] text-[17px] leading-relaxed text-gray-600 md:text-[19px]">
            Estudio jurídico en Concepción para personas y empresas.
          </p>
          <div className="fade-up delay-2 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contacto" className="btn-dark">Agendar consulta</Link>
            <Link href="/areas" className="btn-light">Conocer más</Link>
          </div>
        </div>
      </section>

      {/* ── El estudio ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-site gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <p className="label">El estudio</p>
            <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
              Un equipo pequeño.
              <br />
              Por diseño.
            </h2>
          </div>
          <div className="space-y-4 text-[16px] leading-relaxed text-gray-600">
            <p>
              Construimos relaciones de largo plazo con cada cliente.
              Nuestra práctica está centrada en el derecho del trabajo,
              defendiendo tanto a trabajadores como a empleadores.
            </p>
            <Link
              href="/estudio"
              className="inline-flex text-[14px] font-medium text-gray-900 hover:text-gray-600"
            >
              Conocer el estudio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Derecho laboral ──────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-site px-6">
          <p className="label">Nuestra especialidad</p>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
            Derecho laboral.
          </h2>
          <p className="mt-4 max-w-[480px] text-[16px] leading-relaxed text-gray-600">
            Asesoramos tanto a trabajadores como a empleadores. Esa doble
            experiencia nos permite entender el conflicto desde ambas
            perspectivas.
          </p>

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

          <div className="mt-12 border-t border-gray-200/80 pt-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-500">
              También asesoramos en
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {areas.filter(a => !a.featured).map((area) => (
                <span
                  key={area.slug}
                  className="rounded-full bg-white px-4 py-2 text-[13px] text-gray-600 border border-gray-200/80"
                >
                  {area.title}
                </span>
              ))}
            </div>
            <Link
              href="/areas"
              className="mt-5 inline-flex text-[14px] font-medium text-gray-900 hover:text-gray-600"
            >
              Ver todas las áreas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Socio ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-site gap-12 px-6 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            {lead.photo ? (
              <div className="relative h-[280px] w-[200px] overflow-hidden md:h-[320px] md:w-[240px]">
                <Image
                  src={lead.photo}
                  alt={lead.name}
                  fill
                  className="object-cover object-top grayscale"
                  sizes="240px"
                />
              </div>
            ) : (
              <div className="grid h-[280px] w-[200px] place-items-center bg-gray-50 md:h-[320px] md:w-[240px]" aria-hidden>
                <span className="text-[64px] font-semibold tracking-tight text-gray-200">
                  {lead.initials}
                </span>
              </div>
            )}
            <p className="label mt-5">Socio fundador</p>
            <h2 className="mt-2 text-[24px] font-bold leading-tight tracking-tight text-gray-900">
              {lead.name}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[17px] leading-relaxed text-gray-600">{lead.bio}</p>
            <ul className="grid gap-1 text-[14px] text-gray-500 sm:grid-cols-2">
              {lead.focus.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link
              href="/equipo"
              className="inline-flex text-[14px] font-medium text-gray-900 hover:text-gray-600"
            >
              Conocer al equipo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contacto CTA ──────────────────────────────────── */}
      <section className="bg-gray-900 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:grid-cols-2 md:items-center">
          <h2 className="text-[32px] font-bold leading-[1.08] tracking-tight md:text-[40px]">
            Conversemos.
          </h2>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="space-y-1 text-[14px] text-white/60 md:text-right">
              <p>{site.contact.address}</p>
              <p>{site.contact.city}</p>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="block text-white/80 hover:text-white">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="block text-white/80 hover:text-white">
                {site.contact.email}
              </a>
            </div>
            <Link href="/contacto" className="btn bg-white text-gray-900 hover:bg-white/90 mt-2">
              Escribir al estudio →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
