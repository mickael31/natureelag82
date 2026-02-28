import { Axe, Hammer, Sprout, TreePine, Truck, type LucideIcon } from "lucide-react";
import { services } from "../../data/services";
import type { ServiceIconName } from "../../types/site";

const icons: Record<ServiceIconName, LucideIcon> = {
  TreePine,
  Axe,
  Truck,
  Hammer,
  Sprout
};

export function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="py-20">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="section-tag">Nos services</span>
          <h2 className="section-title mt-4">Prestations d'élagage et travaux extérieurs</h2>
          <p className="mt-4 text-sand-100/80">
            Des interventions techniques, propres et planifiées pour particuliers et professionnels autour de Montauban.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-3xl border border-pine-200/20 bg-charcoal-800/85 shadow-[0_16px_34px_rgba(0,0,0,0.28)]"
              >
                <div className="relative">
                  <img
                    src={service.image.publicPath}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/75 to-transparent" aria-hidden="true" />
                </div>
                <div className="p-5">
                  <p className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pine-500/15 text-pine-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </p>
                  <h3 className="mt-4 text-2xl uppercase text-sand-100">{service.title}</h3>
                  <p className="mt-2 text-sm text-sand-100/80">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
