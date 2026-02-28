import type { ProcessStep } from "../types/site";

export const processSteps: ProcessStep[] = [
  {
    id: "contact",
    title: "Prise de contact",
    description: "Vous nous appelez ou utilisez le formulaire pour expliquer votre besoin."
  },
  {
    id: "analyse",
    title: "Analyse sur site",
    description: "Nous étudions l'accès, les contraintes techniques et les priorités du chantier."
  },
  {
    id: "devis",
    title: "Devis clair",
    description: "Vous recevez un devis détaillé, sans ambiguïté sur le périmètre et les délais."
  },
  {
    id: "intervention",
    title: "Intervention sécurisée",
    description: "L'équipe intervient avec le matériel adapté et un suivi de chantier constant."
  },
  {
    id: "finalisation",
    title: "Nettoyage et clôture",
    description: "Le chantier est laissé propre, avec des conseils d'entretien quand nécessaire."
  }
];
