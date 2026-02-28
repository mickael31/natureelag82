import { AlertCircle, BadgeCheck } from "lucide-react";
import { trustNotice, trustSectionPoints } from "../../data/trust";

export function TrustSection(): JSX.Element {
  return (
    <section id="confiance" className="py-20">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="section-tag">Avis et confiance</span>
          <h2 className="section-title mt-4">Des preuves concrètes, pas de promesses floues</h2>
          <p className="mt-4 text-sand-100/80">
            La vitrine met en avant des éléments vérifiables sur l'activité terrain. Aucun témoignage n'est publié sans
            source confirmée.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {trustSectionPoints.map((point) => (
            <article key={point.id} className="glass-panel p-5">
              <BadgeCheck className="h-6 w-6 text-pine-200" aria-hidden="true" />
              <h3 className="mt-4 text-xl uppercase text-sand-100">{point.title}</h3>
              <p className="mt-2 text-sm text-sand-100/80">{point.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200/25 bg-amber-50/5 p-4 text-sm text-amber-100/90">
          <p className="inline-flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {trustNotice}
          </p>
        </div>
      </div>
    </section>
  );
}
