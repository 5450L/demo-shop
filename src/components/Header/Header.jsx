import React from "react";
import headerStyles from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <div>
        <span className={headerStyles.logo}>Demo Shop</span>
      </div>
      <div className={headerStyles.presentation}></div>
    </header>
  );
};

export default Header;
