import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
        withCredentials: true,

    }
)

export const authApi = {
    auth(email, password) {
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDX0Ren1uI6xj7KXvc0FZ0oIUGte1mhcfw`, {
            email,
            password,
            returnSecureToken: true
        })
    },
    login(email, password) {
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDX0Ren1uI6xj7KXvc0FZ0oIUGte1mhcfw`, {
            email,
            password,
            returnSecureToken: true
        })
    }
}