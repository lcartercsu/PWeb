import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="mx-auto grid max-w-wide gap-10 px-6 py-14 text-[13px] leading-relaxed sm:grid-cols-3">
        <div>
          <p className="text-[15px] font-semibold text-gray-900">García Neiman</p>
          <p className="mt-3 max-w-[240px] text-gray-500">
            Estudio jurídico en Concepción. Casi tres décadas de experiencia.
          </p>
        </div>

        <div className="space-y-2">
          <p className="label mb-3">Contacto</p>
          <p>{site.contact.address}</p>
          <p>{site.contact.city}</p>
          <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="block hover:text-gray-900">
            {site.contact.phone}
          </a>
          <a href={`mailto:${site.contact.email}`} className="block hover:text-gray-900">
            {site.contact.email}
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-gray-900">
            LinkedIn
          </a>
          <p className="text-gray-500">{site.contact.hours}</p>
        </div>

        <div>
          <p className="label mb-3">Navegación</p>
          <ul className="space-y-2">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gray-900">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200/60">
        <p className="mx-auto max-w-wide px-6 py-4 text-[11px] text-gray-500">
          © {new Date().getFullYear()} García Neiman y Asociados
        </p>
      </div>
    </footer>
  );
}
