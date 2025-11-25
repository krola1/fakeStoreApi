import { useCart } from "../context/CartContext";

export default function ProductCard(props) {
  const { title, image, price } = props;
  const { addToCart } = useCart();
  return (
    <div className="productCard">
      <h3>{title}</h3> <p>${price}</p>
      <img src={image} alt={title} />
      <button onClick={() => addToCart(props)}>Add to cart</button>
    </div>
  );
}
