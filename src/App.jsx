import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

const company = {
  name: "Natur'Elag82",
  phoneDisplay: "06 79 98 41 26",
  phoneRaw: "+33679984126",
  email: "contact@natur-elag82.fr",
  city: "Montauban, Tarn-et-Garonne (82)",
  hours: "Lun-Ven : 7h30-18h30, Sam : 8h-12h",
};

const heroImage = "/source-assets/public/uploads/hero/hero_arbor_bg.png";
const heroLogo = "/source-assets/public/uploads/hero/hero_logo_1771789291_3fd33ea2.png";

const serviceImages = {
  pruning: "/source-assets/public/uploads/services/service_pruning.png",
  felling: "/source-assets/public/uploads/services/service_felling.png",
  dumpster: "/source-assets/public/uploads/services/service_dumpster.png",
  masonry: "/source-assets/public/uploads/services/service_masonry.png",
  maintenance: "/source-assets/public/uploads/services/service_maintenance.png",
};

const services = [
  {
    icon: "🌳",
    title: "Élagage d'arbres",
    description:
      "Taille douce ou sévère pour la santé des arbres, la sécurité des abords et la mise en valeur de votre extérieur.",
    image: serviceImages.pruning,
  },
  {
    icon: "🪓",
    title: "Abattage et étêtage",
    description:
      "Interventions sécurisées, y compris en accès complexe, pour les arbres dangereux ou gênants.",
    image: serviceImages.felling,
  },
  {
    icon: "🚚",
    title: "Location de bennes",
    description:
      "Bennes pour déchets verts, gravats et tout-venant avec dépôt, reprise et évacuation.",
    image: serviceImages.dumpster,
  },
  {
    icon: "🧱",
    title: "Petits travaux extérieurs",
    description:
      "Finitions de maçonnerie, aménagements de terrain et remises en état après intervention.",
    image: serviceImages.masonry,
  },
  {
    icon: "🍃",
    title: "Entretien d'espaces verts",
    description:
      "Débroussaillage, nettoyage et entretien pour garder des extérieurs propres toute l'année.",
    image: serviceImages.maintenance,
  },
];

const processSteps = [
  "Contact par téléphone ou formulaire.",
  "Analyse du besoin et visite terrain si nécessaire.",
  "Devis détaillé clair et sans surprise.",
  "Intervention planifiée selon vos contraintes.",
  "Nettoyage de fin de chantier et recommandations.",
];

const zones = [
  "Montauban",
  "Bressols",
  "Montbeton",
  "Montech",
  "Castelsarrasin",
  "Moissac",
  "Caussade",
  "Nègrepelisse",
  "Lafrançaise",
  "Labastide-Saint-Pierre",
  "Grisolles",
  "Verdun-sur-Garonne",
];

