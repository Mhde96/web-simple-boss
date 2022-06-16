import react from "react";
import { Input } from "../../components/input/Input";

type SignupPagePropsType = {
  handleChange: any;
  values: SignupStateType;
  errors: any;
  handleSubmit: any;
};

type SignupStateType = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};
export const SignupState: SignupStateType = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

export type { SignupPagePropsType, SignupStateType };
