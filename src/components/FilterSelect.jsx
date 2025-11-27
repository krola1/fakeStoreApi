export default function FilterSelect(props) {
  const { filter, setFilter, categories, sortBy, setSortBy } = props;

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
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="none">None</option>
        <option value="price-asc">Price (low-high)</option>
        <option value="price-desc">Price (high-low)</option>
        <option value="rating-asc">Rating(low-high)</option>
        <option value="rating-desc">Rating(high-low)</option>
      </select>
    </div>
  );
}
