import "./ProductCard.css";

function ProductCard({
  image,
  title,
  price,
  inStock = true,
}) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
        className="product-image"
      />

      <h3>{title}</h3>

      <p className="price">
        ₹{price}
      </p>

      <span
        className={
          inStock
            ? "stock available"
            : "stock unavailable"
        }
      >
        {inStock
          ? "In Stock"
          : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;