import type { SiteCompany } from "../types/site";

export const company: SiteCompany = {
  name: "Natur'Elag82",
  phoneDisplay: "06 79 98 41 26",
  phoneRaw: "+33679984126",
  email: "contact@natur-elag82.fr",
  location: "Montauban",
  department: "Tarn-et-Garonne (82)",
  openingHoursLabel: "Lun-Ven : 7h30-18h30, Sam : 8h-12h",
  openingHours: [
    {
      label: "Lun-Ven",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:30"
    },
    {
      label: "Sam",
      days: ["Saturday"],
      opens: "08:00",
      closes: "12:00"
    }
  ],
  zone: [
    "Montauban",
    "Tarn-et-Garonne (82)",
    "Bressols",
    "Montbeton",
    "Montech",
    "Castelsarrasin",
    "Moissac",
    "Caussade",
    "Nègrepelisse",
    "Lafrançaise",
    "Labastide-Saint-Pierre",
    "Grisolles",
    "Verdun-sur-Garonne"
  ],
  keyMetrics: [
    {
      value: "10+",
      label: "ans d'expérience"
    },
    {
      value: "500+",
      label: "interventions réalisées"
    },
    {
      value: "100%",
      label: "suivi de chantier"
    }
  ]
};

export const siteSeo = {
  title: "Élagage et abattage à Montauban (82) | Natur'Elag82",
  description:
    "Natur'Elag82 intervient à Montauban et dans le Tarn-et-Garonne (82) pour l'élagage d'arbres, l'abattage et étêtage, la location de bennes, la petite maçonnerie et l'entretien d'espaces verts.",
  canonicalUrl: "https://natur-elag82.fr/"
};
