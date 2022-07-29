import { MotionProps } from "framer-motion";
import { useColors } from "../../styles/variables-styles";
// import { colors } from "../../styles/variables-styles";

export const CardAnimationProps = (props: {
  index?: number;
  active?: boolean;
}): MotionProps => {
  const { index, active } = props;
  const colors = useColors();

  return {
    initial: {
      opacity: 0,
      borderRadius: 5,
    },
    animate: {
      background: active ? colors.primary : colors.surface,
      color: colors.onSurface,
      opacity: 1,
      padding: "6px 20px",

      transition: {
        delay: Number(index) * 0.05,
      },
    },
    whileHover: {
      background: colors.primary,
      color: colors.onPrimary,
    },
  };
};

export const EntriesAnimationProps = (): MotionProps => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      padding: "6px 20px",
    },
    exit: {
      opacity: -2,
      padding: "0px 0px",
      height: 0,
    },
  };
};
