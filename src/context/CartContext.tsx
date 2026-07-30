import { useMemo, useReducer, type ReactNode } from "react";
import type { CartAction, CartState } from "../types/Cart";
import { CartContext } from "./CartContextDefinition";

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add": {
      const existingItem = state.items.find(({ product }) => product.id === action.product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return { items: [...state.items, { product: action.product, quantity: 1 }] };
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
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const itemCount = useMemo(() => state.items.reduce((total, item) => total + item.quantity, 0), [state.items]);

  return <CartContext.Provider value={{ state, dispatch, itemCount }}>{children}</CartContext.Provider>;
}
