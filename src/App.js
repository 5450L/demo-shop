import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Auth from "./components/Auth/Auth";

import { fetchData } from "./redux/reducers/products-reducer";
import { signIn } from "./redux/reducers/auth-reducer";
import { getFromSessionStorage } from "./redux/reducers/cart-reducer";

import { getAuthCookies } from "./cookies/auth-cookies";
import { selectRememberMe } from "./redux/selectors/auth-selectors";
import { selectPurchases } from "./redux/selectors/cart-selectors";
import { getCart } from "./session-storage/cart-storage";

function App(props) {
  const credentials = getAuthCookies();
  if (credentials.email)
    props.signIn(credentials.email, credentials.password, props.rememberMe);

  useEffect(() => {
    props.fetchData();
    props.getFromSessionStorage(getCart());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

let mapStateToProps = (state) => ({
  rememberMe: selectRememberMe(state),
  cartContent: selectPurchases(state),
});

export default connect(mapStateToProps, {
  signIn,
  fetchData,
  getFromSessionStorage,
})(App);
