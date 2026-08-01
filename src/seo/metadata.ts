import homeSocialImage from "../assets/images/optimized/home-hero-1024.webp";
import productsSocialImage from "../assets/images/optimized/products-hero-1024.webp";
import servicesSocialImage from "../assets/images/optimized/services-hero-1024.webp";
import aboutSocialImage from "../assets/images/optimized/about-hero-1024.webp";
import contactSocialImage from "../assets/images/optimized/contact-hero-1024.webp";

export interface RouteMetadata {
  pathname: string;
  title: string;
  description: string;
  image?: string;
  robots?: string;
  canonical?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, "") ?? "";

const organization = {
  "@type": "Organization",
  name: "BenDjo",
  email: "bendjobenin@gmail.com",
  telephone: "+2290153148013",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  areaServed: [
    { "@type": "City", name: "Cotonou" },
    { "@type": "City", name: "Abomey-Calavi" },
  ],
  sameAs: [
    "https://www.facebook.com/BenDjoBenin",
    "https://www.linkedin.com/company/bendjo/",
  ],
};

function withSiteIdentity(data: Record<string, unknown>) {
  if (!configuredSiteUrl) return data;
  return { ...data, "@id": `${configuredSiteUrl}/#organization`, url: configuredSiteUrl };
}

const products = [
  {
    name: "Infusion Hibiscus BenDjo",
    description: "Infusion naturelle à base d’hibiscus, fabriquée au Bénin à partir d’ingrédients locaux.",
  },
  {
    name: "Infusion Basilic BenDjo",
    description: "Infusion naturelle à base de basilic, fabriquée au Bénin à partir d’ingrédients locaux.",
  },
  {
    name: "Infusion Citronnelle et clou de girofle BenDjo",
    description: "Infusion naturelle à la citronnelle et au clou de girofle, fabriquée au Bénin.",
  },
];

function productListStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Infusions naturelles BenDjo",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        brand: { "@type": "Brand", name: "BenDjo" },
        offers: {
          "@type": "Offer",
          price: "1500",
          priceCurrency: "XOF",
          seller: configuredSiteUrl
            ? { "@type": "Organization", "@id": `${configuredSiteUrl}/#organization`, name: "BenDjo" }
            : { "@type": "Organization", name: "BenDjo" },
        },
      },
    })),
  };
}

export const routeMetadata = {
  home: {
    pathname: "/",
    title: "BenDjo | Infusions du Bénin et services aux entreprises",
    description: "Découvrez les infusions naturelles BenDjo, fabriquées au Bénin à partir d’ingrédients locaux, ainsi que ses services de petit-déjeuner et de traiteur.",
    image: homeSocialImage,
    structuredData: {
      "@context": "https://schema.org",
      ...withSiteIdentity(organization),
    },
  },
  products: {
    pathname: "/products",
    title: "Infusions naturelles fabriquées au Bénin | BenDjo",
    description: "Découvrez les infusions BenDjo à l’hibiscus, au basilic, à la citronnelle et au clou de girofle. Boîte de 10 sachets à 1 500 FCFA.",
    image: productsSocialImage,
    structuredData: productListStructuredData(),
  },
  services: {
    pathname: "/services",
    title: "Petit-déjeuner et traiteur pour entreprises | BenDjo",
    description: "BenDjo propose un service de petit-déjeuner en entreprise et un service traiteur pour les événements professionnels, notamment les lancements de produit.",
    image: servicesSocialImage,
  },
  about: {
    pathname: "/about",
    title: "À propos de BenDjo | Infusions fabriquées au Bénin",
    description: "Découvrez BenDjo, ses infusions naturelles fabriquées au Bénin à partir d’ingrédients locaux et ses services destinés aux entreprises.",
    image: aboutSocialImage,
  },
  contact: {
    pathname: "/contact",
    title: "Contacter BenDjo | Infusions et services aux entreprises",
    description: "Écrivez à BenDjo pour une question sur les infusions naturelles ou pour présenter un besoin de petit-déjeuner ou de traiteur en entreprise.",
    image: contactSocialImage,
  },
  notFound: {
    pathname: "/404",
    title: "Page introuvable | BenDjo",
    description: "Cette page n’existe pas ou n’est plus disponible.",
    robots: "noindex, nofollow",
    canonical: false,
  },
} satisfies Record<string, RouteMetadata>;

export const publicRouteMetadata = [
  routeMetadata.home,
  routeMetadata.products,
  routeMetadata.services,
  routeMetadata.about,
  routeMetadata.contact,
];

export function getSiteUrl() {
  return configuredSiteUrl;
}

export function getAbsoluteUrl(pathname: string) {
  return configuredSiteUrl ? `${configuredSiteUrl}${pathname === "/" ? "" : pathname}` : "";
}

export function getAbsoluteAssetUrl(asset: string | undefined) {
  if (!asset || !configuredSiteUrl) return "";
  return asset.startsWith("http") ? asset : `${configuredSiteUrl}${asset.startsWith("/") ? "" : "/"}${asset}`;
}
