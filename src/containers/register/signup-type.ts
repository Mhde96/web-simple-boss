import react from "react";
import { Input } from "../../components/input/Input";

type SignupPagePropsType = {
  handleChange: any;
  values: SignupStateType;
  errors: any;
  handleSubmit: any;
};

type SignupStateType = {
  username: String;
  email: string;
  password: string;
  Confirm_Password: String;
};
export const SignupState: SignupStateType = {
  username: "",
  email: "",
  password: "",
  Confirm_Password: "",
};

export type { SignupPagePropsType, SignupStateType };
