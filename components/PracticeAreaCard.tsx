import Link from "next/link";
import { type PracticeArea } from "@/lib/areas";

export function PracticeAreaCard({
  area,
  index,
}: {
  area: PracticeArea;
  index: number;
}) {
  return (
    <article className="grid gap-6 border-t border-gray-200/80 py-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12">
      <span className="text-[13px] font-semibold text-gray-200">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="max-w-lg">
        <h3 className="text-[20px] font-semibold tracking-tight text-gray-900">
          {area.title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
          {area.summary}
        </p>
        <ul className="mt-4 grid gap-1 text-[13px] text-gray-500 sm:grid-cols-2">
          {area.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <Link
        href="/contacto"
        className="hidden text-[13px] text-gray-500 hover:text-gray-900 md:block"
      >
        Consultar →
      </Link>
    </article>
  );
}
