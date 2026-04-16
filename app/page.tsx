import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { areas } from "@/lib/areas";
import { team } from "@/lib/team";

export default function HomePage() {
  const lead = team.find((t) => t.lead)!;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bone">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(138,109,59,0.10),transparent_60%)]"
        />
        <Container className="relative grid gap-16 py-20 md:grid-cols-[1.3fr_1fr] md:items-end md:py-32">
          <div>
            <div className="flex items-center gap-3">
              <span className="rule" aria-hidden />
              <span className="eyebrow">Concepción · desde 1996</span>
            </div>
            <h1 className="mt-8 max-w-4xl text-balance font-serif text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
              Asesoría jurídica con criterio, discreción y una trayectoria de
              tres décadas.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted md:text-xl">
              García Neiman y Asociados es un estudio jurídico con foco en
              derecho laboral, que acompaña de forma equilibrada a personas y
              empresas en Concepción.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-ink px-6 py-4 text-xs uppercase tracking-eyebrow text-bone transition-colors hover:bg-ink-soft"
              >
                Agendar primera reunión
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/estudio"
                className="inline-flex items-center gap-3 border border-ink/20 px-6 py-4 text-xs uppercase tracking-eyebrow text-ink transition-colors hover:border-ink"
              >
                Conocer el estudio
              </Link>
            </div>
          </div>

          <aside className="md:pl-10 md:border-l md:border-ink/10">
            <dl className="grid grid-cols-2 gap-8 md:grid-cols-1">
              <div>
                <dt className="eyebrow">Trayectoria</dt>
                <dd className="mt-3 font-serif text-4xl tracking-tight text-ink md:text-5xl">
                  ~30<span className="text-gold"> años</span>
                </dd>
                <p className="mt-2 text-sm text-ink-muted">
                  de ejercicio profesional continuo.
                </p>
              </div>
              <div>
                <dt className="eyebrow">Equipo</dt>
                <dd className="mt-3 font-serif text-4xl tracking-tight text-ink md:text-5xl">
                  4 <span className="text-gold">abogados</span>
                </dd>
                <p className="mt-2 text-sm text-ink-muted">
                  integrados bajo un único criterio de trabajo.
                </p>
              </div>
              <div>
                <dt className="eyebrow">Foco</dt>
                <dd className="mt-3 font-serif text-2xl leading-tight tracking-tight text-ink">
                  Derecho laboral
                </dd>
                <p className="mt-2 text-sm text-ink-muted">
                  con asesoría integral y mirada equilibrada.
                </p>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      {/* PRESENTACIÓN */}
      <section className="bg-bone py-24 md:py-32">
        <Container className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
          <SectionHeader
            eyebrow="El estudio"
            title={
              <>
                Un estudio en Concepción con vocación de{" "}
                <span className="italic text-gold">permanencia</span>.
              </>
            }
          />
          <div className="space-y-6 text-pretty text-lg leading-relaxed text-ink-muted">
            <p>
              Fundado en Concepción, nuestro estudio ha construido su
              reputación sobre la base de relaciones profesionales de largo
              plazo. Atendemos a clientes individuales y a organizaciones
              empresariales de distinta escala, buscando siempre soluciones
              técnicamente sólidas y proporcionadas al asunto concreto.
            </p>
            <p>
              Nuestra práctica está centrada en el derecho del trabajo, área en
              la que hemos intervenido tanto defendiendo a trabajadores como
              asesorando a empleadores, lo que nos otorga una comprensión
              completa del conflicto laboral y una mejor capacidad de
              prevención.
            </p>
            <div className="pt-4">
              <Link
                href="/estudio"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-eyebrow text-ink"
              >
                <span className="link-underline">Leer más sobre el estudio</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ÁREAS DESTACADAS */}
      <section className="border-t border-ink/10 bg-bone-warm/40 py-24 md:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Áreas de práctica"
              title="Experiencia concentrada, mirada transversal."
              description="Nuestro equipo concentra su trabajo en el derecho laboral, complementado con áreas de práctica habituales del asesoramiento integral a personas y empresas."
            />
            <Link
              href="/areas"
              className="inline-flex shrink-0 items-center gap-2 text-sm uppercase tracking-eyebrow text-ink"
            >
              <span className="link-underline">Ver todas las áreas</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-3">
            {areas.slice(0, 6).map((area, i) => (
              <Link
                key={area.slug}
                href="/areas"
                className="group flex flex-col gap-4 bg-bone p-8 transition-colors hover:bg-bone-warm md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {area.featured && (
                    <span className="eyebrow text-gold">Principal</span>
                  )}
                </div>
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {area.summary}
                </p>
                <span
                  aria-hidden
                  className="mt-auto inline-block text-xs uppercase tracking-eyebrow text-ink/60 transition-colors group-hover:text-ink"
                >
                  Ver detalle →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SOCIO PRINCIPAL */}
      <section className="bg-bone py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="rule" aria-hidden />
              <span className="eyebrow">Socio principal</span>
            </div>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              {lead.name}
            </h2>
            <p className="mt-3 text-sm uppercase tracking-eyebrow text-ink-muted">
              {lead.role}
            </p>
            <div
              aria-hidden
              className="relative mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden bg-bone-deep"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(138,109,59,0.12),_rgba(17,20,24,0.08))]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-7xl tracking-tight text-ink/35">
                  {lead.initials}
                </span>
              </div>
              <div className="absolute left-4 top-4 h-px w-10 bg-gold" />
              <div className="absolute bottom-4 right-4 h-10 w-px bg-gold" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-pretty text-lg leading-relaxed text-ink md:text-xl">
              {lead.bio}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="eyebrow">Líneas de trabajo</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                  {lead.focus.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.55rem] inline-block h-px w-4 bg-gold"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Formación</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                  {lead.education.map((e) => (
                    <li key={e} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.55rem] inline-block h-px w-4 bg-gold"
                      />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Link
                href="/equipo"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-eyebrow text-ink"
              >
                <span className="link-underline">Conocer al equipo</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CALL TO CONTACT */}
      <section className="bg-ink text-bone">
        <Container className="grid gap-10 py-20 md:grid-cols-[1.3fr_1fr] md:items-center md:py-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold-soft" aria-hidden />
              <span className="eyebrow text-gold-soft">Contacto directo</span>
            </div>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Evaluamos su caso con reserva y sin compromiso inicial.
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-bone px-6 py-4 text-xs uppercase tracking-eyebrow text-ink transition-colors hover:bg-bone-warm"
            >
              Escribir al estudio
              <span aria-hidden>→</span>
            </Link>
            <p className="text-sm text-bone/60">
              Concepción · Región del Biobío · Chile
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
