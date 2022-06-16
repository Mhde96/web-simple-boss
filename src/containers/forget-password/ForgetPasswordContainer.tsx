import { ForgetPasswordPage } from "./ForgetPasswordPage";
import * as yup from "yup";
import { useFormik } from "formik";
import { ForgetPasswordPagePropsType, ForgetPasswordState } from "./forget-password-type";

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
});
export const ForgetPasswordContainer = () => {
  const { values, handleChange, errors, handleSubmit } = useFormik({
    validationSchema,
    initialValues: ForgetPasswordState,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = { values, handleChange, errors, handleSubmit };
  return <ForgetPasswordPage {...props} />;
};
