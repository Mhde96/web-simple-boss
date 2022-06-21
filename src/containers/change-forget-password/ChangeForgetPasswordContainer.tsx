import { useFormik } from "formik";
import { ChangeForgetPasswordState } from "./change-forget-password";
import { ChangeForgetPasswordPage } from "./ChangeForgetPasswordPage";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  newpassword: yup.string().required().min(4).max(10),
  confirmpassword: yup.string().required().min(4).max(10),
});

export const ChangeForgetPasswordContainer = () => {
  const { values, handleChange, errors, handleSubmit } = useFormik({
    validationSchema,
    initialValues: ChangeForgetPasswordState,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const props = { values, handleChange, errors, handleSubmit };
  return <ChangeForgetPasswordPage {...props} />;
};
