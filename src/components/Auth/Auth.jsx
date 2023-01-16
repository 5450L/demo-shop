import React from 'react';
import authStyles from './Auth.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../shared/validators";
import {Input} from "../../shared/FormControls/FormControls";

function Auth(props) {
    const onSubmit = (formData) => {
        console.log(formData)
    }
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

            <div>
                <Field name={'login'} component={Input} placeholder={'login'} validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} type={'password'} placeholder={'password'}
                       validate={required}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} placeholder={'login'}/>
            </div>

            <div className={authStyles.submitButton}>
                <button>Sign up</button>
            </div>

        </form>
    )
}

const AuthReduxForm = reduxForm({form: 'auth'})(AuthForm)

export default Auth;
