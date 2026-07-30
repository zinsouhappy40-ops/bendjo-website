import { useMemo } from "react";
import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";
import WhatsAppOrderCTA from "./WhatsAppOrderCTA";
import EmptyState from "../ui/EmptyState";

function Cart() {
  const { state, dispatch, itemCount } = useCart();

  function returnFocusToProducts() {
    window.setTimeout(() => {
      document.querySelector<HTMLButtonElement>('button[aria-label^="Ajouter"]')?.focus();
    }, 0);
  }

  function handleDecrease(productId: string) {
    const item = state.items.find(({ product }) => product.id === productId);
    dispatch({ type: "decrease", productId });
    if (state.items.length === 1 && item?.quantity === 1) returnFocusToProducts();
  }

  function handleRemove(productId: string) {
    dispatch({ type: "remove", productId });
    if (state.items.length === 1) returnFocusToProducts();
  }

  function handleClear() {
    dispatch({ type: "clear" });
    returnFocusToProducts();
  }

  const subtotal = useMemo(
    () => state.items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [state.items],
  );

  if (state.items.length === 0) {
    return (
      <section className="mt-20" aria-labelledby="cart-title">
        <h2 id="cart-title" className="font-display text-3xl text-ink">Votre sélection</h2>
        <div className="mt-6">
          <EmptyState title="Votre panier est vide." description="Ajoutez une infusion pour préparer votre sélection." />
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 grid gap-10 border-t border-ink/15 pt-10 lg:grid-cols-[1fr_0.7fr] lg:gap-20" aria-labelledby="cart-title">
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 id="cart-title" className="font-display text-3xl text-ink">Votre sélection</h2>
            <p className="mt-1 text-sm text-ink/75">{itemCount} article{itemCount > 1 ? "s" : ""}</p>
          </div>
          <button type="button" className="min-h-11 rounded-bendjo-sm px-3 text-sm font-semibold text-ink underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf" onClick={handleClear}>
            Vider la sélection
          </button>
        </div>
        <ul className="mt-6">
          {state.items.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onIncrease={(productId) => dispatch({ type: "increase", productId })}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          ))}
        </ul>
      </div>
      <aside className="self-start rounded-bendjo-md bg-kraft/15 p-6">
        <h3 className="font-display text-2xl text-ink">Récapitulatif</h3>
        <div className="mt-4 flex items-baseline justify-between border-t border-ink/15 pt-4">
          <p className="text-sm text-ink/75">Sous-total</p>
          <p className="font-display text-2xl text-ink">{subtotal.toLocaleString("fr-FR")} FCFA</p>
        </div>
        <p className="mt-2 text-xs text-ink/70">Chaque boîte contient 10 sachets.</p>
        <div className="mt-6">
          <WhatsAppOrderCTA items={state.items} />
        </div>
      </aside>
    </section>
  );
}

export default Cart;
