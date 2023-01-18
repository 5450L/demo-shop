import React from 'react';
import authStyles from './Auth.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../shared/validators";
import {Input} from "../../shared/FormControls/FormControls";
import {selectIsAuth} from "../../redux/selectors/auth-selectors";
import {connect} from "react-redux";
import {signUp} from "../../redux/reducers/auth-reducer";
import {Navigate} from "react-router";

function Auth(props) {
    console.log(props.isAuth)
    const onSubmit = (formData) => {
        if (formData) {
            props.signUp(formData.email, formData.password)
        }
    }
    if (props.isAuth === true) return <Navigate to={'/'}/>

    return (
        <div>
            <AuthReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const AuthForm = (props) => {
    return (
        <form className={authStyles.authForm} onSubmit={props.handleSubmit}>
            <h2>Authenticate</h2>

            <Field name={'email'} component={Input} type={'email'} placeholder={'email'} validate={[required]}/>

            <Field name={'password'} component={Input} type={'password'} placeholder={'password'}
                   validate={required}/>

            <Field name={'rememberMe'} component={Input} type={'checkbox'} placeholder={'login'}/>


            <div className={authStyles.submitButton}>
                <button>Sign up</button>
            </div>

        </form>
    )
}

const AuthReduxForm = reduxForm({form: 'auth'})(AuthForm)

let mapStateToProps = (state) => {
    return {
        isAuth: selectIsAuth(state)
    }
}

export default connect(mapStateToProps, {signUp})(Auth);
