"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { CartData } from "../types/cart.model";
import { getUserCart } from "../actions/cart.action";

interface CartContextType {
  cartDetails: CartData | null;
  getCartDetails: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [cartDetails, setCartDetails] = useState<CartData | null>(null);

  async function getCartDetails() {
    const response = await getUserCart();
    console.log(response?.data, "carttt");
    setCartDetails(response?.data);
  }

  useEffect(() => {
    getCartDetails();
  }, []);

  return (
    <CartContext.Provider value={{ cartDetails, getCartDetails }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}
