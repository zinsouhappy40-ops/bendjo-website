import type { CartItem as CartItemData } from "../../types/Cart";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

interface CartItemProps {
  item: CartItemData;
  compact?: boolean;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
}

function CartItem({ item, compact = false, onIncrease, onDecrease, onRemove }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <li className={`border-t py-4 first:border-t-0 first:pt-0 ${compact ? "border-cream/15 text-cream sm:py-3" : "border-ink/15 sm:py-5"}`}>
      <div className="flex gap-4">
        <img className={`${compact ? "h-20 w-16 sm:h-24 sm:w-20" : "h-20 w-16"} shrink-0 rounded-bendjo-sm bg-cream object-cover`} src={product.image} alt={product.alt} width="80" height="96" loading="lazy" decoding="async" />
        <div className="min-w-0 flex-1">
            <h3 className={`font-display text-xl ${compact ? "text-cream" : "text-ink"}`}>{product.name}</h3>
            <p className={`mt-1 text-sm ${compact ? "text-cream/70" : "text-ink/75"}`}>{product.format}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button type="button" className={`min-h-11 min-w-11 rounded-bendjo-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 ${compact ? "border-cream/40 text-cream hover:border-cream/70 hover:bg-cream/15 focus-visible:ring-cream" : "border-ink/20 text-ink hover:border-ink/45 hover:bg-ink/5 focus-visible:ring-leaf"}`} onClick={() => onDecrease(product.id)} aria-label={`Diminuer la quantité d’${product.name}`}>
               <Minus size={17} weight="regular" aria-hidden="true" />
            </button>
            <span className={`min-w-8 text-center text-sm ${compact ? "text-cream" : "text-ink"}`} aria-label={`Quantité : ${quantity}`}>{quantity}</span>
            <button type="button" className={`min-h-11 min-w-11 rounded-bendjo-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 ${compact ? "border-cream/40 text-cream hover:border-cream/70 hover:bg-cream/15 focus-visible:ring-cream" : "border-ink/20 text-ink hover:border-ink/45 hover:bg-ink/5 focus-visible:ring-leaf"}`} onClick={() => onIncrease(product.id)} aria-label={`Augmenter la quantité d’${product.name}`}>
               <Plus size={17} weight="regular" aria-hidden="true" />
            </button>
            <button type="button" className={`min-h-11 rounded-bendjo-sm px-3 text-sm underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 ${compact ? "text-cream hover:text-cream/75 focus-visible:ring-cream" : "text-ink hover:text-ink/70 focus-visible:ring-leaf"}`} onClick={() => onRemove(product.id)} aria-label={`Supprimer ${product.name}`}>
               <Trash size={16} weight="regular" aria-hidden="true" />
               <span>Supprimer</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
