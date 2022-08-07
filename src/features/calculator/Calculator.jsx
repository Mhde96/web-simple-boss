import { useMemo } from "react";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ModalWrap } from "../../components/wrap/ModalWrap";
import { CalculatorWarper } from "./CalculatorWarper";

import "./index.css";
const link = "calculator";

export const CalculatorWidget = () => {
  // navigation
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const isOpen = useMemo(() => searchParams.get(link), [search]);
  const handleClose = () => navigate(-1);

  return (
    <Modal  show={isOpen} onHide={handleClose} dialogClassName="modal-width">
      <CalculatorWarper />
    </Modal>
  );
};

export const openCalculatorDialog = (location, navigate) => {
  navigate(location.pathname + `?${link}=` + 1);
};
