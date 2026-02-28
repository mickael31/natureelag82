import { Leaf, Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../../data/company";
import { navigationItems } from "../../data/nav";

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-pine-300/20 bg-charcoal-900/90 backdrop-blur-md">
      <div className="site-container flex h-20 items-center gap-4">
        <a
          href="#accueil"
          className="group inline-flex items-center gap-3 rounded-full border border-pine-200/20 bg-pine-900/40 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-300"
          aria-label="Retour à l'accueil"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pine-500/20 text-pine-100">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl uppercase tracking-wide text-sand-100">
            Natur'<span className="text-pine-300">Elag82</span>
          </span>
        </a>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-lg border border-pine-200/30 bg-pine-800/40 p-2 text-sand-100 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>

        <nav
          id="main-navigation"
          aria-label="Navigation principale"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute left-4 right-4 top-24 flex-col gap-2 rounded-2xl border border-pine-200/20 bg-charcoal-900/95 p-4 shadow-2xl lg:static lg:flex lg:flex-1 lg:flex-row lg:justify-end lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-sand-100/90 transition hover:bg-pine-500/20 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href={`tel:${company.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pine-500 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-charcoal-900 transition hover:bg-pine-400 lg:ml-3"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Appeler
          </a>
        </nav>
      </div>
    </header>
  );
}
