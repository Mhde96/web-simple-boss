import { Form } from "react-bootstrap";
import "./input-style.scss";
import { InputPropsType } from "./input-type";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { datePickerFormat } from "../../utils/date-format";

export const Input = ({
  type,
  onChange,
  value,
  placeholder,
  error,
  disabled,
}: InputPropsType) => {
  if (type == "date")
    return (
      <div id="input-style">
        <DatePicker
          className="date"
          onChange={onChange}
          selected={new Date(value)}
          dateFormat={datePickerFormat}
        />
      </div>
    );

  return (
    <div id="input-style">
      <Form.Control
        type={type}
        disabled={disabled}
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
