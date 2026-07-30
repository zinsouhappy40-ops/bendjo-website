import type { CartItem as CartItemData } from "../../types/Cart";

interface CartItemProps {
  item: CartItemData;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
}

function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <li className="border-t border-ink/15 py-5 first:border-t-0 first:pt-0">
      <div className="flex gap-4">
        <img className="h-20 w-16 rounded-bendjo-sm object-cover" src={product.image} alt="" width="64" height="80" loading="lazy" decoding="async" />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl text-ink">{product.name}</h3>
          <p className="mt-1 text-sm text-ink/75">{product.format}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button type="button" className="min-h-11 min-w-11 rounded-bendjo-sm border border-ink/20 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf" onClick={() => onDecrease(product.id)} aria-label={`Diminuer la quantité de ${product.name}`}>
              −
            </button>
            <span className="min-w-8 text-center text-sm text-ink" aria-label={`Quantité : ${quantity}`}>{quantity}</span>
            <button type="button" className="min-h-11 min-w-11 rounded-bendjo-sm border border-ink/20 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf" onClick={() => onIncrease(product.id)} aria-label={`Augmenter la quantité de ${product.name}`}>
              +
            </button>
            <button type="button" className="min-h-11 rounded-bendjo-sm px-3 text-sm text-ink underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf" onClick={() => onRemove(product.id)}>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
