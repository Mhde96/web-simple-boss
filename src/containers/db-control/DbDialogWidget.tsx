import { useFormik } from "formik";
import { Button, Modal } from "react-bootstrap";
import { Input } from "../../components/input/Input";
import { ModalWrap } from "../../components/wrap/ModalWrap";
import * as yup from "yup";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/app/appSlice";
import {
  useLocation,
  useNavigate,
  useSearchParams,
  Location,
} from "react-router-dom";
import { createDb, saveDb } from "../../db/initDb";
import { db } from "../../db/indexedDb";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

export const DbDialogWidget = () => {
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const id = searchParams.get("db");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    navigate(-1);
  };

  const { values, setValues, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: {
        id: undefined,
        name: "",
        description: "",
      },
      validateOnChange: false,
      validationSchema,
      onSubmit: (values) => {
        handleClose();
        resetForm();
        if (values.id == undefined)
          createDb({
            name: values.name,
            description: values.description,
            user,
          });
        else {
          saveDb({
            id: values.id,
            name: values.name,
            description: values.description,
            user,
          });
        }
      },
    });

  const handleGetDb = async () => {
    let data = await db.data.toArray();
    let currentDb = data.find((item) => item.id == id);
    setValues(currentDb);
  };
  useEffect(() => {
    handleGetDb();
  }, [id]);

  return (
    <ModalWrap show={id} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New DataBase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Input placeholder={t(en.old_passowrd)} /> */}
        <Input
          onChange={handleChange("name")}
          value={values?.name}
          placeholder={"database name"}
          error={errors?.name}
        />
        <br />
        <Input
          onChange={handleChange("description")}
          value={values?.description}
          placeholder={"description"}
          error={errors?.description}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button type="submit" variant="primary" onClick={() => handleSubmit()}>
          {id != "new" ? "UPDATE" : "CREATE"}
        </Button>
      </Modal.Footer>
    </ModalWrap>
  );
};

export const OpenDbDialog = (
  location: Location,
  navigate: any,
  dbId?: number
) => {
  if (dbId == undefined) navigate(location.pathname + "?db=" + "new");
  else navigate(location.pathname + "?db=" + dbId);
};
