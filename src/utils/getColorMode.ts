export const getColorMode = () => {
  let colorMode = "";
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDark) return "dark";
  else return "light";
};
