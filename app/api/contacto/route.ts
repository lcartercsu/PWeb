import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  materia?: string;
  mensaje?: string;
  empresa?: string;
};

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud invalida." }, { status: 400 });
  }

  if (payload.empresa) {
    return NextResponse.json({ ok: true });
  }

  const nombre = payload.nombre?.trim();
  const email = payload.email?.trim();
  const telefono = payload.telefono?.trim();
  const materia = payload.materia?.trim();
  const mensaje = payload.mensaje?.trim();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan datos obligatorios." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "El email no es valido." }, { status: 400 });
  }

  try {
    const smtpHost = requiredEnv("SMTP_HOST");
    const smtpPort = Number(requiredEnv("SMTP_PORT"));
    const smtpSecure = requiredEnv("SMTP_SECURE") === "true";
    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPass = requiredEnv("SMTP_PASS");
    const contactTo = requiredEnv("CONTACT_TO");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = materia ? `Consulta web: ${materia}` : "Consulta desde garcianeiman.cl";
    const text = [
      "Nueva consulta enviada desde el sitio web.",
      "",
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      telefono ? `Telefono: ${telefono}` : null,
      materia ? `Materia: ${materia}` : null,
      "",
      "Mensaje:",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <p>Nueva consulta enviada desde el sitio web.</p>
      <p>
        <strong>Nombre:</strong> ${escapeHtml(nombre)}<br>
        <strong>Email:</strong> ${escapeHtml(email)}<br>
        ${telefono ? `<strong>Telefono:</strong> ${escapeHtml(telefono)}<br>` : ""}
        ${materia ? `<strong>Materia:</strong> ${escapeHtml(materia)}<br>` : ""}
      </p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: `"Formulario web" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact_form_error", error);
    return NextResponse.json(
      { error: "No fue posible enviar la consulta. Intente nuevamente." },
      { status: 500 },
    );
  }
}
