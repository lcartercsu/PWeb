import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-bone">
      <div className="mx-auto grid w-full max-w-editorial gap-12 px-6 py-16 md:grid-cols-[1.25fr_1fr_1fr] md:px-10 md:py-20">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-serif text-2xl tracking-tight">
              García Neiman
              <span className="block text-sm uppercase tracking-eyebrow text-bone/60">
                & Asociados
              </span>
            </p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/70">
            Estudio jurídico en Concepción, con cerca de tres décadas de
            experiencia asesorando a personas y empresas en el sur de Chile.
          </p>
          <p className="mt-4 text-xs uppercase tracking-eyebrow text-bone/40">
            {site.domain}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-gold-soft">Contacto</p>
          <dl className="space-y-3 text-sm text-bone/80">
            <div>
              <dt className="sr-only">Dirección</dt>
              <dd>
                {site.contact.address}
                <br />
                {site.contact.city}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Teléfono</dt>
              <dd>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="link-underline"
                >
                  {site.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Correo</dt>
              <dd>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="link-underline"
                >
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Horario</dt>
              <dd className="text-bone/60">{site.contact.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-gold-soft">Navegación</p>
          <ul className="space-y-2 text-sm text-bone/80">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto flex w-full max-w-editorial flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-bone/50 md:flex-row md:items-center md:px-10">
          <p>
            © {new Date().getFullYear()} García Neiman y Asociados. Todos los
            derechos reservados.
          </p>
          <p>Concepción · Región del Biobío · Chile</p>
        </div>
      </div>
    </footer>
  );
}
