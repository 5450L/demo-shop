//actions types
const TOGGLE_CART = "TOGGLE_CART";
//initial state
let initialState = {
  cartIsOpen: false,
};
//reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, cartIsOpen: !state.cartIsOpen };
    default:
      return state;
  }
};
//action creators
export const toggleCart = () => ({ type: TOGGLE_CART });

//thunks

//
export default cartReducer;
