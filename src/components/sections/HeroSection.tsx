import { ArrowRight, PhoneCall } from "lucide-react";
import { company } from "../../data/company";
import { getAssetById } from "../../data/assets";

const heroBackground = getAssetById("hero-background");
const heroLogo = getAssetById("hero-logo");

export function HeroSection(): JSX.Element {
  return (
    <section id="accueil" className="relative overflow-hidden pb-20 pt-16 sm:pt-20 lg:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground.publicPath})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,30,24,0.96)_0%,rgba(20,30,24,0.82)_45%,rgba(20,30,24,0.94)_100%)]"
        aria-hidden="true"
      />
      <div className="texture-overlay absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="site-container relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-floatIn">
          <span className="section-tag">Élagage · Abattage · Bennes à Montauban (82)</span>
          <h1 className="mt-5 max-w-3xl text-4xl uppercase leading-tight text-sand-100 sm:text-5xl lg:text-6xl">
            Refonte moderne pour vos extérieurs, avec une équipe locale et fiable
          </h1>
          <p className="mt-5 max-w-2xl text-base text-sand-100/90 sm:text-lg">
            {company.name} accompagne particuliers et professionnels pour l'élagage d'arbres, l'abattage et étêtage,
            la location de bennes, la petite maçonnerie et l'entretien d'espaces verts.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-pine-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-charcoal-900 transition hover:bg-pine-400"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-sand-100/35 bg-charcoal-900/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-sand-100 transition hover:border-sand-100/70"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {company.keyMetrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-pine-200/30 bg-charcoal-900/55 p-4">
                <p className="font-display text-3xl uppercase tracking-wide text-pine-200">{metric.value}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-sand-100/80">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="glass-panel animate-floatIn p-6" style={{ animationDelay: "120ms" }}>
          <img
            src={heroLogo.publicPath}
            alt={heroLogo.alt}
            width={heroLogo.width}
            height={heroLogo.height}
            className="mx-auto w-full max-w-[260px] rounded-xl bg-white p-3"
            loading="eager"
            decoding="async"
          />
          <p className="mt-5 text-sm text-sand-100/85">
            Basés à {company.location}, nous intervenons rapidement dans tout le {company.department} avec un suivi de
            chantier annoncé à 100%.
          </p>
        </aside>
      </div>
    </section>
  );
}
