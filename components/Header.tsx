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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl border-b border-[#d2d2d7]/60"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-[56px] w-full max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none"
          aria-label={`${site.name} — Inicio`}
        >
          <span className="font-serif text-[18px] tracking-tight text-[#1d1d1f]">
            García Neiman
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#86868b] mt-0.5">
            Abogados · Concepción
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primaria">
          {site.nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] transition-colors ${
                  isActive(item.href)
                    ? "text-[#1d1d1f]"
                    : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/contacto"
            className="ml-2 inline-flex items-center rounded-full bg-[#1d1d1f] px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#353535]"
          >
            Contactar
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="relative block h-[14px] w-[22px]">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-full bg-[#1d1d1f] transition-all duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[1.5px] w-full bg-[#1d1d1f] transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-[1.5px] w-full bg-[#1d1d1f] transition-all duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#d2d2d7]/60 bg-white/95 backdrop-blur-2xl md:hidden">
          <nav
            className="mx-auto flex max-w-[1200px] flex-col px-6 py-3"
            aria-label="Primaria móvil"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-[#f5f5f7] py-4 text-[17px] ${
                  isActive(item.href) ? "text-[#1d1d1f]" : "text-[#6e6e73]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="my-5 inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-3 text-[15px] text-white"
            >
              Contactar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
