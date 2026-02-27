# Natur'Elag82 React

Refonte React/Vite du site `natur-elag82.fr` dans le dossier `nature_elag82`.

## Contenu

- Site one-page moderne (hero, services, process, zone, galerie, contact)
- Photos récupérées depuis le site source dans `public/source-assets/public/uploads/...`
- Formulaire React avec message dynamique
- Envoi EmailJS optionnel (fallback `mailto:` si non configuré)

## Installation

```bash
cd nature_elag82
npm install
```

## Lancer en local

```bash
npm run dev
```

## Build

```bash
npm run build
```

Important pour IONOS: publie le contenu de `dist/` a la racine du site.
Si `index.html` se retrouve dans `dist/index.html` sur le serveur (au lieu de la racine), Apache peut renvoyer `403 Forbidden`.

## Config EmailJS (optionnel)

Copier `.env.example` vers `.env` et renseigner:

- `VITE_EMAILJS_ENABLED=true`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

Sans ces variables, le formulaire ouvre l'email client (`mailto`) avec les informations préremplies.

## IONOS Deploy Now

Si IONOS affiche `workflow configuration missing`, ce repo contient maintenant les workflows attendus:

- `.github/workflows/deploy-to-ionos.yaml`
- `.github/workflows/natureelag82-build.yaml`
- `.github/workflows/natureelag82-orchestration.yaml`

Secrets GitHub requis pour le deploiement IONOS:

- `IONOS_API_KEY`
- `IONOS_SSH_KEY`
- `IONOS_PROJECT_ID` (secret ou variable GitHub)
