import React from "react";
import { connect } from "react-redux";
import cartStyles from "./Cart.module.css";
import { selectPurchases } from "../../redux/selectors/cart-selectors";
import PurchaseCard from "./PurchaseCard";

function Cart(props) {
  let purchasesTemplate = props.purchases.map((purchase, index) => (
    <PurchaseCard key={index} purchase={purchase} />
  ));

  return (
    <div className={cartStyles.cartContainer}>
      {props.purchases ? (
        purchasesTemplate
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

export default connect(mapStateToProps, {})(Cart);
