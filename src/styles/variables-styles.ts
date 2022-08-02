// ===================================================

import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/app/appSlice";
import { getColorMode } from "../utils/getColorMode";

// colors
const primary = "#b5482a";
const primaryShade = "#a24025";
const primaryTint = "#bc5a3f";
const onPrimary = "#ffffff";

const secondary = "#fb8500";
const onSecondary = "#000000";

const background = "#f0f2f5";
const backgroundDark = "#18191a";

const onBackground = "#000000";
const onBackgroundDark = "#ffffff";

const surface = "#ffffff";
const surfaceDark = "#242526";

const onSurface = "#000000";
const onSurfaceDark = "#ffffff";

const text = "#212121";
const textDark = "#f7f8fa";

const border = "#ced0d4";
const borderDark = "#393a3b";

const error = "#F44336";
const danger = error;

const link = "#2680eb";

export const colors = {
  primary,
  onPrimary,
  secondary,
  onSecondary,
  background,
  backgroundDark,
  onBackground,
  onBackgroundDark,
  surface,
  surfaceDark,
  onSurface,
  onSurfaceDark,
  border,
  borderDark,
  error,
  danger,
  link,
};

export const useColors = () => {
  let colorMode = useSelector(selectColorMode);

  if (colorMode == "auto") {
    colorMode = getColorMode();
  }

  const all = {
    primary,
    primaryShade,
    primaryTint,
    onPrimary,

    link,
  };

  if (colorMode == "light")
    return {
      background,
      surface,
      onSurface,

      border,
      text,
      ...all,
    };
  else
    return {
      background: backgroundDark,
      surface: surfaceDark,
      onSurface: onSurfaceDark,

      border: borderDark,
      text: textDark,
      ...all,
    };
};

// ===================================================
// ===================================================
// ===================================================
