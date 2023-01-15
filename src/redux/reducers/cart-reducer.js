//actions types
const ADD_TO_CART = "ADD_TO_CART";
const INCREASE_PURCHASES_AMOUNT = "INCREASE_PURCHASES_AMOUNT";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const DECREASE_PURCHASES_AMOUNT = "DECREASE_PURCHASES_AMOUNT";
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
    case REMOVE_FROM_CART:
      let newPurchases = state.purchases.filter(
        (purchase, index) => index !== action.id
      );
      return {
        ...state,
        purchases: [...newPurchases],
      };
    case DECREASE_PURCHASES_AMOUNT:
      return {
        ...state,
        purchasesAmount: state.purchasesAmount - 1,
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

export const removeFromPurchases = (id) => ({ type: REMOVE_FROM_CART, id });
export const decreasePurchasesAmount = () => ({
  type: DECREASE_PURCHASES_AMOUNT,
});

//thunks
export const addToCart = (product) => {
  return (dispatch) => {
    dispatch(addToPurchases(product));
    dispatch(increasePurchasesAmount());
  };
};

export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch(removeFromPurchases(id));
    dispatch(decreasePurchasesAmount());
  };
};
//
export default cartReducer;
