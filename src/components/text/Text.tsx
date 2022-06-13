import { TextPropsType } from "./text-type";
import "../../index.scss"
import "./text-style.scss";
export const Text = ({ children, fs }: TextPropsType) => {
  
  return <div className={fs}>{children}</div>;
};
