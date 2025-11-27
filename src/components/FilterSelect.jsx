export default function FilterSelect(props) {
  const { filter, setFilter, categories } = props;

  return (
    <div>
      {/* categories */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">all</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      {/* sorting */}
      <select>
        <option value="none">None</option>
        <option value="price-asc">Price (low-high)</option>
        <option value="price-desc">Price (high-low)</option>
        <option value="rating-asc">Rating(low-high)</option>
        <option value="price-desc">Rating(high-low)</option>
      </select>
    </div>
  );
}
