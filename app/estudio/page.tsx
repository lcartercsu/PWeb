import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

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
        title={
          <>
            Un estudio jurídico en Concepción, con una tradición de trabajo{" "}
            <span className="italic text-gold">serio y continuo</span>.
          </>
        }
        lead={
          <>
            García Neiman y Asociados nació y se mantiene en Concepción.
            Durante casi tres décadas hemos acompañado a personas, familias y
            empresas de la Región del Biobío y del sur de Chile en materias
            jurídicas de diversa complejidad.
          </>
        }
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Estudio" }]}
      />

      {/* NARRATIVA */}
      <section className="bg-bone py-24 md:py-32">
        <Container className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
          <SectionHeader
            eyebrow="Quiénes somos"
            title={
              <>
                Una práctica construida desde la <em>experiencia laboral</em>,
                abierta a la asesoría integral.
              </>
            }
          />
          <div className="space-y-6 text-pretty text-lg leading-relaxed text-ink-muted">
            <p>
              Bajo la dirección de Rodrigo García Neiman, el estudio se ha
              consolidado como una firma de referencia regional en derecho
              laboral. A partir de esa base hemos extendido nuestro ejercicio a
              las áreas civil, de familia, corporativa y administrativa, que
              resultan naturalmente conexas con el trabajo que realizamos para
              clientes individuales y empresas.
            </p>
            <p>
              Somos un equipo pequeño y por diseño. Creemos que la calidad del
              trabajo jurídico depende de la dedicación personal de los
              abogados a cada asunto, y no de la escala del estudio. Por ello
              mantenemos una cartera acotada de clientes y privilegiamos
              relaciones de largo plazo.
            </p>
            <p>
              Nuestra oficina se encuentra en el centro de Concepción y desde
              ahí atendemos causas en toda la Región del Biobío y en otras
              regiones del país cuando el asunto así lo requiere.
            </p>
          </div>
        </Container>
      </section>

      {/* PRINCIPIOS */}
      <section className="border-t border-ink/10 bg-bone-warm/40 py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Principios de trabajo"
            title="Cuatro criterios que orientan nuestra práctica."
          />
          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 bg-bone p-8 md:p-12"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink md:text-3xl">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CIFRAS */}
      <section className="bg-bone py-24 md:py-32">
        <Container>
          <div className="grid gap-12 border-t border-ink/10 pt-12 md:grid-cols-4">
            {[
              { k: "~30", v: "Años de ejercicio profesional" },
              { k: "4", v: "Abogados integrados" },
              { k: "1", v: "Oficina en Concepción" },
              { k: "Biobío", v: "y sur de Chile" },
            ].map((item) => (
              <div key={item.v}>
                <p className="font-serif text-5xl tracking-tight text-ink md:text-6xl">
                  {item.k}
                </p>
                <p className="mt-3 text-sm uppercase tracking-eyebrow text-ink-muted">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone">
        <Container className="flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
          <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Conozca a las personas que conforman el estudio.
          </h2>
          <Link
            href="/equipo"
            className="inline-flex items-center gap-3 border border-bone/40 px-6 py-4 text-xs uppercase tracking-eyebrow text-bone transition-colors hover:border-bone"
          >
            Ir al equipo
            <span aria-hidden>→</span>
          </Link>
        </Container>
      </section>
    </>
  );
}
