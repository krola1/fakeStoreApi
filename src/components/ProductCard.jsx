export default function ProductCard(props) {
  const { title, image, price } = props;
  return (
    <div className="productCard">
      <h3>{title}</h3> <p>${price}</p>
      <img src={image} alt={title} />
      <button>Add to cart</button>
    </div>
  );
}
