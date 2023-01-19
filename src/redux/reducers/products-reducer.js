import { productsApi } from "../../api/fakeStoreApi";

//actions types
const SET_ENTIRE_PRODUCTS = "SET_ENTIRE_PRODUCTS";
const SET_ENTIRE_CATEGORIES = "SET_ENTIRE_CATEGORIES";
const SET_CHOSEN_CATEGORIES = "SET_CHOSEN_CATEGORIES";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
//initial state
let initialState = {
  entireProducts: [],
  entireCategories: ["all"],
  chosenCategories: ["all"],
  isFetching: false,
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
    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching };
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
export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
//thunks
export const fetchData = () => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    productsApi
      .getAllProducts()
      .then((products) => dispatch(setEntireProducts(products)));

    productsApi.getAllCategories().then((categories) => {
      dispatch(setEntireCategories(categories));
      dispatch(toggleFetching(false));
    });
  };
};

export default productsReducer;
