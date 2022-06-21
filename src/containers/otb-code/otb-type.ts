type OtbPagePropsType = {
    handleChange: any;
    values: OtbStateType;
    errors: any;
    handleSubmit: any;
  };
  
    type OtbStateType = {
    code: string;
  };
  
  export const OtbState: OtbStateType = {
    code: "",
  };
  
  export type { OtbPagePropsType, OtbStateType };