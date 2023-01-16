import cartStyles from "./Cart.module.css";
import {MdDeleteOutline} from "react-icons/md";

import React from "react";

export default function PurchaseCard(props) {
    return (
        <div className={cartStyles.purchaseCard}>
            <img src={props.purchase.image} alt={props.purchase.category}/>
            <div className={cartStyles.purchaseInfo}>
                <h2>{props.purchase.title}</h2>
                <p>{props.purchase.description}</p>
                <div className={cartStyles.price_btn}>
                    <span>{props.purchase.price} $</span>
                    <button
                        onClick={() => {
                            props.removeFromCart(props.id);
                        }}
                    >
                        <MdDeleteOutline/>
                    </button>
                </div>
            </div>
        </div>
    );
}
