import Link from "next/link";
import { areas } from "@/lib/areas";
import { team } from "@/lib/team";
import { site } from "@/lib/site";

export default function HomePage() {
  const lead = team.find((t) => t.lead)!;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-white pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-site px-6 text-center">
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

      {/* ── Números ───────────────────────────────────────── */}
      <section className="border-y border-gray-200/80 bg-gray-50">
        <div className="mx-auto grid max-w-site grid-cols-3 divide-x divide-gray-200/80 px-6 text-center">
          {[
            { n: "30", sub: "años" },
            { n: "4", sub: "abogados" },
            { n: "1", sub: "especialidad" },
          ].map((s) => (
            <div key={s.sub} className="py-10 md:py-14">
              <p className="text-[40px] font-bold leading-none tracking-tight text-gray-900 md:text-[56px]">
                {s.n}
              </p>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.08em] text-gray-500">
                {s.sub}
              </p>
            </div>
          ))}
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

      {/* ── Áreas ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-site px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="label">Áreas de práctica</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
                Lo que hacemos.
              </h2>
            </div>
            <Link
              href="/areas"
              className="hidden text-[14px] font-medium text-gray-900 hover:text-gray-600 sm:block"
            >
              Ver todas →
            </Link>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-gray-200/60 sm:grid-cols-2 md:grid-cols-3">
            {areas.slice(0, 6).map((area) => (
              <Link
                key={area.slug}
                href="/areas"
                className="group flex flex-col gap-2 bg-gray-50 p-6 transition-colors hover:bg-white md:p-8"
              >
                <h3 className="text-[17px] font-semibold tracking-tight text-gray-900">
                  {area.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500">
                  {area.summary}
                </p>
                <span className="mt-auto pt-3 text-[12px] font-medium text-gray-500 transition-colors group-hover:text-gray-900">
                  Ver detalle →
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/areas"
            className="mt-6 inline-flex text-[14px] font-medium text-gray-900 hover:text-gray-600 sm:hidden"
          >
            Ver todas las áreas →
          </Link>
        </div>
      </section>

      {/* ── Socio ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-site gap-12 px-6 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <div className="grid h-[260px] w-[200px] place-items-center bg-gray-50 md:h-[300px] md:w-[240px]" aria-hidden>
              <span className="text-[64px] font-semibold tracking-tight text-gray-200">
                {lead.initials}
              </span>
            </div>
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
            Evaluamos su caso
            <br />
            sin compromiso.
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
