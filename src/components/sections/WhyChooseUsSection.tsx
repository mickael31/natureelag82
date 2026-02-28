import { ShieldCheck } from "lucide-react";
import { company } from "../../data/company";
import { whyChooseUsPoints } from "../../data/trust";

export function WhyChooseUsSection(): JSX.Element {
  return (
    <section id="pourquoi" className="border-y border-pine-200/20 bg-charcoal-900/80 py-20">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="section-tag">Pourquoi nous choisir</span>
          <h2 className="section-title mt-4">Un partenaire local pour des chantiers maîtrisés</h2>
          <p className="mt-4 text-sand-100/80">
            {company.name} intervient avec une méthode claire, du matériel adapté et une attention constante à la
            sécurité. Notre approche privilégie la transparence, la ponctualité et la propreté de fin de chantier.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {company.keyMetrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-pine-200/20 bg-pine-900/30 p-4">
                <p className="font-display text-2xl uppercase text-pine-200">{metric.value}</p>
                <p className="text-xs uppercase tracking-wide text-sand-100/80">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {whyChooseUsPoints.map((item) => (
            <article key={item.id} className="glass-panel p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pine-500/20 text-pine-100">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl uppercase text-sand-100">{item.title}</h3>
              <p className="mt-2 text-sm text-sand-100/80">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
