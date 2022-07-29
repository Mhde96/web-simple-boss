// ===================================================

import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/app/appSlice";

// colors
const primary = "#f6cf50";
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
  const colorMode = useSelector(selectColorMode);
  const all = {
    primary,
    onPrimary,
    link,
  };

  if (colorMode == "light")
    return {
      background,
      surface,
      onSurface,
      ...all,
    };
  else
    return {
      background: backgroundDark,
      surface: surfaceDark,
      onSurface: onSurfaceDark,
      ...all,
    };
};

// ===================================================
// ===================================================
// ===================================================
