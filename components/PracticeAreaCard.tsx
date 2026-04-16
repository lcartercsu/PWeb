import Link from "next/link";
import { type PracticeArea } from "@/lib/areas";

type PracticeAreaCardProps = {
  area: PracticeArea;
  index: number;
};

export function PracticeAreaCard({ area, index }: PracticeAreaCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`group grid gap-8 border-t border-ink/10 py-12 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-14 ${
        area.featured ? "bg-bone-warm/40 -mx-6 px-6 md:-mx-10 md:px-10" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="font-serif text-sm text-gold md:text-base">
          {number}
        </span>
        {area.featured && (
          <span className="eyebrow hidden md:inline">Área principal</span>
        )}
      </div>

      <div className="max-w-2xl">
        <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-3xl">
          {area.title}
        </h3>
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
          {area.summary}
        </p>
        <ul className="mt-6 grid gap-2 text-sm text-ink md:grid-cols-2">
          {area.bullets.map((b) => (
            <li key={b} className="flex gap-3 leading-relaxed">
              <span
                aria-hidden
                className="mt-[0.6rem] inline-block h-px w-3 shrink-0 bg-gold"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block">
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-ink-muted transition-colors hover:text-ink"
        >
          Consultar
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
