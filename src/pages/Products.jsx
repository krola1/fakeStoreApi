import { useAllProducts } from "../hooks/useProductQuery";

export default function Products() {
  const { data, isLoading, isError, error } = useAllProducts();

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Could not load products, error: {error}</h1>;

  return (
    <div className="productContainer">
      {data.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
