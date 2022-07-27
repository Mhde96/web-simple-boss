import { useMemo } from "react";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import Offcanvas from 'react-bootstrap/Offcanvas';

const link = "settings";

export const SettingsDialogWidget = () => {
  // navigation
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const isOpen: any = useMemo(() => searchParams.get(link), [search]);
  const handleClose = () => navigate(-1);

  return (
    <Modal show={isOpen} onHide={handleClose}>
      Settings
    </Modal>
  );
};

export const openSettingsDialog = (location: any, navigate: any) => {
  navigate(location.pathname + `?${link}=` + 1);
};
