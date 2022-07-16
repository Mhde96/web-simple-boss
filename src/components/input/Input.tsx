import { Form } from "react-bootstrap";
import "./input-style.scss";
import { InputPropsType } from "./input-type";

export const Input = ({
  onChange,
  value,
  placeholder,
  error,
}: InputPropsType) => {
  return (
    <div id="input-style">
      <Form.Control
        defaultValue={value}
        // onChange={onChange}
        onBlur={onChange}
        placeholder={placeholder}
      />

      {error && <div className="error">{error} </div>}
    </div>
  );
};

export const ErrorMessage = ({ children }: any) => (
  <div id="input-style">
    {children && <div className="error">{children} </div>}
  </div>
);
