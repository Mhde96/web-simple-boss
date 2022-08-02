import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/app/appSlice";
import { getColorMode } from "../utils/getColorMode";

export const useColorMemo = () => {
  const colorMode = useSelector(selectColorMode);
  const colorMemo = useMemo(
    () => (colorMode == "auto" ? getColorMode() : colorMode),
    [colorMode]
  );

  return colorMemo;
};
