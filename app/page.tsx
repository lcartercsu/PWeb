import Link from "next/link";
import { areas } from "@/lib/areas";
import { team } from "@/lib/team";
import { site } from "@/lib/site";

export default function HomePage() {
  const lead = team.find((t) => t.lead)!;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-white pt-[110px] pb-24 md:pt-[130px] md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <span className="fade-up inline-block text-[11px] uppercase tracking-[0.22em] text-gold">
            Concepción · Desde 1996
          </span>

          <h1 className="fade-up delay-1 mt-5 font-serif text-[52px] font-medium leading-[1.06] tracking-tight text-[#1d1d1f] md:text-7xl lg:text-[88px]">
            Asesoría jurídica<br />
            con criterio<br />
            y experiencia.
          </h1>

          <p className="fade-up delay-2 mx-auto mt-7 max-w-[540px] text-[18px] leading-relaxed text-[#6e6e73] md:text-[20px]">
            García Neiman y Asociados. Especialistas en derecho laboral
            para personas y empresas en la Región del Biobío.
          </p>

          <div className="fade-up delay-3 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contacto" className="btn-primary">
              Agendar consulta
            </Link>
            <Link href="/areas" className="btn-ghost">
              Áreas de práctica
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 divide-y divide-[#d2d2d7]/50 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { value: "~30", label: "Años de trayectoria" },
            { value: "4", label: "Abogados especializados" },
            { value: "Laboral", label: "Área de especialidad principal" },
          ].map(({ value, label }) => (
            <div key={label} className="py-12 text-center">
              <p className="font-serif text-[52px] font-medium leading-none tracking-tight text-[#1d1d1f]">
                {value}
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-[#86868b]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESTUDIO ──────────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-28">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                El estudio
              </span>
              <h2 className="mt-4 font-serif text-[40px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                Tres décadas de<br />ejercicio continuo<br />en Concepción.
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-relaxed text-[#6e6e73]">
              <p>
                Fundado en Concepción, nuestro estudio ha construido su
                reputación sobre relaciones profesionales de largo plazo.
                Atendemos a clientes individuales y organizaciones empresariales
                buscando siempre soluciones técnicamente sólidas.
              </p>
              <p>
                Nuestra práctica está centrada en el derecho del trabajo, área
                en la que hemos intervenido tanto defendiendo a trabajadores
                como asesorando a empleadores, con una comprensión completa del
                conflicto laboral.
              </p>
              <Link
                href="/estudio"
                className="mt-1 inline-flex items-center gap-1.5 text-[15px] text-[#1d1d1f] hover:text-[#6e6e73]"
              >
                Conocer el estudio <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÁREAS ────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-28 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Áreas de práctica
              </span>
              <h2 className="mt-4 font-serif text-[40px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                Experiencia concentrada,<br />mirada transversal.
              </h2>
            </div>
            <Link
              href="/areas"
              className="shrink-0 text-[15px] text-[#1d1d1f] hover:text-[#6e6e73]"
            >
              Ver todas →
            </Link>
          </div>

          <div className="grid gap-[1px] bg-[#d2d2d7]/50 sm:grid-cols-2 md:grid-cols-3">
            {areas.slice(0, 6).map((area, i) => (
              <Link
                key={area.slug}
                href="/areas"
                className="group flex flex-col gap-5 bg-[#f5f5f7] p-8 transition-colors duration-200 hover:bg-white md:p-10"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[22px] font-medium leading-snug tracking-tight text-[#1d1d1f]">
                  {area.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#6e6e73]">
                  {area.summary}
                </p>
                <span
                  aria-hidden
                  className="mt-auto text-[13px] text-[#86868b] transition-colors group-hover:text-[#1d1d1f]"
                >
                  Ver detalle →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIO ────────────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-start md:gap-24">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Socio principal
              </span>
              <h2 className="mt-4 font-serif text-[40px] font-medium leading-tight tracking-tight text-[#1d1d1f]">
                {lead.name}
              </h2>
              <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-[#86868b]">
                {lead.role}
              </p>
              {/* Avatar placeholder */}
              <div className="relative mt-10 aspect-[4/5] max-w-[280px] overflow-hidden bg-[#f5f5f7]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[88px] font-medium tracking-tight text-[#d2d2d7]">
                    {lead.initials}
                  </span>
                </div>
                <div className="absolute left-4 top-4 h-px w-8 bg-gold/60" />
                <div className="absolute bottom-4 right-4 h-8 w-px bg-gold/60" />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-[17px] leading-relaxed text-[#6e6e73]">
                {lead.bio}
              </p>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
                    Líneas de trabajo
                  </p>
                  <ul className="space-y-2.5">
                    {lead.focus.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 text-[14px] leading-snug text-[#6e6e73]"
                      >
                        <span
                          aria-hidden
                          className="mt-[6px] inline-block h-px w-3 shrink-0 bg-gold/70"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
                    Formación
                  </p>
                  <ul className="space-y-2.5">
                    {lead.education.map((e) => (
                      <li
                        key={e}
                        className="flex gap-3 text-[14px] leading-snug text-[#6e6e73]"
                      >
                        <span
                          aria-hidden
                          className="mt-[6px] inline-block h-px w-3 shrink-0 bg-gold/70"
                        />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/equipo"
                className="text-[15px] text-[#1d1d1f] hover:text-[#6e6e73]"
              >
                Conocer al equipo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO CTA ─────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-28 text-white md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-[40px] font-medium leading-tight tracking-tight md:text-5xl">
                Evaluamos su caso<br />con reserva y sin<br />compromiso inicial.
              </h2>
            </div>

            <div className="flex flex-col gap-5 md:items-end">
              <dl className="space-y-2 text-[15px] text-white/60 md:text-right">
                <dd>{site.contact.address}</dd>
                <dd>{site.contact.city}</dd>
                <dd className="text-white/40 text-[13px]">{site.contact.hours}</dd>
                <dd>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    {site.contact.phone}
                  </a>
                </dd>
                <dd>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </dl>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-[#1d1d1f] transition-colors hover:bg-white/85"
              >
                Escribir al estudio →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
