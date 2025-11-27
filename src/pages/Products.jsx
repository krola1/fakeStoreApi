import { useState } from "react";
import FilterSelect from "../components/FilterSelect";
import ProductCard from "../components/ProductCard";
import { useAllProducts } from "../hooks/useProductQuery";

export default function Products() {
  const { data, isLoading, isError, error } = useAllProducts();
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("none");

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Could not load products, error: {error}</h1>;
  if (!data) return null;
  //// Set of categories
  const categories = [...new Set(data.map((i) => i.category))];
  //// filter based on filter state
  const filteredList =
    filter === "all" ? data : data.filter((item) => item.category === filter);
  ///---- SORTER---------
  if (sortBy === "price-asc") {
    filteredList.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredList.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    filteredList.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sortBy === "rating-asc") {
    filteredList.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  return (
    <>
      <FilterSelect
        categories={categories}
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="productList">
        {filteredList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
