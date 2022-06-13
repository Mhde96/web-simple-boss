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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {error && <div className="error">{error} </div>}
    </div>
  );
};
