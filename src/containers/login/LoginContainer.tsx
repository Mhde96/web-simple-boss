import { useFormik } from "formik";
import { LoginState } from "./login-type";
import { LoginPage } from "./LoginPage";
import * as yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { loginAsync } from "../../redux/app/appAsync";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(4).max(10),
});

export const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { values, handleChange, errors, handleSubmit } = useFormik({
    validationSchema,
    initialValues: LoginState,
    onSubmit: (values) => {
      dispatch(loginAsync(values, navigate));
    },
  });

  const handleRegister = () => navigate(endroutes.register);

  const props = { values, handleChange, errors, handleSubmit, handleRegister };
  return <LoginPage {...props} />;
};
