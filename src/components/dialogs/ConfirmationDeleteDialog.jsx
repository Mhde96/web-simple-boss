import { Button, Modal } from "react-bootstrap";

export const ConfirmationDeleteDialog = ({ data, setData, handleSubmit }) => {
  const handleClose = () => setData({ ...data, show: false });

  return (
    <Modal onHide={handleClose} show={data.show}>
      <Modal.Header>{data.title}</Modal.Header>
      <Modal.Body>{data.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          type="submit"
          variant="primary"
          onClick={() => {
            handleClose();
            handleSubmit();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
