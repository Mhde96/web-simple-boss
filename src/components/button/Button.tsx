import { Button as BootstrapButton } from "react-bootstrap";
import { ButtonProps } from "./button-type";
import "./button-style.scss";
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    
      <BootstrapButton className="button-style" onClick={onClick}>
        {children}
      </BootstrapButton>
    
  );
};
