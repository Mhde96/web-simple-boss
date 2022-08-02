import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ModalWrap } from "../../components/wrap/ModalWrap";
import { en } from "../../helper/languages/en";
import appSlice from "../../redux/app/appSlice";

export const ConfirmBoxWidget = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { show, handleSubmit, title, message } = useSelector(
    (state: any) => state.appReducer.confirm
  );
  const handleYes = () => {
    handleSubmit();
    dispatch(appSlice.actions.closeConfirmBox({}));
  };
  const handleNo = () => {
    dispatch(appSlice.actions.closeConfirmBox({}));
  };
  return (
    <ModalWrap show={show}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleYes}>{t(en.yes)}</Button>
        <Button onClick={handleNo}>{t(en.no)}</Button>
      </Modal.Footer>
    </ModalWrap>
  );
};
