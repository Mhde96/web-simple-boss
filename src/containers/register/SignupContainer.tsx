import { useFormik } from "formik";
import { SignupState } from "./signup-type";
import { SignupPage } from "./SignupPage";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(4).max(10),
  confirm_password: yup.string().required().min(4).max(10).oneOf([yup.ref('password'), null]),
});

export const SignupContainer = () => {
  const { values, handleChange, errors, handleSubmit } = useFormik({
    validationSchema,
    initialValues: SignupState,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = { values, handleChange, errors, handleSubmit };
  return <SignupPage {...props} />;
};
