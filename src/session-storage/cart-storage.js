export const setCart = (purchases, purchasesAmount) => {
  sessionStorage.setItem("purchases", JSON.stringify(purchases));
  sessionStorage.setItem("purchasesAmount", JSON.stringify(purchasesAmount));
};

export const getCart = () => {
  let cartContent = {
    purchases: JSON.parse(sessionStorage.getItem("purchases")),
    purchasesAmount: JSON.parse(sessionStorage.getItem("purchasesAmount")),
  };
  if (!cartContent.purchases) {
    cartContent = {
      purchases: [],
      purchasesAmount: 0,
    };
  }
  return cartContent;
};

export const updateCart = (state) => {
  const purchasesUpdate = state.cart.purchases;
  const purchasesAmountUpdate = state.cart.purchasesAmount;

  setCart(purchasesUpdate, purchasesAmountUpdate);
};
