import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();
  return (
    <div className="productList">
      {cart.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
