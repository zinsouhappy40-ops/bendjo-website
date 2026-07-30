import type { Product } from "./Product";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "add"; product: Product }
  | { type: "increase"; productId: string }
  | { type: "decrease"; productId: string }
  | { type: "remove"; productId: string }
  | { type: "clear" };
