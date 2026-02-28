import { company, siteSeo } from "../data/company";
import { getAssetById } from "../data/assets";
import { services } from "../data/services";
import type { LocalBusinessSchema } from "../types/site";

export interface SeoContent {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  ogImageAlt: string;
}

const heroAsset = getAssetById("hero-background");

export const seoContent: SeoContent = {
  title: siteSeo.title,
  description: siteSeo.description,
  canonicalUrl: siteSeo.canonicalUrl,
  ogImage: `https://natur-elag82.fr${heroAsset.publicPath}`,
  ogImageAlt: heroAsset.alt
};

export function buildLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    description: siteSeo.description,
    url: siteSeo.canonicalUrl,
    inLanguage: "fr-FR",
    areaServed: company.zone,
    serviceType: services.map((service) => service.title),
    telephone: company.phoneRaw,
    email: company.email,
    image: seoContent.ogImage,
    openingHoursSpecification: company.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: company.location,
      addressRegion: company.department,
      addressCountry: "FR"
    }
  };
}

export function upsertMetaTag(attribute: "name" | "property", key: string, value: string): void {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}=\"${key}\"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

export function upsertCanonicalLink(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

export function upsertJsonLdScript(id: string, payload: object): void {
  let scriptTag = document.getElementById(id) as HTMLScriptElement | null;

  if (!scriptTag) {
    scriptTag = document.createElement("script");
    scriptTag.id = id;
    scriptTag.type = "application/ld+json";
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(payload, null, 2);
}
