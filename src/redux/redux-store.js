import {applyMiddleware, combineReducers, compose, configureStore, createStore} from "@reduxjs/toolkit";
import productsReducer from "./reducers/products-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    products: productsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store