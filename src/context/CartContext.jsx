/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);

  ///---------ADDS ITEM TO CART------------
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      /// first check existing
      return existing
        ? //if true run map
          prev.map((i) =>
            //map checks if id matches. if match incart = incart +1, if not return i
            i.id === item.id ? { ...i, inCart: i.inCart + 1 } : i
          )
        : ///default return if existing is false, add to list, add incart =1
          [...prev, { ...item, inCart: 1 }];
    });
  };

  /// ----- REMOVES ITEM FROM CART-----
  const removeFromCart = (id) => {
    setCart((prev) => {
      //-- sets cart to an array that does NOT contain an item with the selected ID.
      return prev.filter((i) => id !== i.id);
    });
  };

  ///-- UPDATES QUANTITY------
  const updateQuantity = (id, quantity) => {
    setCart((prev) => {
      // check if item is in cart
      const existing = prev.find((i) => i.id === id);
      // if not in cart retun null
      if (!existing) return null;
      // Find item with correct id, and   set incart === quantity
      const updated = prev.map((i) =>
        i.id === id ? { ...i, inCart: quantity } : i
      );
      /// return all elements where quetity is larger than 0
      return updated.filter((i) => i.inCart > 0);
    });
  };

  const providerObject = { cart, addToCart, removeFromCart, updateQuantity };
  return (
    <CartContext.Provider value={providerObject}>
      {children}
    </CartContext.Provider>
  );
}
