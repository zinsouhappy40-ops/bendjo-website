import { useEffect } from "react";
import { getAbsoluteAssetUrl, getAbsoluteUrl, type RouteMetadata } from "../../seo/metadata";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

function DocumentMeta({ pathname, title, description, image, robots = "index, follow", canonical: shouldCanonicalize = true, structuredData }: RouteMetadata) {
  useEffect(() => {
    const canonicalUrl = shouldCanonicalize ? getAbsoluteUrl(pathname) : "";
    const imageUrl = getAbsoluteAssetUrl(image);

    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", robots);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "fr_FR");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "BenDjo");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = canonicalUrl;
    } else {
      canonical?.remove();
    }

    document.querySelector('script[data-seo-json-ld="true"]')?.remove();
    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonLd = "true";
      script.textContent = JSON.stringify(structuredData).replace(/</g, "\\u003c");
      document.head.append(script);
    }
  }, [description, image, pathname, robots, shouldCanonicalize, structuredData, title]);

  return null;
}

export default DocumentMeta;
