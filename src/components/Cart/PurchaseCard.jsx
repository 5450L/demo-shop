import cartStyles from "./Cart.module.css";
import { MdDeleteOutline } from "react-icons/md";

import React from "react";

export default function PurchaseCard(props) {
  return (
    <div className={cartStyles.purchaseCard}>
      <img src={props.purchase.image} alt={props.purchase.category} />
      <div className={cartStyles.purchaseInfo}>
        <div>
          <h2>{props.purchase.title}</h2>
          <p>{props.purchase.description}</p>
        </div>
        <div className={cartStyles.price_btn}>
          <span>
            {props.purchase.price * props.purchase.amount} $ (
            {props.purchase.amount}
            {props.purchase.amount > 1 ? " items" : " item"} )
          </span>
          <button
            onClick={() => {
              props.removeFromCart(props.id, props.purchase.amount);
            }}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
