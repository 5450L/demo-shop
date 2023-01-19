import React from "react";
import headerStyles from "./Header.module.css";
import {FiShoppingCart} from "react-icons/fi";
import {BiLogOut} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import {selectPurchasesAmount} from "../../redux/selectors/cart-selectors";
import {connect} from "react-redux";
import {selectIsAuth, selectUserEmail} from "../../redux/selectors/auth-selectors";
import {logout, setMode} from "../../redux/reducers/auth-reducer";

const Header = (props) => {
    return (
        <header>
            <div className={headerStyles.container}>
                <span className={headerStyles.logo}>
                    <NavLink to="/">Demo Shop</NavLink>
                 </span>

                <div className={headerStyles.buttons}>
                    <span className={headerStyles.cartIcon}>
                         <NavLink to="cart">
                             <FiShoppingCart/>
                             {props.purchasesAmount > 0 && (
                                 <div className={headerStyles.cartFilled}>
                                     {props.purchasesAmount}
                                 </div>
                             )}
                         </NavLink>
                    </span>
                    {!props.isAuth ?
                        <div className={headerStyles.login}>
                            <span onClick={() => props.setMode(true)}><NavLink to={'/auth'}>Login</NavLink></span>
                            /
                            <span onClick={() => props.setMode(false)}><NavLink to={'/auth'}>Authorize</NavLink></span>
                        </div>
                        :
                        <div className={headerStyles.login}>
                            <span>{props.userEmail}</span>
                            <div className={headerStyles.logout} onClick={() => props.logout()}>
                                <a className={headerStyles.logout}><BiLogOut/></a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

let mapStateToProps = (state) => {
    return {
        purchasesAmount: selectPurchasesAmount(state),
        isAuth: selectIsAuth(state),
        userEmail: selectUserEmail(state)
    };
};

export default connect(mapStateToProps, {setMode, logout})(Header);
