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
        title={
          <>
            Evaluamos su caso con reserva y sin{" "}
            <span className="italic text-gold">compromiso inicial</span>.
          </>
        }
        lead={
          <>
            Si desea conversar con nosotros, puede escribirnos, llamarnos o
            visitar la oficina en el centro de Concepción. Responderemos dentro
            del siguiente día hábil.
          </>
        }
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      />

      <section className="bg-bone py-24 md:py-28">
        <Container className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="eyebrow">Oficina</p>
              <p className="mt-3 font-serif text-2xl leading-tight tracking-tight text-ink md:text-3xl">
                {site.contact.address}
              </p>
              <p className="mt-1 text-base text-ink-muted">
                {site.contact.city}
              </p>
            </div>

            <div className="grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Teléfono</p>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="mt-3 block font-serif text-xl text-ink"
                >
                  {site.contact.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow">Correo electrónico</p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="mt-3 block font-serif text-xl text-ink"
                >
                  {site.contact.email}
                </a>
              </div>
              <div>
                <p className="eyebrow">Horario de atención</p>
                <p className="mt-3 text-base text-ink">
                  {site.contact.hours}
                </p>
              </div>
            </div>

            <div className="border-t border-ink/10 pt-10">
              <p className="eyebrow">Reserva y confidencialidad</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
                Toda consulta que nos haga llegar será tratada con estricta
                confidencialidad. Nuestra respuesta inicial no implica aún la
                aceptación del encargo ni la constitución formal de una
                relación profesional.
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="border-t border-ink/10 pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0">
            <p className="eyebrow">Enviar consulta</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              Cuéntenos brevemente su caso.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Complete el siguiente formulario. Campos marcados con * son
              obligatorios.
            </p>

            <form
              method="post"
              action="#"
              className="mt-10 grid gap-6"
              aria-label="Formulario de contacto"
            >
              <Field label="Nombre completo *" name="nombre" required />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Correo electrónico *" name="email" type="email" required />
                <Field label="Teléfono" name="telefono" type="tel" />
              </div>
              <Field label="Materia de la consulta" name="materia" />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensaje"
                  className="eyebrow text-ink"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  className="border-b border-ink/30 bg-transparent py-3 text-base text-ink outline-none transition-colors focus:border-ink"
                />
              </div>

              <label className="flex items-start gap-3 pt-2 text-xs leading-relaxed text-ink-muted">
                <input
                  type="checkbox"
                  name="privacidad"
                  required
                  className="mt-[0.2rem] h-4 w-4 shrink-0 accent-ink"
                />
                <span>
                  Acepto que los datos entregados serán utilizados
                  exclusivamente para dar respuesta a esta consulta. *
                </span>
              </label>

              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-ink px-6 py-4 text-xs uppercase tracking-eyebrow text-bone transition-colors hover:bg-ink-soft"
                >
                  Enviar consulta
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>

      {/* MAPA */}
      <section className="border-t border-ink/10 bg-bone-warm/40 py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Ubicación</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                Centro de Concepción
              </h3>
            </div>
            <p className="max-w-md text-sm text-ink-muted">
              A pocos minutos caminando de los Tribunales de Justicia de
              Concepción y con acceso a estacionamientos en las inmediaciones.
            </p>
          </div>
          <div className="mt-10 overflow-hidden border border-ink/10" style={{ aspectRatio: "16/7" }}>
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
      <label htmlFor={name} className="eyebrow text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-ink/30 bg-transparent py-3 text-base text-ink outline-none transition-colors focus:border-ink"
      />
    </div>
  );
}
