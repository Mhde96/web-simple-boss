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
  border,
  maxWidth,
  html,
  textAlign,
  onClick
}: TextPropsType) => {
  const colors = useColors();
  color = color ? color : colors.text;

  const classes = classNames(fs, {
    bold,
    center,
    ["break-spaces"]: breakSpaces,
    ["border-text"]: border,
    onClick
  });

  if (html)
    return (
      <div id="text-style" style={{ color, textAlign }}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );

  return (
    <div id="text-style" onClick={onClick}>
      <div className={classes} style={{ color, maxWidth, textAlign }}>
        {children}
      </div>
    </div>
  );
};
