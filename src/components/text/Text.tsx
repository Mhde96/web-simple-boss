import { TextPropsType } from "./text-type";
import "../../index.scss";
import "./text-style.scss";
import classNames from "classnames";
import { useColors } from "../../styles/variables-styles";
export const Text = ({
  children,
  fs,
  bold,
  center,
  breakSpaces,
  color,
}: TextPropsType) => {
  const colors = useColors();
  color = color ? color : colors.text;
  const classes = classNames(fs, {
    bold,
    center,
    ["break-spaces"]: breakSpaces,
  });

  return (
    <div className={classes} style={{ color }}>
      {children}
    </div>
  );
};
