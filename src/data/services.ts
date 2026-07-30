import type { Service } from "../types/Service";

export const services: Service[] = [
  {
    id: "infusions",
    name: "Infusions naturelles",
    description: "BenDjo produit et vend des infusions naturelles fabriquées au Bénin à partir d’ingrédients locaux.",
    ctaLabel: "Découvrir nos infusions",
    ctaTarget: "/products",
  },
  {
    id: "corporate-breakfast",
    name: "Petit-déjeuner en entreprise",
    description: "BenDjo propose un service de petit-déjeuner destiné aux entreprises.",
    ctaLabel: "Demander des informations",
    ctaTarget: "/contact",
  },
  {
    id: "catering",
    name: "Service traiteur",
    description: "BenDjo propose un service traiteur, notamment pour les événements de lancement de produit.",
    ctaLabel: "Parler de votre événement",
    ctaTarget: "/contact",
  },
];
