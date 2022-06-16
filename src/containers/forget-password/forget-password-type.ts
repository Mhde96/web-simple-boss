type ForgetPasswordPagePropsType = {
    handleChange: any;
    values: ForgetPasswordStateType;
    errors: any;
    handleSubmit: any;
  };
  
  type ForgetPasswordStateType = {
    email: string;
  };
  
  export const ForgetPasswordState: ForgetPasswordStateType = {
    email: "",
  };
  
  export type { ForgetPasswordPagePropsType, ForgetPasswordStateType };