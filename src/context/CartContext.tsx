import { useCallback, useEffect, useMemo, useReducer, useRef, useState, type Dispatch, type ReactNode } from "react";
import type { CartAction, CartState } from "../types/Cart";
import { CartContext } from "./CartContextDefinition";
import { products } from "../data/products";

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add": {
      const existingItem = state.items.find(({ product }) => product.id === action.product.id);
      const cartProduct = products.find(({ id }) => id === action.product.id) ?? action.product;

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return { items: [...state.items, { product: cartProduct, quantity: 1 }] };
    }
    case "increase":
      return {
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    case "decrease":
      return {
        items: state.items.flatMap((item) => {
          if (item.product.id !== action.productId) return [item];
          if (item.quantity <= 1) return [];
          return [{ ...item, quantity: item.quantity - 1 }];
        }),
      };
    case "remove":
      return { items: state.items.filter(({ product }) => product.id !== action.productId) };
    case "clear":
      return initialState;
  }
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, reducerDispatch] = useReducer(cartReducer, initialState);
  const [announcement, setAnnouncement] = useState("");
  const previousStateRef = useRef(state);
  const lastActionRef = useRef<CartAction | null>(null);
  const itemCount = useMemo(() => state.items.reduce((total, item) => total + item.quantity, 0), [state.items]);
  const dispatch: Dispatch<CartAction> = useCallback((action) => {
    lastActionRef.current = action;
    reducerDispatch(action);
  }, []);

  useEffect(() => {
    const action = lastActionRef.current;
    const previousState = previousStateRef.current;
    previousStateRef.current = state;
    if (!action) return;

    const subtotal = state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const summary = `${itemCount} article${itemCount > 1 ? "s" : ""} sélectionné${itemCount > 1 ? "s" : ""}. Sous-total : ${subtotal.toLocaleString("fr-FR")} FCFA.`;
    let update = "";

    if (action.type === "add") {
      update = `${action.product.name} ajoutée au panier.`;
    } else if (action.type === "increase") {
      const item = state.items.find(({ product }) => product.id === action.productId);
      if (item) update = `Quantité d’${item.product.name} augmentée à ${item.quantity}.`;
    } else if (action.type === "decrease") {
      const previousItem = previousState.items.find(({ product }) => product.id === action.productId);
      const item = state.items.find(({ product }) => product.id === action.productId);
      if (item) update = `Quantité d’${item.product.name} diminuée à ${item.quantity}.`;
      else if (previousItem) update = `${previousItem.product.name} retirée du panier.`;
    } else if (action.type === "remove") {
      const previousItem = previousState.items.find(({ product }) => product.id === action.productId);
      if (previousItem) update = `${previousItem.product.name} retirée du panier.`;
    } else {
      update = "Panier vidé.";
    }

    if (itemCount === 0) update += " Votre panier est vide.";
    setAnnouncement(`${update} ${summary}`);
  }, [itemCount, state]);

  return (
    <CartContext.Provider value={{ state, dispatch, itemCount }}>
      {children}
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </CartContext.Provider>
  );
}
