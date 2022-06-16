import react from "react";
import { Input } from "../../components/input/Input";
import { Signup}
type SignupPagePropsType = {
    handleChange: any;
    values: SignupPageStateType;
    errors: any;
    handleSubmit: any;
  };

  type SignupStateType = {
    username:String;
    email: string;
    password: string;
    Confirm_Password: String;
  };
  export const LoginState: SignupStateType = {
    username:"",
    email: "",
    password: "",
    Confirm_Password:""

  };
  
  export type { SignupPagePropsType, SignupStateType , import  };
  