import type { CartItem } from "../types/Cart";

export function buildWhatsAppMessage(items: CartItem[]): string {
  const lines = items.map(({ product, quantity }) => `- ${product.name} · ${quantity} unité${quantity > 1 ? "s" : ""}`);
  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  return [
    "Bonjour BenDjo, je souhaite commander :",
    ...lines,
    `Sous-total produits : ${total.toLocaleString("fr-FR")} FCFA`,
    "Merci de me confirmer la disponibilité.",
  ].join("\n");
}
