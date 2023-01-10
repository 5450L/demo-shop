import React from 'react';
import productCardStyles from './ProductCard.module.css'

function ProductCard({title, price, category, description, image}) {
    return (
        <div className={productCardStyles.productCard}>
            <img src={image}/>
            <h4>{title}</h4>
            <p>{category}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
}

export default ProductCard;