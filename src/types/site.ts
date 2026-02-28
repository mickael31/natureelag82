export type AssetStatus = "confirmed" | "a-confirmer";
export type ContactMode = "emailjs" | "mailto";

export interface AssetRecord {
  id: string;
  fileName: string;
  localPath: string;
  publicPath: string;
  sourceUrl: string;
  usage: string;
  alt: string;
  width: number;
  height: number;
  status: AssetStatus;
}

export interface SiteMetric {
  value: string;
  label: string;
}

export interface OpeningHours {
  label: string;
  days: string[];
  opens: string;
  closes: string;
}

export interface SiteCompany {
  name: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  location: string;
  department: string;
  openingHours: OpeningHours[];
  openingHoursLabel: string;
  zone: string[];
  keyMetrics: SiteMetric[];
}

export type ServiceIconName = "TreePine" | "Axe" | "Truck" | "Hammer" | "Sprout";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  image: AssetRecord;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface ContactPayload {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

export interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  description: string;
  url: string;
  inLanguage: "fr-FR";
  areaServed: string[];
  serviceType: string[];
  telephone: string;
  email: string;
  image: string;
  openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: "FR";
  };
}
