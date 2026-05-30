import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white/70">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr] md:py-16">
        <div>
          <p className="font-serif text-[20px] tracking-tight text-white">
            García Neiman
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
            & Asociados · Abogados
          </p>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/55">
            Estudio jurídico en Concepción con casi tres décadas de experiencia
            asesorando a personas y empresas.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/35">
            Contacto
          </p>
          <dl className="space-y-2 text-[14px]">
            <dd>{site.contact.address}</dd>
            <dd>{site.contact.city}</dd>
            <dd>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="hover:text-white transition-colors"
              >
                {site.contact.phone}
              </a>
            </dd>
            <dd>
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {site.contact.email}
              </a>
            </dd>
            <dd className="text-white/35 text-[13px] pt-1">{site.contact.hours}</dd>
          </dl>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/35">
            Navegación
          </p>
          <ul className="space-y-2 text-[14px]">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-1 px-6 py-4 text-[12px] text-white/25 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} García Neiman y Asociados. Todos los
            derechos reservados.
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
