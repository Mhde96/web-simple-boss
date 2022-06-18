import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAccounts } from "../../redux/data/dataSlice";
import { SelectAccountDialogPropsType } from "./select-account-dialog-type";
export const SelectAccountDialog = (props: SelectAccountDialogPropsType) => {
  const { open, setOpen, onSubmit, rowIndex, text, onClose } = props;
  const [data, setData] = useState(text);
  const accounts = useSelector(selectAccounts);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {accounts.map((item: any, index: number) => (
            <div key={index} onClick={() => onSubmit(item)}>
              {item.name}
            </div>
          ))}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
