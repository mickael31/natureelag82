# Natur'Elag82 - React + Vite + TypeScript + Tailwind

Refonte complete du site vitrine Natur'Elag82 avec architecture SPA statique, design mobile-first, SEO local, et assets images integres localement.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- lucide-react
- EmailJS (optionnel)

## Structure principale

```text
src/
  components/
  data/
  lib/
  types/
public/
  images/
scripts/
  fetch-assets.mjs
docs/
  assets-inventory.md
assets-manifest.json
```

## Prerequis

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
```

## Recuperation des assets visuels

Le manifest `assets-manifest.json` contient les URLs source verifiees et les chemins locaux cibles.

```bash
npm run fetch:assets
```

Le script telecharge les images dans `public/images/**` avec des noms stables.

## Developpement local

```bash
npm run dev
```

## Verifications

```bash
npm run typecheck
npm run lint
npm run build
```

## Formulaire de contact (statique)

Le site fonctionne sans backend Node.

- Mode 1: EmailJS (si variables configurees)
- Mode 2: fallback `mailto:` (si EmailJS n'est pas configure)

Copier `.env.example` vers `.env` puis renseigner:

```bash
VITE_EMAILJS_ENABLED=true
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
```

Si ces variables sont absentes, le formulaire ouvre le client email avec un message pre-rempli.

## Deploiement IONOS Deploy Now (GitHub Actions)

Workflows versionnes:

- `.github/workflows/natureelag82-orchestration.yaml`
- `.github/workflows/natureelag82-build.yaml`
- `.github/workflows/deploy-to-ionos.yaml`

### Configuration GitHub requise

Configurer dans `Settings > Secrets and variables > Actions`:

- Variable repository:
  - `IONOS_PROJECT_ID`
- Secrets repository:
  - `IONOS_API_KEY`
  - `IONOS_SSH_KEY`

Le workflow `check readiness` echoue volontairement (`exit 1`) si un de ces parametres est absent.

### Procedure de verification rapide

1. Ouvrir l'onglet `Actions`.
2. Lancer `Deploy Now: Orchestration` via `Run workflow`.
3. Verifier:
   - Si variable/secrets manquants: echec explicite avec message `Missing IONOS_*`.
   - Si tout est configure: `check readiness` passe, puis `build` demarre.

### Parametres build/deploy

- Build command: `npm run build`
- Output folder: `dist`
- SPA fallback: `public/.htaccess` (copie dans `dist/.htaccess`)

## SEO local integre

- meta title/description
- Open Graph
- Twitter Card
- canonical
- schema.org `ProfessionalService` en JSON-LD

## Inventaire des images

- Inventaire detaille: `docs/assets-inventory.md`
- Mapping type dans l'app: `src/data/assets.ts`

## Notes

- Aucun avis client fictif n'est ajoute.
- Les contenus non confirmes doivent etre marques `a confirmer`.
