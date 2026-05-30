import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Equipo de abogados de García Neiman y Asociados en Concepción.",
};

export default function EquipoPage() {
  const lead = team.find((t) => t.lead)!;
  const associates = team.filter((t) => !t.lead);

  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Cuatro abogados. Un criterio."
        lead="Equipo integrado bajo la dirección de Rodrigo García Neiman. Cada abogado participa directamente en los asuntos encomendados."
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Equipo" }]}
      />

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <TeamCard member={lead} variant="lead" />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="label">Asociados</p>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
            El resto del equipo.
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {associates.map((m) => (
              <TeamCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
