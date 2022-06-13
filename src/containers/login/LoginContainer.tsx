import { useFormik } from "formik";
import { LoginState } from "./login-constant";
import { LoginPage } from "./LoginPage";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(4).max(10),
});

export const LoginContainer = () => {
  const { values, handleChange, errors, handleSubmit } = useFormik({
    validationSchema,
    initialValues: LoginState,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = { values, handleChange, errors, handleSubmit };
  return <LoginPage {...props} />;
};
