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

  useEffect(() => setOpen(false), [pathname]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)]"
          : "bg-white/0"
      }`}
    >
      <nav className="mx-auto flex h-12 max-w-wide items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-600 text-[12px] font-bold tracking-tight text-white">
            GN
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-gray-900">
            García Neiman
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {site.nav
            .filter((l) => l.href !== "/" && l.href !== "#contacto")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] transition-colors ${
                  active(l.href) ? "font-medium text-brand-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {l.label}
              </Link>
            ))}
          <Link href="#contacto" className="btn-dark !py-1.5 !px-4 !text-[12px]">
            Contactar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center md:hidden"
          aria-label={open ? "Cerrar" : "Menú"}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-gray-900 transition-all ${
                open ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-px bg-gray-900 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-3 h-px bg-gray-900 transition-all ${
                open ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="bg-white/95 backdrop-blur-2xl border-t border-gray-200/60 md:hidden">
          <div className="mx-auto flex max-w-wide flex-col px-6 py-3">
            {site.nav
              .filter((l) => l.href !== "#contacto")
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-gray-50 py-3 text-[15px] text-gray-600"
                >
                  {l.label}
                </Link>
              ))}
            <Link href="#contacto" onClick={() => setOpen(false)} className="btn-dark mt-4 mb-2">
              Contactar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
