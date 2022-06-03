type LoginPagePropsType = {
  handleChange: any;
  values: LoginStateType;
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
