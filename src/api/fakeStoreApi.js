import axios from "axios";

const defaultPath = 'https://fakestoreapi.com/products'

export const productsApi = {
    getAllProducts() {
        return fetch(defaultPath)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                return json
            })
    }
}