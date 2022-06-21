import { useFormik } from "formik";
import { AccountStatementPagePropsType } from "./account-statement-type";
import { AccountStatmentPage } from "./AccountStatementPage";

export const AccountStatmentContainer = () => {
  const { values } = useFormik({
    initialValues: [],
    onSubmit: () => {},
  });

  const props: AccountStatementPagePropsType = { values };
  return <AccountStatmentPage {...props} />;
};
