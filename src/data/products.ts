import hibiscusImage from "../assets/images/optimized/packaging-hibiscus-480.webp";
import basilImage from "../assets/images/optimized/packaging-basilic-480.webp";
import lemongrassImage from "../assets/images/optimized/packaging-citronnelle-480.webp";
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
    alt: "Composition éditoriale autour d’une boîte d’infusion Basilic BenDjo et de feuilles fraîches",
    price: 1500,
  },
  {
    id: "lemongrass-clove",
    name: "Infusion Citronnelle & Clou de girofle",
    format: "Boîte de 10 sachets",
    image: lemongrassImage,
    alt: "Composition éditoriale autour d’une boîte d’infusion Citronnelle et clou de girofle BenDjo",
    price: 1500,
  },
];
