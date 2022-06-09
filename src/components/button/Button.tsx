import { Button as BootstrapButton } from "react-bootstrap";
import { ButtonProps } from "./button-type";
export const Button = ({ children, onClick }: ButtonProps) => {
  return <BootstrapButton onClick={onClick}>{children}</BootstrapButton>;
};
