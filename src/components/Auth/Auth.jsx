import React, { useRef } from "react";
import authStyles from "./Auth.module.css";
import { Field, reduxForm } from "redux-form";
import { minLenghtCreator, required } from "../../shared/validators";
import { Input } from "../../shared/FormControls/FormControls";
import {
  selectIsAuth,
  selectIsLoginMode,
} from "../../redux/selectors/auth-selectors";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { signIn, signUp } from "../../redux/reducers/auth-reducer";
import { sendEmail } from "../../api/emailJS";

function Auth(props) {
  const onSubmit = (formData) => {
    if (formData) {
      if (props.isLoginMode) {
        props.signIn(formData.email, formData.password);
      } else {
        props.signUp(formData.email, formData.password);
      }
    }
  };
  if (props.isAuth === true) return <Navigate to={"/"} />;

  return (
    <div>
      <AuthReduxForm isLoginMode={props.isLoginMode} onSubmit={onSubmit} />
    </div>
  );
}

const AuthForm = (props) => {
  const minLength6 = minLenghtCreator(6);

  const authForm = useRef();

  return (
    <form
      ref={authForm}
      className={authStyles.authForm}
      onSubmit={props.handleSubmit}
    >
      <h2>{props.isLoginMode ? "Login" : "Authenticate"}</h2>
      <div>
        <Field
          name={"email"}
          component={Input}
          type={"email"}
          placeholder={"email"}
          validate={[required]}
        />

        <Field
          name={"password"}
          component={Input}
          type={"password"}
          placeholder={"password"}
          validate={[required, minLength6]}
        />
      </div>
      {props.error && (
        <div className={authStyles.formError}>*{props.error.message}</div>
      )}
      <div className={authStyles.submitButton}>
        <button
          onClick={() => {
            sendEmail(authForm);
          }}
        >
          {props.isLoginMode ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </form>
  );
};

const AuthReduxForm = reduxForm({ form: "auth" })(AuthForm);

let mapStateToProps = (state) => {
  return {
    isAuth: selectIsAuth(state),
    isLoginMode: selectIsLoginMode(state),
  };
};

export default connect(mapStateToProps, { signUp, signIn })(Auth);
