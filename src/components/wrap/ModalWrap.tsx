import { Modal } from "react-bootstrap";
import { useColors } from "../../styles/variables-styles";

export const ModalWrap = ({ children, show, onHide, ...props }: any) => {
  const colors = useColors();
  const backgroundStyle = {
    backgroundColor: colors.surface,
    color: colors.text,
  };

  return (
    <Modal show={show} onHide={onHide} {...props}>
      <div style={backgroundStyle}>{children}</div>
    </Modal>
  );
};
