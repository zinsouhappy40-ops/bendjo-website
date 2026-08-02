import { useMemo, useState } from "react";
import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";
import WhatsAppOrderCTA from "./WhatsAppOrderCTA";
import EmptyState from "../ui/EmptyState";
import { X } from "@phosphor-icons/react";

interface CartProps {
  floating?: boolean;
  panel?: boolean;
  panelOpen?: boolean;
  onClose?: () => void;
}

function Cart({ floating = false, panel = false, panelOpen = false, onClose }: CartProps) {
  const { state, dispatch, itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  function returnFocusToProducts() {
    window.setTimeout(() => {
      document.querySelector<HTMLButtonElement>('button[aria-label^="Ajouter"]')?.focus();
    }, 0);
  }

  function handleDecrease(productId: string) {
    const item = state.items.find(({ product }) => product.id === productId);
    dispatch({ type: "decrease", productId });
    if (!panel && state.items.length === 1 && item?.quantity === 1) returnFocusToProducts();
  }

  function handleRemove(productId: string) {
    dispatch({ type: "remove", productId });
    if (!panel && state.items.length === 1) returnFocusToProducts();
  }

  function handleClear() {
    dispatch({ type: "clear" });
    if (!panel) returnFocusToProducts();
  }

  const subtotal = useMemo(
    () => state.items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [state.items],
  );

  if (panel && !panelOpen) {
    return null;
  }

  if (panel) {
    return (
      <section id="cart-panel" className="fixed inset-x-3 top-[calc(76px+0.75rem)] z-50 overflow-hidden rounded-bendjo-md border border-leaf/15 bg-leaf p-4 text-on-leaf shadow-bendjo-cart sm:absolute sm:inset-x-auto sm:right-0 sm:top-[calc(100%+0.75rem)] sm:w-[23rem] sm:p-5" role="dialog" aria-modal="false" aria-labelledby="cart-panel-title">
        <div className="flex items-start justify-between gap-4 border-b border-cream/20 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-on-leaf">Votre sélection</p>
            <h2 id="cart-panel-title" className="mt-1 font-display text-2xl leading-tight text-on-leaf">{itemCount} article{itemCount > 1 ? "s" : ""}</h2>
          </div>
          <button type="button" autoFocus className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-bendjo-sm border border-cream/40 text-xl text-on-leaf transition-colors hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" aria-label="Fermer la sélection" onClick={onClose}>
             <X size={20} weight="regular" aria-hidden="true" />
          </button>
        </div>

        {state.items.length === 0 ? (
          <div className="py-6">
            <p className="font-display text-xl text-on-leaf">Votre sélection est vide.</p>
            <p className="mt-2 text-sm leading-6 text-on-leaf">Ajoutez une infusion pour préparer votre commande.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-3 pt-3">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-on-leaf">Articles</p>
              <button type="button" className="min-h-11 rounded-bendjo-sm px-2 text-xs font-semibold text-on-leaf underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" onClick={handleClear}>Vider la sélection</button>
            </div>
            <ul className="mt-1 max-h-[min(15rem,35svh)] overflow-y-auto pr-1">
              {state.items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  compact
                  onIncrease={(productId) => dispatch({ type: "increase", productId })}
                  onDecrease={handleDecrease}
                  onRemove={handleRemove}
                />
              ))}
            </ul>
            <div className="mt-3 border-t border-cream/20 pt-3">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm text-on-leaf">Sous-total</p>
                <p className="font-display text-2xl text-on-leaf">{subtotal.toLocaleString("fr-FR")} FCFA</p>
              </div>
              <p className="mt-1 text-xs text-on-leaf">Chaque boîte contient 10 sachets.</p>
              <div className="mt-3 [&_button]:!bg-cream [&_button]:!text-leaf [&_button]:hover:!bg-cream/90 [&_p]:!text-on-leaf">
                <WhatsAppOrderCTA items={state.items} />
              </div>
            </div>
          </>
        )}
      </section>
    );
  }

  if (state.items.length === 0) {
    return (
      <section className="mt-20" aria-labelledby="cart-title">
        <h2 id="cart-title" className="font-display text-3xl text-leaf">Votre sélection</h2>
        <div className="mt-6">
          <EmptyState title="Votre panier est vide." description="Ajoutez une infusion pour préparer votre sélection." />
        </div>
      </section>
    );
  }

  if (floating) {
    return (
      <section id="selection" className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-md rounded-bendjo-md border border-cream/15 bg-leaf p-3 text-on-leaf shadow-bendjo-cart sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[23rem] sm:max-w-none sm:p-4" aria-labelledby="cart-title">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full bg-cream px-2 text-sm font-semibold text-copy" aria-live="polite" aria-atomic="true">{itemCount}</span>
            <div className="min-w-0">
              <h2 id="cart-title" className="font-display text-xl leading-tight text-on-leaf">Votre sélection</h2>
              <p className="mt-0.5 truncate text-xs text-on-leaf">{subtotal.toLocaleString("fr-FR")} FCFA · {itemCount} article{itemCount > 1 ? "s" : ""}</p>
            </div>
          </div>
          <button type="button" className="min-h-11 shrink-0 rounded-bendjo-sm border border-cream/40 px-3 text-sm font-semibold text-on-leaf transition-colors hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" aria-expanded={isOpen} aria-controls="cart-details" onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? "Masquer" : "Voir ma sélection"}
          </button>
        </div>

        <div id="cart-details" className={`${isOpen ? "block" : "hidden"} sm:block`}>
          <div className="mt-3 border-t border-cream/20 pt-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-on-leaf">Articles</p>
              <button type="button" className="min-h-11 rounded-bendjo-sm px-2 text-xs font-semibold text-on-leaf underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" onClick={handleClear}>Vider</button>
            </div>
            <ul className="mt-1 max-h-[min(15rem,35svh)] overflow-y-auto pr-1">
              {state.items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  compact
                  onIncrease={(productId) => dispatch({ type: "increase", productId })}
                  onDecrease={handleDecrease}
                  onRemove={handleRemove}
                />
              ))}
            </ul>
          </div>
          <div className="mt-3 border-t border-cream/20 pt-3">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm text-on-leaf">Sous-total</p>
              <p className="font-display text-2xl text-on-leaf">{subtotal.toLocaleString("fr-FR")} FCFA</p>
            </div>
            <p className="mt-1 text-xs text-on-leaf">Chaque boîte contient 10 sachets.</p>
            <div className="mt-3 [&_button]:!bg-cream [&_button]:!text-leaf [&_button]:hover:!bg-cream/90 [&_p]:!text-on-leaf">
              <WhatsAppOrderCTA items={state.items} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8 grid gap-10 border-t border-leaf/15 pt-8 sm:mt-12 sm:pt-10 lg:grid-cols-[1fr_0.7fr] lg:gap-20" aria-labelledby="cart-title">
      <div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <div>
            <h2 id="cart-title" className="font-display text-3xl text-leaf">Votre sélection</h2>
            <p className="mt-1 text-sm text-copy">{itemCount} article{itemCount > 1 ? "s" : ""}</p>
          </div>
          <button type="button" className="min-h-11 rounded-bendjo-sm text-sm font-semibold text-copy underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf sm:px-3" onClick={handleClear}>
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
        <h3 className="font-display text-2xl text-leaf">Récapitulatif</h3>
        <div className="mt-4 flex items-baseline justify-between border-t border-leaf/15 pt-4">
          <p className="text-sm text-copy">Sous-total</p>
          <p className="font-display text-2xl text-leaf">{subtotal.toLocaleString("fr-FR")} FCFA</p>
        </div>
        <p className="mt-2 text-xs text-copy">Chaque boîte contient 10 sachets.</p>
        <div className="mt-6">
          <WhatsAppOrderCTA items={state.items} />
        </div>
      </aside>
    </section>
  );
}

export default Cart;
