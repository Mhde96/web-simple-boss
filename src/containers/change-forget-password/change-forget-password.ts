type ChangeForgetPasswordPagePropsType = {
    handleChange: any;
    values: ChangeForgetPasswordStateType;
    errors: any;
    handleSubmit: any;
  };
  
  type ChangeForgetPasswordStateType = {
    newpassword: string;
    confirmpassword: string;
  };
  
  export const ChangeForgetPasswordState: ChangeForgetPasswordStateType = {
    newpassword: "",
    confirmpassword: "",
  };
  
  export type { ChangeForgetPasswordPagePropsType, ChangeForgetPasswordStateType };
  

  