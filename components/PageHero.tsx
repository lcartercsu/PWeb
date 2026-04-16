import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
};

export function PageHero({ eyebrow, title, lead, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-bone-warm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(138,109,59,0.12),transparent_70%)] md:block"
      />
      <Container className="relative py-20 md:py-28">
        {breadcrumb && (
          <nav aria-label="Ruta" className="mb-8 text-xs text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="link-underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{crumb.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && (
                    <span className="text-ink/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="flex items-center gap-3">
          <span className="rule" aria-hidden />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-[3.5rem]">
          {title}
        </h1>
        {lead && (
          <div className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            {lead}
          </div>
        )}
      </Container>
    </section>
  );
}
