import React, { useEffect } from "react";
import { useState } from "react";

import cartStyles from "./Cart.module.css";

import { connect } from "react-redux";

import PurchaseCard from "./PurchaseCard";

import { selectPurchases } from "../../redux/selectors/cart-selectors";
import { removeFromCart } from "../../redux/reducers/cart-reducer";

function Cart(props) {
  let firstRender = true;
  let [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    if (firstRender === true && props.purchases.length > 0) {
      props.purchases.map((purchase) => {
        setTotalCost((prev) => +(prev + +purchase.price).toFixed(2));
      });
      firstRender = false;
    }
  }, [props.purchases]);

  let purchasesTemplate = props.purchases.map((purchase, index) => {
    return (
      <PurchaseCard
        key={index}
        id={index}
        purchase={purchase}
        removeFromCart={props.removeFromCart}
      />
    );
  });

  return (
    <div className={cartStyles.cartContainer}>
      {props.purchases.length > 0 ? (
        <div>
          {purchasesTemplate}
          <h1>Total cost:{totalCost}$</h1>
        </div>
      ) : (
        <h1>You have not make any purchases yet !</h1>
      )}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    purchases: selectPurchases(state),
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
