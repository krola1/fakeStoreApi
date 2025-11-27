import { useCart } from "../context/CartContext";

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
      {inCart ? (
        <button>Remove From cart{inCart}</button>
      ) : (
        <button onClick={() => addToCart(props)}>Add to cart</button>
      )}
    </div>
  );
}
