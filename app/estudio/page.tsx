import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "García Neiman y Asociados es un estudio jurídico de Concepción con cerca de tres décadas de experiencia.",
};

const principles = [
  {
    title: "Criterio técnico",
    body: "Rigor jurídico. Análisis fundado. Soluciones estables en el tiempo.",
  },
  {
    title: "Trato directo",
    body: "El cliente conversa con los abogados que llevan su causa. Sin intermediaciones.",
  },
  {
    title: "Discreción",
    body: "Confidencialidad dentro y fuera de los procesos. Sin excepciones.",
  },
  {
    title: "Equilibrio",
    body: "Asesoramos a personas y empresas. Entendemos el conflicto desde ambas perspectivas.",
  },
];

export default function EstudioPage() {
  return (
    <>
      <PageHero
        eyebrow="El estudio"
        title="Trabajo serio y continuo desde 1996."
        lead="Nacimos y seguimos en Concepción. Casi tres décadas acompañando a personas y empresas del Biobío."
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Estudio" }]}
      />

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-site gap-12 px-6 md:grid-cols-2 md:gap-20">
          <div>
            <p className="label">Quiénes somos</p>
            <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
              Construido desde la experiencia laboral.
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-600">
            <p>
              Bajo la dirección de Rodrigo García Neiman, el estudio se ha
              consolidado como referencia regional en derecho laboral. Desde esa
              base extendimos la práctica a áreas civil, de familia, corporativa
              y administrativa.
            </p>
            <p>
              Somos un equipo pequeño y por diseño. La calidad depende de la
              dedicación personal a cada asunto. Mantenemos una cartera acotada
              y privilegiamos relaciones de largo plazo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="label">Principios</p>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-tight text-gray-900 md:text-[40px]">
            Cómo trabajamos.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-gray-200/60 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="flex flex-col gap-2 bg-white p-7 md:p-10">
                <span className="text-[13px] font-semibold text-gray-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[20px] font-semibold tracking-tight text-gray-900">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 md:py-20">
        <div className="mx-auto flex max-w-site flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-md text-[28px] font-bold leading-tight tracking-tight text-white md:text-[32px]">
            Conozca al equipo.
          </h2>
          <Link href="/equipo" className="btn bg-white text-gray-900 hover:bg-white/90">
            Ir al equipo →
          </Link>
        </div>
      </section>
    </>
  );
}
