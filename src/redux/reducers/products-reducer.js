//action stypes
import {productsApi} from "../../api/fakeStoreApi";

const SET_PRODUCTS = 'FETCH_PRODUCTS'
//initial state
let initialState = {
    entireProducts: []
}
//reducer
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, entireProducts: action.products}
        default:
            return state
    }
}
//action creators
export const setProducts = (products) => ({type: SET_PRODUCTS, products})
//thunks
export const fetchProducts = () => {
    return (dispatch) => {
        productsApi.getAllProducts().then(products => {
            dispatch(setProducts(products))
        })
    }
}

export default productsReducer