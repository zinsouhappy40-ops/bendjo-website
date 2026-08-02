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
    <li className={`border-t py-4 first:border-t-0 first:pt-0 ${compact ? "border-cream/15 text-on-leaf sm:py-3" : "border-leaf/15 sm:py-5"}`}>
      <div className="flex gap-4">
        <img className={`${compact ? "h-20 w-16 sm:h-24 sm:w-20" : "h-20 w-16"} shrink-0 rounded-bendjo-sm bg-cream object-cover`} src={product.image} alt={product.alt} width="80" height="96" loading="lazy" decoding="async" />
        <div className="min-w-0 flex-1">
            <h3 className={`font-display text-xl ${compact ? "text-on-leaf" : "text-leaf"}`}>{product.name}</h3>
            <p className={`mt-1 text-sm ${compact ? "text-on-leaf" : "text-copy"}`}>{product.format}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
             <button type="button" className={`group inline-flex min-h-11 min-w-11 items-center justify-center rounded-bendjo-sm transition-colors focus-visible:outline-none focus-visible:ring-2 ${compact ? "text-on-leaf focus-visible:ring-cream" : "text-leaf focus-visible:ring-leaf"}`} onClick={() => onDecrease(product.id)} aria-label={`Diminuer la quantité d’${product.name}`}>
               <span className={`inline-flex h-8 w-8 items-center justify-center rounded-bendjo-sm border transition-colors ${compact ? "border-cream/40 group-hover:border-cream/70 group-hover:bg-cream/15" : "border-leaf/20 group-hover:border-leaf/45 group-hover:bg-leaf/5"}`}>
                 <Minus size={16} weight="regular" aria-hidden="true" />
               </span>
             </button>
            <span className={`min-w-8 text-center text-sm ${compact ? "text-on-leaf" : "text-copy"}`} aria-label={`Quantité : ${quantity}`}>{quantity}</span>
             <button type="button" className={`group inline-flex min-h-11 min-w-11 items-center justify-center rounded-bendjo-sm transition-colors focus-visible:outline-none focus-visible:ring-2 ${compact ? "text-on-leaf focus-visible:ring-cream" : "text-leaf focus-visible:ring-leaf"}`} onClick={() => onIncrease(product.id)} aria-label={`Augmenter la quantité d’${product.name}`}>
               <span className={`inline-flex h-8 w-8 items-center justify-center rounded-bendjo-sm border transition-colors ${compact ? "border-cream/40 group-hover:border-cream/70 group-hover:bg-cream/15" : "border-leaf/20 group-hover:border-leaf/45 group-hover:bg-leaf/5"}`}>
                 <Plus size={16} weight="regular" aria-hidden="true" />
               </span>
             </button>
             <button type="button" className={`inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-bendjo-sm px-3 text-sm underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 ${compact ? "text-on-leaf hover:text-on-leaf focus-visible:ring-cream" : "text-copy hover:text-copy focus-visible:ring-leaf"}`} onClick={() => onRemove(product.id)} aria-label={`Supprimer ${product.name}`}>
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
