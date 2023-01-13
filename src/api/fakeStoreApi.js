import axios from "axios";

const defaultPath = "https://fakestoreapi.com/products";

export const productsApi = {
  getAllProducts() {
    return fetch(defaultPath)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  },

  getAllCategories() {
    return fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  },
};
