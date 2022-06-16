import { TextPropsType } from "./text-type";
import "../../index.scss";
import "./text-style.scss";
import classNames from "classnames";
export const Text = ({
  children,
  fs,
  bold,
  center,
  breakSpaces,
}: TextPropsType) => {
  const classes = classNames(fs, {
    bold,
    center,
    ["break-spaces"]: breakSpaces,
  });

  return <div className={classes}>{children}</div>;
};
