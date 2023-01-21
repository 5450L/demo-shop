//actions types
const ADD_TO_CART = "ADD_TO_CART";
const INCREASE_PURCHASES_AMOUNT = "INCREASE_PURCHASES_AMOUNT";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const DECREASE_PURCHASES_AMOUNT = "DECREASE_PURCHASES_AMOUNT";
const GET_FROM_SESSION_STORAGE = "GET_FROM_SESSION_STORAGE";
//initial state
let initialState = {
  purchases: [],
  purchasesAmount: 0,
};
//reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const increasedPurchases = [];
      let includes = false;

      state.purchases.map((purchase) => {
        if (purchase.title === action.product.title) {
          increasedPurchases.push({
            ...purchase,
            amount: purchase.amount + 1,
          });
          includes = true;
        } else {
          increasedPurchases.push(purchase);
        }
      });

      !includes && increasedPurchases.push({ ...action.product, amount: 1 });

      return {
        ...state,
        purchases: increasedPurchases,
      };
    case INCREASE_PURCHASES_AMOUNT:
      return {
        ...state,
        purchasesAmount: state.purchasesAmount + 1,
      };
    case REMOVE_FROM_CART:
      let reducedPurchases = state.purchases.filter(
        (purchase, index) => index !== action.id
      );
      return {
        ...state,
        purchases: [...reducedPurchases],
      };
    case DECREASE_PURCHASES_AMOUNT:
      return {
        ...state,
        purchasesAmount: state.purchasesAmount - action.amount,
      };
    case GET_FROM_SESSION_STORAGE:
      return {
        ...state,
        purchases: action.payload.purchases,
        purchasesAmount: action.payload.purchasesAmount,
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
export const decreasePurchasesAmount = (amount) => ({
  type: DECREASE_PURCHASES_AMOUNT,
  amount,
});

export const getFromSessionStorage = ({ purchases, purchasesAmount }) => ({
  type: GET_FROM_SESSION_STORAGE,
  payload: { purchases, purchasesAmount },
});

//thunks
export const addToCart = (product) => {
  return (dispatch) => {
    dispatch(addToPurchases(product));
    dispatch(increasePurchasesAmount());
  };
};

export const removeFromCart = (id, amount) => {
  return (dispatch) => {
    dispatch(removeFromPurchases(id));
    dispatch(decreasePurchasesAmount(amount));
  };
};
//
export default cartReducer;
