import { useState, useEffect } from "react";
import { useAllProducts } from "../hooks/useProductQuery";
import { Link } from "react-router-dom";
export default function Home() {
  const { data } = useAllProducts();
  const [index, setIndex] = useState(0);

  /// sorts rating from high to low, slices of first 5
  const topProducts = data
    ? data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5)
    : [];

  useEffect(() => {
    if (topProducts.length === 0) return;

    const interval = setInterval(() => {
      /// modulo looop
      setIndex((prev) => (prev + 1) % topProducts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [topProducts.length]);

  ///Finds product based on index in topproducts array
  const product = topProducts[index];

  return (
    <div className="topProductWrapper">
      <Link to={`/products/${product.id}`} className="cardLink">
        <div className="topProductCard">
          <h3 className="topProductTitle">{product.title}</h3>

          <div className="topProductImageWrapper">
            <img src={product.image} alt={product.title} />
          </div>

          <p className="topProductPrice">${product.price}</p>
          <p className="topProductRating">⭐ {product.rating.rate}</p>
        </div>
      </Link>
    </div>
  );
}
