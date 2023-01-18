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
        return fetch(`${defaultPath}/categories`)
            .then((res) => res.json())
            .then((json) => {
                return json;
            });
    },
};
