import { useFormik } from "formik";
import { LoginState } from "./login-constant";
import { LoginPage } from "./LoginPage";

export const LoginContainer = () => {
  const { values, handleChange } = useFormik({
    initialValues: LoginState,
    onSubmit: () => {},
  });

  const props = { values, handleChange };
  return <LoginPage {...props} />;
};
