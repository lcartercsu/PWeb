"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink/10 bg-bone/90 backdrop-blur"
          : "border-transparent bg-bone"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-editorial items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label={`${site.name} — Inicio`}
        >
          <span className="font-serif text-lg tracking-tight text-ink md:text-xl">
            García Neiman
          </span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-eyebrow text-ink-muted">
            & Asociados · Abogados
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primaria">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <span className="link-underline">{item.label}</span>
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-2 inline-flex items-center gap-2 border border-ink px-4 py-2 text-xs uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            Agendar consulta
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-px w-6 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-6 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-px w-6 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone md:hidden">
          <nav
            className="mx-auto flex max-w-editorial flex-col px-6 py-6"
            aria-label="Primaria móvil"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-ink/5 py-4 font-serif text-xl tracking-tight ${
                  isActive(item.href) ? "text-ink" : "text-ink-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center justify-center border border-ink px-4 py-3 text-xs uppercase tracking-eyebrow text-ink"
            >
              Agendar consulta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
