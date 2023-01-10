import React from "react";
import productCardStyles from "./ProductCard.module.css";

function ProductCard({ title, price, category, description, image }) {
  return (
    <div className={productCardStyles.productCard}>
      <div className={productCardStyles.imageContainer}>
        <img src={image} />
      </div>
      <div className={productCardStyles.textInfo}>
        <h4>{title}</h4>
        <p>{category}</p>
        <p>{price} $</p>
      </div>
    </div>
  );
}

export default ProductCard;
