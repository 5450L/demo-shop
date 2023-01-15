import React from "react";
import headerStyles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { selectPurchasesAmount } from "../../redux/selectors/cart-selectors";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <header>
      <div className={headerStyles.container}>
        <span className={headerStyles.logo}>
          <NavLink to="/">Demo Shop</NavLink>
        </span>
        <div className={headerStyles.buttons}>
          <span className={`${headerStyles[`cartIcon`]}`}>
            <NavLink to="cart">
              <FiShoppingCart />
              {props.purchasesAmount > 0 && (
                <div className={headerStyles.cartFilled}>
                  {props.purchasesAmount}
                </div>
              )}
            </NavLink>
          </span>
          <div className={headerStyles.login}>
            <span>Login</span>/<span>Authorize</span>
          </div>
        </div>
      </div>
    </header>
  );
};

let mapStateToProps = (state) => {
  return { purchasesAmount: selectPurchasesAmount(state) };
};

export default connect(mapStateToProps, {})(Header);