const gallery = [
  { src: heroImage, label: "Intervention terrain" },
  { src: serviceImages.pruning, label: "Élagage" },
  { src: serviceImages.felling, label: "Abattage" },
  { src: serviceImages.dumpster, label: "Bennes" },
  { src: serviceImages.masonry, label: "Travaux extérieurs" },
  { src: serviceImages.maintenance, label: "Entretien espaces verts" },
  { src: heroLogo, label: "Identité Natur'Elag82" },
];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#pourquoi", label: "Pourquoi nous" },
    { href: "#processus", label: "Processus" },
    { href: "#zone", label: "Zone" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="container header-row">
        <a href="#top" className="brand">
          <span className="brand-mark">🌿</span>
          <span>
            Natur'<strong>Elag82</strong>
          </span>
        </a>
        <button
          className={`menu-btn${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "open" : ""}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-call" href={`tel:${company.phoneRaw}`}>
          Appeler
        </a>
      </div>
    </header>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const emailEnabled = import.meta.env.VITE_EMAILJS_ENABLED === "true";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const canUseEmailJs = emailEnabled && publicKey && serviceId && templateId;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (form.website) return;
    setStatus({ type: "", message: "" });
    setSending(true);

    const sentAt = new Date().toLocaleString("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      city: form.city.trim() || "Non précisée",
      service: form.service || "Non précisé",
      message: form.message.trim(),
      sent_at: sentAt,
      page_url: window.location.href,
    };

    try {
      if (canUseEmailJs) {
        await emailjs.send(serviceId, templateId, payload, publicKey);
      } else {
        const subject = encodeURIComponent(
          `Nouvelle demande de devis - ${payload.fullName}`,
        );
        const body = encodeURIComponent(
          [
            `Nom: ${payload.fullName}`,
            `Email: ${payload.email}`,
            `Téléphone: ${payload.phone}`,
            `Ville: ${payload.city}`,
            `Service: ${payload.service}`,
            "",
            "Message:",
            payload.message,
            "",
            `Envoyé le: ${payload.sent_at}`,
            `Source: ${payload.page_url}`,
          ].join("\n"),
        );
        window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      }

      setStatus({
        type: "success",
        message:
          "Demande envoyée. Merci, nous revenons vers vous rapidement.",
      });
      setForm({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        service: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Impossible d'envoyer votre demande pour l'instant. Appelez-nous directement.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Devis gratuit</p>
          <h2>Demandez votre devis</h2>
          <p>
            Réponse rapide pour vos besoins en élagage, abattage, étêtage et
            location de bennes.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-card reveal">
            <p>
              Un appel est souvent le plus rapide pour planifier l'intervention.
            </p>
            <a className="contact-link" href={`tel:${company.phoneRaw}`}>
              📞 {company.phoneDisplay}
            </a>
            <a className="contact-link" href={`mailto:${company.email}`}>
              ✉️ {company.email}
            </a>
            <p>📍 {company.city}</p>
            <p>🕒 {company.hours}</p>
          </aside>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <input
              type="text"
              name="website"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
            />

            <div className="field-row">
              <label>
                Nom
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.fr"
                />
              </label>
            </div>

            <div className="field-row">
              <label>
                Téléphone
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                />
              </label>
              <label>
                Ville
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Montauban"
                />
              </label>
            </div>

            <label>
              Service souhaité
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un service</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Message
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Décrivez votre projet et vos contraintes d'accès."
              />
            </label>

            {status.message ? (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            ) : null}

            {!canUseEmailJs ? (
              <p className="form-status info">
                Mode email direct actif. Ajoutez vos clés EmailJS pour un envoi
                automatique.
              </p>
            ) : null}

            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? "Envoi..." : "Envoyer ma demande"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useRevealOnScroll();

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero" style={{ "--hero-image": `url(${heroImage})` }}>
          <div className="hero-overlay" />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <p className="eyebrow">Élagage · Abattage · Bennes à Montauban (82)</p>
              <h1>
                Reprenez le contrôle
                <br />
                de vos extérieurs
              </h1>
              <p>
                Natur'Elag82 accompagne particuliers et professionnels pour
                l'élagage, l'abattage, la location de bennes et les travaux
                extérieurs avec une exécution rapide et soignée.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Demander un devis
                </a>
                <a href="#services" className="btn btn-outline">
                  Voir nos services
                </a>
              </div>
              <div className="hero-stats">
                <article>
                  <strong>10+</strong>
                  <span>ans d'expérience</span>
                </article>
                <article>
                  <strong>500+</strong>
                  <span>interventions</span>
                </article>
                <article>
                  <strong>82</strong>
                  <span>Tarn-et-Garonne</span>
                </article>
              </div>
            </div>
            <div className="hero-panel reveal">
              <img src={heroLogo} alt="Logo Natur'Elag82" />
              <p>Intervention locale avec la même équipe du devis à la finition.</p>
              <a className="btn btn-call" href={`tel:${company.phoneRaw}`}>
                📞 {company.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Services</p>
              <h2>Nos prestations à Montauban et alentours</h2>
              <p>
                Une intervention structurée, des outils adaptés et un vrai suivi
                de chantier.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <article
                  className="service-card reveal"
                  key={service.title}
                  style={{ "--delay": `${index * 70}ms`, "--bg": `url(${service.image})` }}
                >
                  <div className="shade" />
                  <div className="service-content">
                    <span className="service-icon">{service.icon}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pourquoi" className="section section-alt">
          <div className="container why-wrap">
            <div className="reveal">
              <p className="eyebrow">Pourquoi nous</p>
              <h2>Un partenaire terrain qui tient ses engagements</h2>
              <p>
                Nous privilégions les délais tenus, la sécurité de chantier et des
                prix lisibles. Votre projet est cadré dès le premier échange.
              </p>
            </div>
            <div className="value-list">
              {[
                "Intervention rapide",
                "Matériel adapté",
                "Suivi de chantier",
                "Devis clair",
              ].map((item, index) => (
                <article className="value-item reveal" key={item} style={{ "--delay": `${index * 80}ms` }}>
                  {item}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processus" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Processus</p>
              <h2>Un déroulé simple et efficace</h2>
            </div>
            <ol className="timeline">
              {processSteps.map((step, index) => (
                <li className="reveal" key={step} style={{ "--delay": `${index * 75}ms` }}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="zone" className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Zone d'intervention</p>
              <h2>Montauban et Tarn-et-Garonne (82)</h2>
              <p>
                Déplacements sur les principales communes du secteur pour
                particuliers et professionnels.
              </p>
            </div>
            <div className="zones">
              {zones.map((zone, index) => (
                <span className="zone-pill reveal" key={zone} style={{ "--delay": `${index * 35}ms` }}>
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Galerie</p>
              <h2>Visuels de nos prestations</h2>
            </div>
            <div className="gallery">
              {gallery.map((item, index) => (
                <figure className="reveal" key={item.label} style={{ "--delay": `${index * 65}ms` }}>
                  <img src={item.src} alt={item.label} loading="lazy" />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>
            © {year} {company.name} · Élagage, abattage, bennes et travaux
            extérieurs.
          </p>
          <div className="footer-links">
            <a href={`tel:${company.phoneRaw}`}>Tel: {company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </footer>

      <a className="floating-call" href={`tel:${company.phoneRaw}`}>
        Appeler maintenant
      </a>
    </div>
  );
}
