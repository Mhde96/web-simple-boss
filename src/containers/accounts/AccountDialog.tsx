import { useFormik } from "formik";
import { useMemo } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useSearchParams,
  Location,
  Navigate,
} from "react-router-dom";
import { Input } from "../../components/input/Input";
import { selectAccounts } from "../../redux/data/dataSlice";
import { accountType } from "./account-type";

export const AccountDialog = ({}: any) => {
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const accounts = useSelector(selectAccounts);

  const { values, setValues, handleChange } = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: () => {},
  });

  const account_id = useMemo(() => {
    const id = searchParams.get("account");

    if (id != undefined) {
      if (id == "new") {
        setValues({ name: "" });
      } else setValues(accounts.find((account: any) => account.id == id));
      return true;
    } else return false;
  }, [search]);

  const handleClose = () => navigate(-1);

  return (
    <Modal backdrop="static" show={account_id} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          onChange={handleChange("name")}
          value={values?.name}
          placeholder="Account Name "
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save 
        </Button>
      </Modal.Footer>
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
