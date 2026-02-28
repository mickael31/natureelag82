import { MapPin } from "lucide-react";
import { interventionZones } from "../../data/zones";

export function AreaSection(): JSX.Element {
  return (
    <section id="zone" className="border-y border-pine-200/20 bg-charcoal-900/80 py-20">
      <div className="site-container">
        <div className="rounded-3xl border border-pine-200/25 bg-gradient-to-br from-pine-900/45 to-charcoal-900/70 p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pine-500/20 text-pine-100">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <span className="section-tag">Zone d'intervention</span>
              <h2 className="section-title mt-3">Montauban et Tarn-et-Garonne (82)</h2>
            </div>
          </div>

          <p className="mt-5 max-w-4xl text-sand-100/80">
            Nous intervenons autour de Montauban pour vos besoins en élagage, abattage, location de bennes et entretien
            extérieur, avec des délais adaptés à la nature de votre chantier.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {interventionZones.map((zone) => (
              <li
                key={zone}
                className="rounded-full border border-pine-200/25 bg-charcoal-900/60 px-4 py-2 text-sm font-semibold text-sand-100/90"
              >
                {zone}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
