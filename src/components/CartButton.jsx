import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartButton(props) {
  const { inCart, id } = props;
  const { addToCart, updateQuantity } = useCart();
  const [amount, setAmount] = useState(inCart);

  /// CARDS THAT RENDERS IN CART
  if (inCart)
    return (
      <input
        className="numberInput"
        type="number"
        min={1}
        value={amount}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onChange={(e) => setAmount(e.target.value)}
        onBlur={() => updateQuantity(id, amount)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.target.blur();
          }
        }}
      />
    );

  /// CARDS THAT RENDERS IN PRODUCTS
  if (!inCart)
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addToCart(props);
        }}
      >
        Add to cart
      </button>
    );
}
