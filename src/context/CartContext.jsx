import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      return [...prev, { ...item, inCart: 1 }];
    });
  };

  const providerObject = { cart, addToCart };
  return (
    <CartContext.Provider value={providerObject}>
      {children}
    </CartContext.Provider>
  );
}
