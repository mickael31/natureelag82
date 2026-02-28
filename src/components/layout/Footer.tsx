import { company } from "../../data/company";
import { navigationItems } from "../../data/nav";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-pine-200/20 bg-charcoal-900 py-12" role="contentinfo">
      <div className="site-container grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl uppercase tracking-wide text-sand-100">
            Natur'<span className="text-pine-300">Elag82</span>
          </p>
          <p className="mt-3 max-w-xl text-sm text-sand-100/80">
            Élagage, abattage, location de bennes, petits travaux de maçonnerie et entretien d'espaces verts à
            Montauban et dans le Tarn-et-Garonne (82).
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-wide text-sand-100">Navigation</h2>
          <ul className="mt-3 space-y-2 text-sm text-sand-100/85">
            {navigationItems
              .filter((item) => item.href !== "#accueil")
              .map((item) => (
                <li key={item.href}>
                  <a className="hover:text-pine-200" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-wide text-sand-100">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-sand-100/85">
            <li>
              <a className="hover:text-pine-200" href={`tel:${company.phoneRaw}`}>
                Tél: {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-pine-200" href={`mailto:${company.email}`}>
                Email: {company.email}
              </a>
            </li>
            <li>
              {company.location}, {company.department}
            </li>
            <li>{company.openingHoursLabel}</li>
          </ul>
        </div>
      </div>

      <div className="site-container mt-10 border-t border-pine-200/20 pt-6">
        <p className="text-xs text-sand-100/70">© {year} {company.name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
