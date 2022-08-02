import { useFormik } from "formik";
import { useMemo } from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { ModalWrap } from "../../components/wrap/ModalWrap";
import { en } from "../../helper/languages/en";
import { selectUser } from "../../redux/app/appSlice";
import { useColors } from "../../styles/variables-styles";

export const ProfileDialogWidget = () => {
  const { t } = useTranslation();
  const colors = useColors();
  // redux
  const user = useSelector(selectUser);

  // navigation
  const [searchParams] = useSearchParams();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const isOpen: any = useMemo(() => searchParams.get("profile"), [search]);
  const handleClose = () => navigate(-1);

  // Formik
  const { values, setValues, handleSubmit } = useFormik({
    initialValues: { ...user, isChangePassword: false },
    onSubmit: () => {
      handleClose();
    },
  });

  // functions
  const handleOpenChangePassword = () => {
    setValues({ ...values, isChangePassword: !values.isChangePassword });
  };

  const backgroundStyle = {
    backgroundColor: colors.surface,
    color: colors.text,
  };

  return (
    <ModalWrap show={isOpen} onHide={handleClose}>
      <Modal.Header style={{ ...backgroundStyle }}>
        <Modal.Title>{t(en.profile)}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={backgroundStyle}>
        <Input placeholder={t(en.name)} value={user?.name} />
        <br />
        <Input disabled placeholder="your email" value={user?.email} />

        <br />
        <Nav.Link onClick={handleOpenChangePassword} className="rmp">
          {t(en.change_password)}
        </Nav.Link>

        {values.isChangePassword && (
          <>
            <br />
            <Input placeholder={t(en.old_passowrd)} />
            <br />
            <Input placeholder={t(en.new_passowrd)} />
          </>
        )}
      </Modal.Body>

      <Modal.Footer style={backgroundStyle}>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={() => handleSubmit()}>Submit</Button>
      </Modal.Footer>
    </ModalWrap>
  );
};

export const OpenProfileDialog = (location: any, navigate: any) => {
  navigate(location.pathname + "?profile=" + 1);
};
