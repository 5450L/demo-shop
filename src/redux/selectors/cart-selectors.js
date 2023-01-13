export const selectPurchases = (state) => {
  return state.cart.purchases;
};

export const selectPurchasesAmount = (state) => {
  return state.cart.purchasesAmount;
};
