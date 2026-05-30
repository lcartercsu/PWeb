import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Equipo de abogados de García Neiman y Asociados, dirigido por Rodrigo García Neiman en Concepción.",
};

export default function EquipoPage() {
  const lead = team.find((t) => t.lead)!;
  const associates = team.filter((t) => !t.lead);

  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Cuatro abogados integrados bajo un mismo criterio de trabajo."
        lead="El estudio es dirigido por Rodrigo García Neiman y cuenta con un equipo de abogados y abogadas que participan directamente en el estudio y defensa de los asuntos encomendados."
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Equipo" }]}
      />

      {/* SOCIO PRINCIPAL */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <TeamCard member={lead} variant="lead" />
        </Container>
      </section>

      {/* ASOCIADOS */}
      <section className="bg-[#f5f5f7] py-20 md:py-28">
        <Container>
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Asociados
          </span>
          <h2 className="mt-4 font-serif text-[36px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-[44px]">
            Abogados y abogadas asociadas del estudio.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {associates.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
