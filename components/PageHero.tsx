import Link from "next/link";
import { type ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
};

export function PageHero({ eyebrow, title, lead, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-white pt-20">
      <div className="mx-auto max-w-site px-6 pb-14 pt-12 md:pb-20 md:pt-16">
        {breadcrumb && (
          <nav aria-label="Ruta" className="mb-8 text-[12px] text-gray-500">
            <ol className="flex items-center gap-1.5">
              {breadcrumb.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-gray-900">{c.label}</Link>
                  ) : (
                    <span className="text-gray-900">{c.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span className="text-gray-200">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="label">{eyebrow}</p>
        <h1 className="mt-3 max-w-[680px] text-[40px] font-bold leading-[1.05] tracking-tight text-gray-900 md:text-[56px]">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-gray-600">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
