import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Áreas de práctica",
  description:
    "Derecho laboral, civil, familia, corporativo, litigación y administrativo.",
};

export default function AreasPage() {
  const featured = areas.find((a) => a.featured);
  const rest = areas.filter((a) => !a.featured);

  return (
    <>
      <PageHero
        eyebrow="Áreas de práctica"
        title="Especialidad laboral. Asesoría integral."
        lead="Concentramos nuestro trabajo en derecho laboral con práctica complementaria en áreas civil, familia, corporativa y administrativa."
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Áreas de práctica" },
        ]}
      />

      {featured && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-site gap-12 px-6 md:grid-cols-2 md:gap-20">
            <div>
              <p className="label">Área principal</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
                {featured.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                {featured.summary}
              </p>
              <Link href="/contacto" className="btn-dark mt-6 !text-[13px]">
                Consultar un caso
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="label mb-3">Para personas</p>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li>Despidos y término de contrato</li>
                  <li>Tutela laboral</li>
                  <li>Accidentes del trabajo</li>
                  <li>Cobro de prestaciones</li>
                  <li>Seguridad social</li>
                </ul>
              </div>
              <div>
                <p className="label mb-3">Para empresas</p>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li>Auditorías y cumplimiento</li>
                  <li>Reglamentos internos</li>
                  <li>Dirección del Trabajo</li>
                  <li>Negociación colectiva</li>
                  <li>Reestructuraciones</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="label">Otras áreas</p>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
            Prácticas complementarias.
          </h2>
          <div className="mt-8">
            {rest.map((area, i) => (
              <PracticeAreaCard key={area.slug} area={area} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
