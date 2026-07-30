import { createContext, type Dispatch } from "react";
import type { CartAction, CartState } from "../types/Cart";

export interface CartContextValue {
  state: CartState;
  dispatch: Dispatch<CartAction>;
  itemCount: number;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);
