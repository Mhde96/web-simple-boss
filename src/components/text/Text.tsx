import { TextPropsType } from "./text-type";
import "../../index.scss";
import "./text-style.scss";
import classNames from "classnames";
export const Text = ({ children, fs, bold, center }: TextPropsType) => {
  const classes = classNames(fs, {
    bold,
    center,
  });

  return <div className={classes}>{children}</div>;
};
