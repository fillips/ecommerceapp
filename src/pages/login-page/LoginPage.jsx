import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import GenericInput from "../../components/generic-input/GenericInput";
import GenericButton from "../../components/generic-button/GenericButton";
import { useFetchLoginTokenMutation } from "../../services/login-service";
import { authUser } from "../../store/auth/authSlice";
import {
  LoginContainer,
  ErrorMessage,
  FormContainer,
  LoginElementsContainer,
  LoginForm,
  SubmitErrorContainer
} from "./styled";

const Login = () => {
  let navigate = useNavigate();
  const [fetchLoginToken, result] = useFetchLoginTokenMutation();
  const dispatch = useDispatch();
  const userLogin = async (username, password) => {
    const data = {
      username: username,
      password: password,
    };
    await fetchLoginToken(data);
  };

  useEffect(() => {
    if (result && result.data && result.data.token) {
      dispatch(authUser({loggedIn: true, token: result.data.token}))
      return navigate("/home");
    }
  }, [result, dispatch, navigate]);
  const handleLogin = (username, password) => {
    result.reset();
userLogin(username, password);

   


  };
  return (
    <LoginContainer>
      <LoginForm>
        <LoginElementsContainer>
        <h1>Log in</h1>
        <p>Log in to start shopping</p>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.email = <ErrorMessage>Required</ErrorMessage>;
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleLogin(values.username, values.password);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <FormContainer id="form-container" onSubmit={handleSubmit}>
              <GenericInput
                id={"login-username"}
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.email && touched.email && errors.email}
              <GenericInput
                id={"login-password"}
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <GenericButton
                disabled={isSubmitting}
                type="submit"
                isSubmitButton
                text="Log in"
              />
              {result &&
                result.isLoading === false &&
                result.status !== "fulfilled" &&
                result.status !== "uninitialized" &&
                result.isSuccess !== true && (
                  <SubmitErrorContainer>
                    There was a problem. We cannot find an account with
                    that username and password.
                  </SubmitErrorContainer>
                )}
            </FormContainer>
          )}
        </Formik>
        </LoginElementsContainer>

      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
