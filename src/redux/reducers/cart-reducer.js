//actions types
const ADD_TO_CART = "ADD_TO_CART";
const INCREASE_PURCHASES_AMOUNT = "INCREASE_PURCHASES_AMOUNT";
//initial state
let initialState = {
  purchases: [],
  purchasesAmount: 0,
};
//reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        purchases: [...state.purchases, { ...action.product, amount: 1 }],
      };
    case INCREASE_PURCHASES_AMOUNT:
      return {
        ...state,
        purchasesAmount: state.purchasesAmount + 1,
      };
    default:
      return state;
  }
};
//action creators
export const addToPurchases = (product) => ({ type: ADD_TO_CART, product });
export const increasePurchasesAmount = () => ({
  type: INCREASE_PURCHASES_AMOUNT,
});

//thunks
export const addToCart = (product) => {
  return (dispatch) => {
    dispatch(addToPurchases(product));
    dispatch(increasePurchasesAmount());
  };
};
//
export default cartReducer;
