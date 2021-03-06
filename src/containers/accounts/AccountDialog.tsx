import { useFormik } from "formik";
import { useMemo } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useSearchParams,
  Location,
  Navigate,
} from "react-router-dom";
import { ErrorMessage, Input } from "../../components/input/Input";
import { financial_statement_array } from "../../constant/account_constant";
import { SaveAccountAsync } from "../../redux/data/dataAsync";
import { selectAccounts } from "../../redux/data/dataSlice";
import { useAppDispatch } from "../../redux/hooks";
import { accountType } from "./account-type";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  financial_statement: yup.string().required(),
  key: yup.string().required(),
});
export const AccountDialog = ({}: any) => {
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  // redux
  const dispatch = useAppDispatch();
  const accounts = useSelector(selectAccounts);

  const { values, setValues, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      financial_statement: "0",
      key: undefined,
    },
    validateOnChange: false,
    validationSchema,
    onSubmit: (values) => {
      dispatch(SaveAccountAsync(values, navigate));
    },
  });

  const account_id = useMemo(() => {
    const id = searchParams.get("account");

    if (id != undefined) {
      if (id == "new") {
        setValues({ name: "", financial_statement: "0", key: undefined });
      } else setValues(accounts.find((account: any) => account.id == id));
      return true;
    } else return false;
  }, [search]);

  const handleClose = () => navigate(-1);

  return (
    <Modal backdrop="static" show={account_id} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            onChange={handleChange("name")}
            value={values?.name}
            placeholder="Account Name "
            error={errors?.name}
          />
          <br />
          <Input
            onChange={handleChange("key")}
            value={values?.key}
            placeholder="Account key "
            error={errors?.key}
          />
          <br />
          <>
            {financial_statement_array.map((item, index) => (
              <Form.Check
                key={index}
                name="financial_statement"
                type="radio"
                label={item.label}
                checked={
                  item?.value == values.financial_statement ? true : false
                }
                // value={item?.value == values.financial_statement ? 1 : 0}
                // handleChange("financial_statement")
                onChange={() =>
                  setValues({ ...values, financial_statement: item.value })
                }
              />
            ))}
            <ErrorMessage>{errors?.financial_statement}</ErrorMessage>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export const OpenAccountDialog = (
  location: Location,
  navigate: any,
  account?: accountType
) => {
  if (account == undefined) navigate(location.pathname + "?account=" + "new");
  else navigate(location.pathname + "?account=" + account.id);
};
