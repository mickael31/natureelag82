import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { company } from "../../data/company";
import { services } from "../../data/services";
import { isEmailJsConfigured, sendContactRequest } from "../../lib/contact";
import type { ContactPayload } from "../../types/site";

interface FormState extends ContactPayload {
  website: string;
}

type StatusType = "idle" | "success" | "error" | "info";

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "Montauban",
  service: "",
  message: "",
  website: ""
};

export function ContactSection(): JSX.Element {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [statusType, setStatusType] = useState<StatusType>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = useMemo(() => services.map((service) => service.title), []);

  const statusClassName =
    statusType === "success"
      ? "border-pine-300/35 bg-pine-500/10 text-pine-100"
      : statusType === "error"
        ? "border-rose-300/45 bg-rose-500/10 text-rose-100"
        : "border-amber-300/35 bg-amber-500/10 text-amber-100";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (form.website.trim()) {
      return;
    }

    if (!form.fullName || !form.email || !form.phone || !form.service || !form.message) {
      setStatusType("error");
      setStatusMessage("Merci de renseigner tous les champs obligatoires.");
      return;
    }

    setStatusType("idle");
    setStatusMessage("");
    setIsSubmitting(true);

    try {
      const payload: ContactPayload = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
        service: form.service.trim(),
        message: form.message.trim()
      };

      const mode = await sendContactRequest(payload);

      if (mode === "emailjs") {
        setStatusType("success");
        setStatusMessage("Votre demande a bien été envoyée. Nous revenons vers vous rapidement.");
      } else {
        setStatusType("info");
        setStatusMessage("Votre application email s'ouvre avec un message prérempli.");
      }

      setForm(initialFormState);
    } catch {
      setStatusType("error");
      setStatusMessage(
        "L'envoi n'a pas pu aboutir pour le moment. Appelez-nous directement au 06 79 98 41 26."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-pine-200/20 bg-charcoal-900/70 py-20">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="section-tag">Contact et devis</span>
          <h2 className="section-title mt-4">Demandez votre devis gratuit</h2>
          <p className="mt-4 text-sand-100/80">
            Réponse rapide sur Montauban et dans le Tarn-et-Garonne (82). Formulaire compatible site statique.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="glass-panel space-y-4 p-6">
            <h3 className="text-2xl uppercase text-sand-100">Infos directes</h3>
            <a className="contact-line" href={`tel:${company.phoneRaw}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <a className="contact-line" href={`mailto:${company.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {company.email}
            </a>
            <p className="contact-line">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {company.location}, {company.department}
            </p>
            <p className="text-sm text-sand-100/80">Horaires: {company.openingHoursLabel}</p>

            <div className="rounded-xl border border-pine-200/20 bg-charcoal-900/55 p-4 text-xs text-sand-100/75">
              {isEmailJsConfigured
                ? "Mode formulaire: envoi direct EmailJS activé."
                : "Mode formulaire: fallback mailto actif (EmailJS non configuré)."}
            </div>
          </aside>

          <form className="glass-panel p-6" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="website"
              className="sr-only"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="form-label" htmlFor="fullName">
                Nom *
                <input
                  id="fullName"
                  name="fullName"
                  required
                  className="form-input"
                  value={form.fullName}
                  onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                  placeholder="Jean Dupont"
                />
              </label>

              <label className="form-label" htmlFor="email">
                Email *
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="jean@exemple.fr"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="form-label" htmlFor="phone">
                Téléphone *
                <input
                  id="phone"
                  name="phone"
                  required
                  className="form-input"
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="06 12 34 56 78"
                />
              </label>

              <label className="form-label" htmlFor="city">
                Ville
                <input
                  id="city"
                  name="city"
                  className="form-input"
                  value={form.city}
                  onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
                  placeholder="Montauban"
                />
              </label>
            </div>

            <label className="form-label mt-4" htmlFor="service">
              Service demandé *
              <select
                id="service"
                name="service"
                required
                className="form-input"
                value={form.service}
                onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
              >
                <option value="">Sélectionner un service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-label mt-4" htmlFor="message">
              Message *
              <textarea
                id="message"
                name="message"
                required
                className="form-input min-h-36"
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                placeholder="Décrivez votre projet, les accès, les contraintes et le délai souhaité."
              />
            </label>

            {statusMessage ? (
              <p className={`mt-4 rounded-xl border p-3 text-sm ${statusClassName}`} role="status" aria-live="polite">
                {statusMessage}
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-charcoal-900 transition hover:bg-pine-400 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
