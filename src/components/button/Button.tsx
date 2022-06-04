import { Button as BootstrapButton } from "react-bootstrap";
import { ButtonProps } from "./button-type";
export const Button = ({ children }: ButtonProps) => {
  return <BootstrapButton>{children}</BootstrapButton>;
};
