import { getAssetById } from "./assets";
import type { ServiceItem } from "../types/site";

export const services: ServiceItem[] = [
  {
    id: "elagage",
    title: "Élagage d'arbres",
    description:
      "Taille douce ou sévère pour préserver la santé des arbres, sécuriser les abords et valoriser vos extérieurs.",
    icon: "TreePine",
    image: getAssetById("service-pruning")
  },
  {
    id: "abattage",
    title: "Abattage et étêtage",
    description:
      "Interventions maîtrisées, y compris en accès complexe, pour les arbres dangereux ou devenus gênants.",
    icon: "Axe",
    image: getAssetById("service-felling")
  },
  {
    id: "bennes",
    title: "Location de bennes",
    description:
      "Mise à disposition de bennes pour déchets verts, gravats et tout-venant avec enlèvement planifié.",
    icon: "Truck",
    image: getAssetById("service-dumpster")
  },
  {
    id: "maconnerie",
    title: "Petits travaux de maçonnerie",
    description:
      "Reprises extérieures, murets et finitions après chantier pour un rendu propre et durable.",
    icon: "Hammer",
    image: getAssetById("service-masonry")
  },
  {
    id: "entretien",
    title: "Entretien d'espaces verts",
    description:
      "Débroussaillage, nettoyage et entretien régulier pour garder des extérieurs sains et entretenus.",
    icon: "Sprout",
    image: getAssetById("service-maintenance")
  }
];
