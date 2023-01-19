export const selectIsAuth = (state) => {
    return state.auth.isAuth;
};

export const selectUserEmail = (state) => {
    return state.auth.userEmail
}

export const selectIsLoginMode = (state) => {
    return state.auth.isLoginMode
}