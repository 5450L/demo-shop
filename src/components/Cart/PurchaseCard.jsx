import cartStyles from "./Cart.module.css";

import React from "react";

export default function PurchaseCard(props) {
  console.log(props);
  return (
    <div className={cartStyles.purchaseCard}>
      <img src={props.purchase.image} alt={props.purchase.category} />
      <div>
        <h2>{props.purchase.title}</h2>
        <p>{props.purchase.description}</p>
        {props.purchase.price} $
      </div>
    </div>
  );
}
