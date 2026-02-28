import emailjs from "@emailjs/browser";
import { company } from "../data/company";
import type { ContactMode, ContactPayload } from "../types/site";

const emailJsEnabled = import.meta.env.VITE_EMAILJS_ENABLED === "true";
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const isEmailJsConfigured =
  emailJsEnabled &&
  Boolean(emailJsPublicKey) &&
  Boolean(emailJsServiceId) &&
  Boolean(emailJsTemplateId);

function buildMailtoLink(payload: ContactPayload): string {
  const subject = encodeURIComponent(`Demande de devis - ${payload.fullName}`);
  const body = encodeURIComponent(
    [
      `Nom: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Téléphone: ${payload.phone}`,
      `Ville: ${payload.city || "Non précisée"}`,
      `Service: ${payload.service}`,
      "",
      "Message:",
      payload.message,
      "",
      `Envoyé depuis: ${window.location.href}`
    ].join("\n")
  );

  return `mailto:${company.email}?subject=${subject}&body=${body}`;
}

export async function sendContactRequest(payload: ContactPayload): Promise<ContactMode> {
  if (isEmailJsConfigured) {
    await emailjs.send(
      emailJsServiceId as string,
      emailJsTemplateId as string,
      {
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        city: payload.city,
        service: payload.service,
        message: payload.message,
        source_url: window.location.href,
        sent_at: new Date().toLocaleString("fr-FR", {
          dateStyle: "medium",
          timeStyle: "short"
        })
      },
      emailJsPublicKey as string
    );

    return "emailjs";
  }

  const mailtoLink = buildMailtoLink(payload);
  window.location.assign(mailtoLink);
  return "mailto";
}
