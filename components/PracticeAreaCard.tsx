import Link from "next/link";
import { type PracticeArea } from "@/lib/areas";

type PracticeAreaCardProps = {
  area: PracticeArea;
  index: number;
};

export function PracticeAreaCard({ area, index }: PracticeAreaCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="grid gap-8 border-t border-[#d2d2d7]/60 py-10 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-14">
      <span className="font-serif text-[13px] text-gold">{number}</span>

      <div className="max-w-2xl">
        <h3 className="font-serif text-[24px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-[28px]">
          {area.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73] md:text-[16px]">
          {area.summary}
        </p>
        <ul className="mt-5 grid gap-2 text-[13px] text-[#6e6e73] md:grid-cols-2">
          {area.bullets.map((b) => (
            <li key={b} className="flex gap-3 leading-relaxed">
              <span aria-hidden className="mt-[6px] inline-block h-px w-3 shrink-0 bg-gold/60" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block">
        <Link
          href="/contacto"
          className="text-[13px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          Consultar →
        </Link>
      </div>
    </article>
  );
}
