import {authApi} from "../../api/firebaseApi";

//actions types
const AUTHORIZE = "AUTHORIZE";
//initial state
let initialState = {
    isAuth: false,
    user: {}
};
//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZE:
            return {...state, isAuth: true}

        default:
            return state;
    }
};
//action creators
export const authorize = (userData) => ({
    type: AUTHORIZE,
    userData,
});

//thunks
export const signUp = (email, password) => {
    return (dispatch) => {
        authApi.auth(email, password).then(response => {
            console.log(response)
            authorize(response)
        }).catch(error => console.log(error.message))
    };
};

export default authReducer;
