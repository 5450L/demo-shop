import Cookies from "js-cookie"

export const setAuthCookies = (email, password) => {
    Cookies.set(`userEmail`, email, {expires: 0.001})
    Cookies.set(`password`, password, {expires: 0.001})
}

export const getAuthCookies = () => {
    const credentials = {
        email: Cookies.get(`userEmail`),
        password: Cookies.get(`password`)
    }
    return credentials
}

export const removeAuthCookies = () => {
    Cookies.remove(`userEmail`)
    Cookies.remove(`password`)
}

