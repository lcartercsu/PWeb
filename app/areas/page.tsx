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
        title="Especialidad en derecho laboral y asesoría transversal."
        lead="Nuestro trabajo se concentra en el derecho laboral, desde el cual hemos desarrollado también una práctica habitual en asuntos civiles, de familia, corporativos y administrativos."
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Áreas de práctica" },
        ]}
      />

      {/* ÁREA PRINCIPAL */}
      {featured && (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  Área principal
                </span>
                <h2 className="mt-4 font-serif text-[36px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-[44px]">
                  {featured.title}
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-[#6e6e73]">
                  {featured.summary}
                </p>
                <Link href="/contacto" className="btn-primary mt-8 text-[13px]">
                  Consultar un caso laboral
                </Link>
              </div>

              <div className="border-t border-[#d2d2d7]/60 pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0">
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
                      Para personas
                    </p>
                    <ul className="space-y-2.5 text-[14px] leading-relaxed text-[#6e6e73]">
                      <li>Despidos y término del contrato de trabajo</li>
                      <li>Tutela laboral y derechos fundamentales</li>
                      <li>Accidentes del trabajo y enfermedades profesionales</li>
                      <li>Cobro de prestaciones y finiquitos</li>
                      <li>Asuntos previsionales y de seguridad social</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
                      Para empresas
                    </p>
                    <ul className="space-y-2.5 text-[14px] leading-relaxed text-[#6e6e73]">
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
      <section className="bg-[#f5f5f7] py-20 md:py-28">
        <Container>
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Otras áreas
          </span>
          <h2 className="mt-4 font-serif text-[36px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-[44px]">
            Prácticas complementarias del estudio.
          </h2>
          <div className="mt-10">
            {rest.map((area, i) => (
              <PracticeAreaCard key={area.slug} area={area} index={i + 1} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
