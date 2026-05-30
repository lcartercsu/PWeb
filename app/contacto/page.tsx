import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto con García Neiman y Asociados en Concepción.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Conversemos."
        lead="Escriba, llame o visite nuestra oficina. Respondemos dentro del día hábil siguiente."
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      />

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-site gap-14 px-6 md:grid-cols-2 md:gap-20">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="label">Oficina</p>
              <p className="mt-3 text-[24px] font-bold leading-tight tracking-tight text-gray-900">
                {site.contact.address}
              </p>
              <p className="mt-1 text-[15px] text-gray-600">{site.contact.city}</p>
            </div>

            <div className="grid gap-6 border-t border-gray-200/80 pt-6 sm:grid-cols-2">
              <div>
                <p className="label">Teléfono</p>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-[18px] font-semibold text-gray-900 hover:text-gray-600"
                >
                  {site.contact.phone}
                </a>
              </div>
              <div>
                <p className="label">Correo</p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="mt-2 block text-[16px] font-semibold text-gray-900 hover:text-gray-600 break-all"
                >
                  {site.contact.email}
                </a>
              </div>
              <div>
                <p className="label">Horario</p>
                <p className="mt-2 text-[14px] text-gray-600">{site.contact.hours}</p>
              </div>
            </div>

            <div className="border-t border-gray-200/80 pt-6">
              <p className="text-[13px] leading-relaxed text-gray-500">
                Toda consulta se trata con estricta confidencialidad.
                La respuesta inicial no implica aceptación del encargo.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="label">Enviar consulta</p>
            <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-gray-900">
              Cuéntenos su caso.
            </h2>

            <form method="post" action="#" className="mt-6 grid gap-5" aria-label="Contacto">
              <Field label="Nombre *" name="nombre" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email *" name="email" type="email" required />
                <Field label="Teléfono" name="telefono" type="tel" />
              </div>
              <Field label="Materia" name="materia" />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="label">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none transition-colors focus:border-gray-900 placeholder:text-gray-500"
                />
              </div>

              <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-500">
                <input type="checkbox" name="privacidad" required className="mt-0.5 h-4 w-4 accent-gray-900" />
                Acepto que los datos se usen exclusivamente para responder esta consulta. *
              </label>

              <button type="submit" className="btn-dark mt-1 w-fit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-site px-6">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label">Ubicación</p>
              <h3 className="mt-2 text-[24px] font-bold tracking-tight text-gray-900">
                Centro de Concepción
              </h3>
            </div>
            <p className="max-w-xs text-[13px] text-gray-500">
              A minutos de los Tribunales de Justicia. Estacionamientos en las inmediaciones.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200/80" style={{ aspectRatio: "16/7" }}>
            <iframe
              title="Ubicación García Neiman y Asociados"
              src="https://maps.google.com/maps?q=Colo-Colo+379,+Concepci%C3%B3n,+Chile&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="label">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none transition-colors focus:border-gray-900"
      />
    </div>
  );
}
