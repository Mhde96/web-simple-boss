import { useFormik } from "formik";
import { OtbPage } from "./OtbPage";
import * as yup from "yup";
import { OtbPagePropsType,OtbState } from "./otb-type";

const validationSchema = yup.object().shape({
  code: yup.string().required().min(4).max(10),
});

export const OtbContainer = () => {
  const { values, handleChange, errors, handleSubmit } = useFormik({
    validationSchema,
    initialValues: OtbState,
    onSubmit: (values) => {
      console.log(values);
    },
  });
console.log(values)
  const props = { values, handleChange, errors, handleSubmit };
  return <OtbPage {...props} />;
};
