import { useMemo } from "react";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const link = "calculator";

export const CalculatorWidget = () => {
  // navigation
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const isOpen = useMemo(() => searchParams.get(link), [search]);
  const handleClose = () => navigate(-1);

  return (
    <Modal show={isOpen} onHide={handleClose} placement="end">
      <Modal.Header>Calculator</Modal.Header>
    </Modal>
  );
};

export const openCalculatorDialog = (location, navigate) => {
  navigate(location.pathname + `?${link}=` + 1);
};
