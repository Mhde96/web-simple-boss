import { useFormik } from "formik";
import { SignupState } from "./signup-type";
import { SignupPage } from "./SignupPage";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import appSlice from "../../redux/app/appSlice";
import { registerAsync } from "../../redux/app/appAsync";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(4).max(10),
  confirm_password: yup
    .string()
    .required()
    .min(4)
    .max(10)
    .oneOf([yup.ref("password"), null]),
});

export const SignupContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { values, handleChange, errors, handleSubmit } = useFormik({
    validationSchema,
    initialValues: SignupState,
    onSubmit: (values) => {
      dispatch(registerAsync(values, navigate));
    },
  });

  // console.log(errors);
  const props = { values, handleChange, errors, handleSubmit };
  return <SignupPage {...props} />;
};
