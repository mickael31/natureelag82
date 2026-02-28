import { useEffect } from "react";
import {
  buildLocalBusinessSchema,
  seoContent,
  upsertCanonicalLink,
  upsertJsonLdScript,
  upsertMetaTag
} from "../../lib/seo";

export function SeoHead(): null {
  useEffect(() => {
    document.documentElement.lang = "fr";
    document.title = seoContent.title;

    upsertMetaTag("name", "description", seoContent.description);
    upsertMetaTag("name", "robots", "index,follow,max-image-preview:large");
    upsertMetaTag("name", "theme-color", "#2a6543");

    upsertMetaTag("property", "og:type", "website");
    upsertMetaTag("property", "og:locale", "fr_FR");
    upsertMetaTag("property", "og:site_name", "Natur'Elag82");
    upsertMetaTag("property", "og:title", seoContent.title);
    upsertMetaTag("property", "og:description", seoContent.description);
    upsertMetaTag("property", "og:url", seoContent.canonicalUrl);
    upsertMetaTag("property", "og:image", seoContent.ogImage);
    upsertMetaTag("property", "og:image:alt", seoContent.ogImageAlt);

    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", seoContent.title);
    upsertMetaTag("name", "twitter:description", seoContent.description);
    upsertMetaTag("name", "twitter:image", seoContent.ogImage);

    upsertCanonicalLink(seoContent.canonicalUrl);
    upsertJsonLdScript("localbusiness-jsonld", buildLocalBusinessSchema());
  }, []);

  return null;
}
