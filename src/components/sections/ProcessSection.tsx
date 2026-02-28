import { processSteps } from "../../data/process";

export function ProcessSection(): JSX.Element {
  return (
    <section id="processus" className="py-20">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="section-tag">Processus</span>
          <h2 className="section-title mt-4">Une méthode simple et structurée</h2>
          <p className="mt-4 text-sand-100/80">
            Chaque chantier suit une séquence claire pour garantir qualité d'exécution, sécurité et visibilité sur les
            délais.
          </p>
        </div>

        <ol className="mt-10 grid gap-4">
          {processSteps.map((step, index) => (
            <li
              key={step.id}
              className="grid gap-4 rounded-2xl border border-pine-200/20 bg-charcoal-800/80 p-5 sm:grid-cols-[56px_1fr] sm:items-center"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pine-500 text-lg font-extrabold text-charcoal-900">
                {index + 1}
              </span>
              <div>
                <h3 className="text-2xl uppercase text-sand-100">{step.title}</h3>
                <p className="mt-1 text-sm text-sand-100/80">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
