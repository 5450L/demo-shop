import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import {reducer as formReducer} from "redux-form"

import productsReducer from "./reducers/products-reducer";
import cartReducer from "./reducers/cart-reducer";
import authReducer from "./reducers/auth-reducer";

let reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    auth:authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
