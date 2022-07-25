import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import appSlice from "../../redux/app/appSlice";

export const ConfirmBoxWidget = () => {
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
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleYes}>Yes</Button>
        <Button onClick={handleNo}>No</Button>
      </Modal.Footer>
    </Modal>
  );
};
