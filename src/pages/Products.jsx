import { useState } from "react";
import FilterSelect from "../components/FilterSelect";
import ProductCard from "../components/ProductCard";
import { useAllProducts } from "../hooks/useProductQuery";

export default function Products() {
  const { data, isLoading, isError, error } = useAllProducts();
  const [filter, setFilter] = useState("all");

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Could not load products, error: {error}</h1>;
  if (!data) return null;

  const categories = [...new Set(data.map((i) => i.category))];

  return (
    <>
      <FilterSelect
        categories={categories}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="productList">
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
