import { MotionProps } from "framer-motion";
import { useColors } from "../../styles/variables-styles";

export const SettingsCardAnimation = (isFocus: boolean): MotionProps => {
  const colors = useColors();
  return {
    animate: {
      background: isFocus ? colors.primary : colors.background,
      fill: isFocus ? colors.onPrimary : colors.text,
      color: isFocus ? colors.onPrimary : colors.text,
    },
  };
};
