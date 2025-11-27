import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartButton(props) {
  const { inCart } = props;
  const { addToCart } = useCart();
  const [amount, setAmount] = useState(inCart);

  /// CARDS THAT RENDERS IN CART
  if (inCart)
    return (
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        min={1}
      />
    );

  /// CARDS THAT RENDERS IN PRODUCTS
  if (!inCart)
    return <button onClick={() => addToCart(props)}>Add to cart</button>;
}
