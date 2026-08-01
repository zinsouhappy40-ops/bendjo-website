import hibiscusImage from "../assets/images/optimized/product-hibiscus-thumb-320.webp";
import basilImage from "../assets/images/optimized/product-basil-thumb-320.webp";
import lemongrassImage from "../assets/images/optimized/product-citronnelle-thumb-320.webp";
import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: "hibiscus",
    name: "Infusion Hibiscus",
    format: "Boîte de 10 sachets",
    image: hibiscusImage,
    alt: "Composition éditoriale autour d’une boîte d’infusion Hibiscus BenDjo, de fleurs d’Hibiscus et d’une tasse d’infusion",
    price: 1500,
  },
  {
    id: "basil",
    name: "Infusion Basilic",
    format: "Boîte de 10 sachets",
    image: basilImage,
    alt: "Packaging réel des infusions BenDjo, dont l’infusion Basilic",
    price: 1500,
  },
  {
    id: "lemongrass-clove",
    name: "Infusion Citronnelle & Clou de girofle",
    format: "Boîte de 10 sachets",
    image: lemongrassImage,
    alt: "Packaging réel de l’infusion Citronnelle et clou de girofle BenDjo",
    price: 1500,
  },
];
