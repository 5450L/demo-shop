import React from "react";
import productCardStyles from "./ProductCard.module.css";

function ProductCard({
  title,
  price,
  category,
  description,
  image,
  addToCart,
}) {
  return (
    <div className={productCardStyles.productCard}>
      <div className={productCardStyles.imageContainer}>
        <img src={image} />
      </div>
      <div className={productCardStyles.textInfo}>
        <h4 className={productCardStyles.title}>{title}</h4>
        <div className={productCardStyles.purchase}>
          <p className={productCardStyles.price}>{price} $</p>
          <button
            onClick={() => {
              let product = {
                title,
                price,
                category,
                description,
                image,
                amount: 1,
              };
              addToCart(product);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
