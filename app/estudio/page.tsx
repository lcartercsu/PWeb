import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "García Neiman y Asociados es un estudio jurídico de Concepción con cerca de tres décadas de experiencia, con foco en derecho laboral.",
};

const principles = [
  {
    title: "Criterio técnico",
    body: "Cada asunto se aborda con rigor jurídico y análisis fundado, evitando diagnósticos apresurados y priorizando soluciones estables en el tiempo.",
  },
  {
    title: "Trato directo",
    body: "El cliente conversa con los abogados que efectivamente llevan su causa. Creemos en una relación profesional cercana, informada y sin intermediaciones.",
  },
  {
    title: "Discreción",
    body: "La confidencialidad es parte esencial de nuestra práctica. Cuidamos la información de nuestros clientes dentro y fuera de los procesos.",
  },
  {
    title: "Equilibrio",
    body: "Asesoramos tanto a personas como a empresas. Esa doble experiencia nos permite entender el conflicto desde ambas perspectivas y anticipar sus efectos.",
  },
];

export default function EstudioPage() {
  return (
    <>
      <PageHero
        eyebrow="El estudio"
        title="Un estudio jurídico en Concepción con una tradición de trabajo serio y continuo."
        lead="García Neiman y Asociados nació y se mantiene en Concepción. Durante casi tres décadas hemos acompañado a personas, familias y empresas de la Región del Biobío en materias jurídicas de diversa complejidad."
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Estudio" }]}
      />

      {/* NARRATIVA */}
      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-24">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Quiénes somos
            </span>
            <h2 className="mt-4 font-serif text-[36px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-[44px]">
              Una práctica construida desde la experiencia laboral.
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-[#6e6e73]">
            <p>
              Bajo la dirección de Rodrigo García Neiman, el estudio se ha
              consolidado como una firma de referencia regional en derecho
              laboral. A partir de esa base hemos extendido nuestro ejercicio
              a las áreas civil, de familia, corporativa y administrativa.
            </p>
            <p>
              Somos un equipo pequeño y por diseño. Creemos que la calidad del
              trabajo jurídico depende de la dedicación personal de los abogados
              a cada asunto. Mantenemos una cartera acotada de clientes y
              privilegiamos relaciones de largo plazo.
            </p>
            <p>
              Nuestra oficina se encuentra en el centro de Concepción y desde
              ahí atendemos causas en toda la Región del Biobío.
            </p>
          </div>
        </Container>
      </section>

      {/* PRINCIPIOS */}
      <section className="bg-[#f5f5f7] py-20 md:py-28">
        <Container>
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Principios de trabajo
          </span>
          <h2 className="mt-4 font-serif text-[36px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-[44px]">
            Cuatro criterios que orientan nuestra práctica.
          </h2>
          <div className="mt-12 grid gap-[1px] bg-[#d2d2d7]/50 md:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 bg-[#f5f5f7] p-8 md:p-10"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[24px] font-medium leading-tight tracking-tight text-[#1d1d1f]">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#6e6e73]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CIFRAS */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 border-t border-[#d2d2d7]/60 pt-12 sm:grid-cols-2 md:grid-cols-4">
            {[
              { k: "~30", v: "Años de ejercicio" },
              { k: "4", v: "Abogados integrados" },
              { k: "1", v: "Oficina en Concepción" },
              { k: "Biobío", v: "y sur de Chile" },
            ].map((item) => (
              <div key={item.v}>
                <p className="font-serif text-[52px] font-medium leading-none tracking-tight text-[#1d1d1f]">
                  {item.k}
                </p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-[#86868b]">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f]">
        <Container className="flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
          <h2 className="max-w-xl font-serif text-[32px] font-medium leading-tight tracking-tight text-white md:text-[40px]">
            Conozca a las personas que conforman el estudio.
          </h2>
          <Link href="/equipo" className="btn-primary bg-white text-[#1d1d1f] hover:bg-white/85 shrink-0">
            Ir al equipo →
          </Link>
        </Container>
      </section>
    </>
  );
}
