import { useCart } from "../context/CartContext";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { title, image, price, inCart, id, rating } = props;
  const { removeFromCart } = useCart();

  return (
    <Link to={`/products/${id}`} className="cardLink">
      <div className="productCard">
        {inCart && (
          <button
            className="closeButton"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              removeFromCart(id);
            }}
          >
            x
          </button>
        )}
        <h3>{title}</h3> <p>${price}</p>
        <img src={image} alt={title} />
        <CartButton {...props} />
        <p>⭐{rating.rate}</p>
      </div>
    </Link>
  );
}
