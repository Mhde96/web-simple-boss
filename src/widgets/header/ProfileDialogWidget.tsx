import { useFormik } from "formik";
import { useMemo } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { selectUser } from "../../redux/app/appSlice";

export const ProfileDialogWidget = () => {
  // redux
  const user = useSelector(selectUser);

  // navigation
  const [searchParams] = useSearchParams();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const isOpen: any = useMemo(() => searchParams.get("profile"), [search]);
  const handleClose = () => navigate(-1);

  // Formik
  const { values, setValues , handleSubmit} = useFormik({
    initialValues: { ...user, isChangePassword: false },
    onSubmit: () => {

      handleClose();
    },
  });

  // functions
  const handleOpenChangePassword = () => {
    setValues({ ...values, isChangePassword: !values.isChangePassword });
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input placeholder="your name" value={user?.name} />
        <br />
        <Input
          disabled
          placeholder="your email"
          value={ user?.email}
        />

        <br />
        <Nav.Link onClick={handleOpenChangePassword} className="rmp">
          change password
        </Nav.Link>

        {values.isChangePassword && (
          <>
            <br />
            <Input placeholder="old password" />
            <br />
            <Input placeholder="new password" />
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const OpenProfileDialog = (location: any, navigate: any) => {
  navigate(location.pathname + "?profile=" + 1);
};
