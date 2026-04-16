import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Áreas de práctica",
  description:
    "Áreas de práctica de García Neiman y Asociados: derecho laboral, civil, familia, corporativo, litigación y derecho administrativo.",
};

export default function AreasPage() {
  const featured = areas.find((a) => a.featured);
  const rest = areas.filter((a) => !a.featured);

  return (
    <>
      <PageHero
        eyebrow="Áreas de práctica"
        title={
          <>
            Con especialidad declarada en{" "}
            <span className="italic text-gold">derecho laboral</span>, y una
            asesoría transversal.
          </>
        }
        lead={
          <>
            Nuestro trabajo se concentra en el derecho laboral, desde el cual
            hemos desarrollado también una práctica habitual en asuntos
            civiles, de familia, corporativos y administrativos. A continuación
            describimos las materias en que intervenimos con regularidad.
          </>
        }
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Áreas de práctica" },
        ]}
      />

      {/* ÁREA PRINCIPAL */}
      {featured && (
        <section className="bg-bone py-24 md:py-28">
          <Container>
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rule" aria-hidden />
                  <span className="eyebrow">Área principal</span>
                </div>
                <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-muted">
                  {featured.summary}
                </p>
                <Link
                  href="/contacto"
                  className="mt-10 inline-flex items-center gap-2 border border-ink px-5 py-3 text-xs uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-bone"
                >
                  Consultar sobre un caso laboral
                </Link>
              </div>

              <div className="border-t border-ink/10 pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0">
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <p className="eyebrow">Para personas</p>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                      <li>Despidos y término del contrato de trabajo</li>
                      <li>Tutela laboral y derechos fundamentales</li>
                      <li>Accidentes del trabajo y enfermedades profesionales</li>
                      <li>Cobro de prestaciones y finiquitos</li>
                      <li>Asuntos previsionales y de seguridad social</li>
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow">Para empresas</p>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                      <li>Auditorías y cumplimiento laboral</li>
                      <li>Reglamentos internos y políticas</li>
                      <li>Defensa ante la Dirección del Trabajo</li>
                      <li>Negociación colectiva y relaciones sindicales</li>
                      <li>Reestructuraciones y término de relaciones laborales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* RESTO DE ÁREAS */}
      <section className="border-t border-ink/10 bg-bone-warm/40 py-24 md:py-28">
        <Container>
          <div className="flex items-center gap-3">
            <span className="rule" aria-hidden />
            <span className="eyebrow">Otras áreas</span>
          </div>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight tracking-tight md:text-[2.75rem]">
            Prácticas complementarias del estudio.
          </h2>
          <div className="mt-12">
            {rest.map((area, i) => (
              <PracticeAreaCard
                key={area.slug}
                area={area}
                index={i + 1}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
