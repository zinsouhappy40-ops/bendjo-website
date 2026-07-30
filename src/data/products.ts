import hibiscusImage from "../assets/images/products/WhatsApp Image 2026-07-22 at 22.21.54.jpeg";
import basilImage from "../assets/images/products/637760295_122173934096783112_5011838352445723711_n.jpg";
import lemongrassImage from "../assets/images/products/515492394_122145102872783112_1937735358128729147_n.jpg";
import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: "hibiscus",
    name: "Infusion Hibiscus",
    format: "Boîte de 10 sachets",
    image: hibiscusImage,
    alt: "Packaging réel de l’infusion Hibiscus BenDjo",
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
