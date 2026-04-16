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
        title={
          <>
            Cuatro abogados integrados bajo un mismo{" "}
            <span className="italic text-gold">criterio de trabajo</span>.
          </>
        }
        lead={
          <>
            El estudio es dirigido por Rodrigo García Neiman y cuenta con un
            equipo de abogados y abogadas asociadas que participan directamente
            en el estudio y defensa de los asuntos que nos son encomendados.
          </>
        }
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Equipo" }]}
      />

      {/* SOCIO PRINCIPAL */}
      <section className="bg-bone py-24 md:py-28">
        <Container>
          <TeamCard member={lead} variant="lead" />
        </Container>
      </section>

      {/* ASOCIADOS */}
      <section className="border-t border-ink/10 bg-bone-warm/40 py-24 md:py-28">
        <Container>
          <div className="flex items-center gap-3">
            <span className="rule" aria-hidden />
            <span className="eyebrow">Asociados</span>
          </div>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight tracking-tight md:text-[2.75rem]">
            Abogados y abogadas asociadas del estudio.
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {associates.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
