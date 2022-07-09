type LoginPagePropsType = {
  handleChange: any;
  values: LoginStateType;
  errors: any;
  handleSubmit: any;
  handleRegister: any;
};

type LoginStateType = {
  email: string;
  password: string;
};

export const LoginState: LoginStateType = {
  email: "",
  password: "",
};

export type { LoginPagePropsType, LoginStateType };
