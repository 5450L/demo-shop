import React from "react";
import { useState } from "react";
import headerStyles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Navigate, redirect, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let [cartIsOpen, toggleCart] = useState(false);

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

export default Header;
