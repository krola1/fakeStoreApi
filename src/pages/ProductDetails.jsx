import { useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductQuery";
export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, error, isLoading, isError } = useProductDetails(id);

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Could not load data {error}</h1>;

  return (
    <div className="productDetailsWrapper">
      <div className="productDetailsCard">
        <div className="productDetailsImageWrapper">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="productDetailsInfo">
          <h1>{product.title}</h1>

          <p className="productDetailsPrice">${product.price}</p>

          <p className="productDetailsRating">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>

          <p className="productDetailsCategory">
            Category: <span>{product.category}</span>
          </p>

          <p className="productDetailsDescription">{product.description}</p>

          <button
            className="addToCartButton"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
