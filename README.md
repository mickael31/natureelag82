# Natur'Elag82 - Refonte React + Vite + TypeScript + Tailwind

Refonte complète du site vitrine Natur'Elag82 avec architecture SPA statique, design mobile-first, SEO local et intégration locale des images du site source.

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

## Prérequis

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
```

## Récupération des assets visuels

Le manifest `assets-manifest.json` contient les URLs sources vérifiées et les chemins locaux cibles.

```bash
npm run fetch:assets
```

Ce script télécharge les images dans `public/images/**` avec les noms stabilisés.

## Développement local

```bash
npm run dev
```

## Vérifications

```bash
npm run typecheck
npm run lint
npm run build
```

## Formulaire de contact (statique)

Le site fonctionne sans backend Node.

- Mode 1: EmailJS (si variables configurées)
- Mode 2: fallback `mailto:` (si EmailJS non configuré)

Copier `.env.example` vers `.env` puis renseigner:

```bash
VITE_EMAILJS_ENABLED=true
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
```

Si ces variables sont absentes, le formulaire ouvre le client email avec un message prérempli.

## Déploiement IONOS Deploy Now (statique / SPA)

1. Configurer la commande de build: `npm run build`
2. Configurer le dossier de publication: `dist`
3. Vérifier que le fichier `public/.htaccess` est bien embarqué pour le fallback SPA Apache.

Le fallback permet d'éviter les erreurs 404 sur rafraîchissement d'URL SPA.

## SEO local intégré

- balises meta title/description
- Open Graph
- Twitter card
- canonical
- schema.org `ProfessionalService` injecté en JSON-LD

## Inventaire des images

- Inventaire détaillé: `docs/assets-inventory.md`
- Données typées utilisées dans le code: `src/data/assets.ts`

## Notes

- Aucun avis client fictif n'est ajouté.
- Les contenus non confirmés doivent être explicitement marqués "à confirmer".
