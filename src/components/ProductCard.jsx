import { useCart } from "../context/CartContext";
import CartButton from "./CartButton";

export default function ProductCard(props) {
  const { title, image, price, inCart, id } = props;
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="productCard">
      {inCart && (
        <button className="closeButton" onClick={() => removeFromCart(id)}>
          x
        </button>
      )}
      <h3>{title}</h3> <p>${price}</p>
      <img src={image} alt={title} />
      <CartButton {...props} />
    </div>
  );
}
