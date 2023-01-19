import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Auth from "./components/Auth/Auth";
import {connect} from "react-redux";
import {signIn} from "./redux/reducers/auth-reducer";
import {getAuthCookies} from "./cookies/auth-cookies";
import {selectRememberMe} from "./redux/selectors/auth-selectors";

function App(props) {

    const credentials = getAuthCookies()
    console.log(credentials)
    console.log(props.rememberMe)
    if (credentials.email) props.signIn(credentials.email, credentials.password, props.rememberMe)

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

let mapStateToProps = (state) => ({
    rememberMe: selectRememberMe(state)
})

export default connect(mapStateToProps, {signIn})(App);
