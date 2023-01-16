import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Auth from "./components/Auth/Auth";

function App() {
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

export default App;
