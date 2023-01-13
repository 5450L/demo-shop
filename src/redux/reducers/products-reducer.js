import { productsApi } from "../../api/fakeStoreApi";

//actions types
const SET_ENTIRE_PRODUCTS = "SET_ENTIRE_PRODUCTS";
const SET_ENTIRE_CATEGORIES = "SET_ENTIRE_CATEGORIES";
const SET_CHOSEN_CATEGORIES = "SET_CHOSEN_CATEGORIES";
//initial state
let initialState = {
  entireProducts: [],
  entireCategories: ["all"],
  chosenCategories: ["all"],
};
//reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTIRE_CATEGORIES:
      if (!state.entireCategories.includes(...action.categories)) {
        return {
          ...state,
          entireCategories: [...state.entireCategories, ...action.categories],
        };
      } else {
        return { ...state };
      }
    case SET_ENTIRE_PRODUCTS:
      return { ...state, entireProducts: action.products };
    case SET_CHOSEN_CATEGORIES:
      if (
        state.chosenCategories.includes("all") ||
        action.chosenCategories === "all"
      ) {
        return { ...state, chosenCategories: [action.chosenCategories] };
      } else if (state.chosenCategories.includes(action.chosenCategories)) {
        return {
          ...state,
          chosenCategories: state.chosenCategories.filter(
            (category) => category !== action.chosenCategories
          ),
        };
      }
      return {
        ...state,
        chosenCategories: [...state.chosenCategories, action.chosenCategories],
      };
    default:
      return state;
  }
};
//action creators
export const setEntireProducts = (products) => ({
  type: SET_ENTIRE_PRODUCTS,
  products,
});
export const setEntireCategories = (categories) => ({
  type: SET_ENTIRE_CATEGORIES,
  categories,
});
export const setChosenCategories = (chosenCategories) => ({
  type: SET_CHOSEN_CATEGORIES,
  chosenCategories,
});
//thunks
export const fetchData = () => {
  return (dispatch) => {
    productsApi
      .getAllProducts()
      .then((products) => dispatch(setEntireProducts(products)));

    productsApi
      .getAllCategories()
      .then((categories) => dispatch(setEntireCategories(categories)));
  };
};

export default productsReducer;
