"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = {
      nombre: String(form.get("nombre") || "").trim(),
      email: String(form.get("email") || "").trim(),
      telefono: String(form.get("telefono") || "").trim(),
      materia: String(form.get("materia") || "").trim(),
      mensaje: String(form.get("mensaje") || "").trim(),
      empresa: String(form.get("empresa") || "").trim(),
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "No fue posible enviar la consulta.");
      }

      event.currentTarget.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No fue posible enviar la consulta.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" aria-label="Contacto">
      <input
        type="text"
        name="empresa"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <Field label="Nombre *" name="nombre" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email *" name="email" type="email" required />
        <Field label="Telefono" name="telefono" type="tel" />
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-dark mt-1 w-fit disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {status === "sent" ? (
        <p className="text-[13px] leading-relaxed text-gray-500">
          Consulta enviada correctamente. Le responderemos a la brevedad.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-[13px] leading-relaxed text-brand-600">
          {error}
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
