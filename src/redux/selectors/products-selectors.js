export const selectProducts = (state) => {
  return state.products.entireProducts;
};

export const selectCategories = (state) => {
  return state.products.entireCategories;
};

export const selectChosenCategories = (state) => {
  return state.products.chosenCategories;
};

export const selectIsFetching = (state) => {
  return state.products.isFetching;
};
