import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto con García Neiman y Asociados. Oficina en Concepción, Región del Biobío.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Evaluamos su caso con reserva y sin compromiso inicial."
        lead="Si desea conversar con nosotros, puede escribirnos, llamarnos o visitar la oficina en el centro de Concepción. Responderemos dentro del siguiente día hábil."
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
          {/* INFORMACIÓN */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Oficina</p>
              <p className="mt-3 font-serif text-[28px] font-medium leading-tight tracking-tight text-[#1d1d1f]">
                {site.contact.address}
              </p>
              <p className="mt-1 text-[16px] text-[#6e6e73]">{site.contact.city}</p>
            </div>

            <div className="grid gap-8 border-t border-[#d2d2d7]/60 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Teléfono</p>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="mt-3 block font-serif text-[22px] font-medium text-[#1d1d1f] hover:text-[#6e6e73]"
                >
                  {site.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Correo</p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="mt-3 block font-serif text-[18px] font-medium text-[#1d1d1f] hover:text-[#6e6e73] break-all"
                >
                  {site.contact.email}
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Horario</p>
                <p className="mt-3 text-[15px] text-[#6e6e73]">{site.contact.hours}</p>
              </div>
            </div>

            <div className="border-t border-[#d2d2d7]/60 pt-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Reserva y confidencialidad
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#6e6e73]">
                Toda consulta será tratada con estricta confidencialidad.
                Nuestra respuesta inicial no implica la aceptación del encargo
                ni la constitución formal de una relación profesional.
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="border-t border-[#d2d2d7]/60 pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Enviar consulta
            </span>
            <h2 className="mt-4 font-serif text-[32px] font-medium leading-tight tracking-tight text-[#1d1d1f]">
              Cuéntenos su caso.
            </h2>

            <form
              method="post"
              action="#"
              className="mt-8 grid gap-6"
              aria-label="Formulario de contacto"
            >
              <Field label="Nombre completo *" name="nombre" required />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Correo electrónico *" name="email" type="email" required />
                <Field label="Teléfono" name="telefono" type="tel" />
              </div>
              <Field label="Materia de la consulta" name="materia" />
              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="border-b border-[#d2d2d7] bg-transparent py-3 text-[15px] text-[#1d1d1f] outline-none transition-colors focus:border-[#1d1d1f] placeholder:text-[#86868b]"
                />
              </div>

              <label className="flex items-start gap-3 pt-1 text-[13px] leading-relaxed text-[#6e6e73]">
                <input
                  type="checkbox"
                  name="privacidad"
                  required
                  className="mt-[2px] h-4 w-4 shrink-0 accent-[#1d1d1f]"
                />
                <span>
                  Acepto que los datos entregados se utilizarán exclusivamente
                  para dar respuesta a esta consulta. *
                </span>
              </label>

              <div className="pt-2">
                <button type="submit" className="btn-primary">
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>

      {/* MAPA */}
      <section className="bg-[#f5f5f7] py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Ubicación</span>
              <h3 className="mt-3 font-serif text-[28px] font-medium leading-tight tracking-tight text-[#1d1d1f]">
                Centro de Concepción
              </h3>
            </div>
            <p className="max-w-sm text-[14px] text-[#6e6e73]">
              A pocos minutos caminando de los Tribunales de Justicia de
              Concepción, con estacionamientos en las inmediaciones.
            </p>
          </div>
          <div
            className="overflow-hidden border border-[#d2d2d7]/60"
            style={{ aspectRatio: "16/7" }}
          >
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
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.22em] text-gold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-[#d2d2d7] bg-transparent py-3 text-[15px] text-[#1d1d1f] outline-none transition-colors focus:border-[#1d1d1f]"
      />
    </div>
  );
}
