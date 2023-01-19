import {authApi} from "../../api/firebaseApi";
import {removeAuthCookies, setAuthCookies} from "../../cookies/auth-cookies";

//actions types
const AUTHORIZE = "AUTHORIZE";
const LOGOUT = "LOGOUT";
const CHOOSE_MODE = "CHOOSE_MODE";
//initial state
let initialState = {
    isAuth: false,
    userEmail: '',
    isLoginMode: false,
    rememberMe: false
};
//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZE:
            return {...state, isAuth: true, userEmail: action.payload.userEmail, rememberMe: action.payload.rememberMe}
        case CHOOSE_MODE:
            return {...state, isLoginMode: action.isLoginMode}
        case LOGOUT:
            return {...state, isAuth: false, userEmail: ''}
        default:
            return state;
    }
};
//action creators
export const authorize = (userEmail, rememberMe) => ({
    type: AUTHORIZE,
    payload: {
        userEmail,
        rememberMe
    }
});
export const logout = () => {
    removeAuthCookies()
    return {type: LOGOUT}
}
export const setMode = (isLoginMode) => ({type: CHOOSE_MODE, isLoginMode})
//thunks
export const signUp = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.auth(email, password).then(response => {
            console.log(response)
            dispatch(authorize(email, rememberMe))
            setAuthCookies(email, password)
        }).catch(error => console.log(error.message))
    };
};

export const signIn = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password).then(response => {
            console.log(response)
            dispatch(authorize(email, rememberMe))
            setAuthCookies(email, password)
        }).catch(error => console.log(error.message))
    };
};

export default authReducer;
