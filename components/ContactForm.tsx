"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const nombre = String(form.get("nombre") || "").trim();
    const email = String(form.get("email") || "").trim();
    const telefono = String(form.get("telefono") || "").trim();
    const materia = String(form.get("materia") || "").trim();
    const mensaje = String(form.get("mensaje") || "").trim();

    const subject = materia || `Consulta desde ${site.domain}`;
    const body = [
      "Consulta enviada desde el sitio web.",
      "",
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      telefono ? `Teléfono: ${telefono}` : null,
      materia ? `Materia: ${materia}` : null,
      "",
      "Mensaje:",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" aria-label="Contacto">
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
          className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none transition-colors focus:border-brand-600 placeholder:text-gray-500"
        />
      </div>

      <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-500">
        <input type="checkbox" name="privacidad" required className="mt-0.5 h-4 w-4 accent-brand-600" />
        Acepto que los datos se usen exclusivamente para responder esta consulta. *
      </label>

      <button type="submit" className="btn-dark mt-1 w-fit">
        Enviar
      </button>

      {sent ? (
        <p className="text-[13px] leading-relaxed text-gray-500">
          Se abrió su aplicación de correo para completar el envío.
        </p>
      ) : null}
    </form>
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
        className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none transition-colors focus:border-brand-600"
      />
    </div>
  );
}
