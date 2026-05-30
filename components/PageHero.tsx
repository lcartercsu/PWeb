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
    <section className="border-b border-[#d2d2d7]/50 bg-white pt-[80px]">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 md:px-10 md:py-24">
        {breadcrumb && (
          <nav aria-label="Ruta" className="mb-8 text-[12px] text-[#86868b]">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#1d1d1f] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#1d1d1f]">{crumb.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && (
                    <span className="text-[#d2d2d7]">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </span>

        <h1 className="mt-4 max-w-3xl font-serif text-[40px] font-medium leading-[1.06] tracking-tight text-[#1d1d1f] md:text-[56px]">
          {title}
        </h1>

        {lead && (
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#6e6e73]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
