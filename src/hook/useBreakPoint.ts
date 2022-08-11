import { useMedia } from "react-use";

interface ReturnType {
  isPhone: boolean;
  isTablet: boolean;
  isLaptop: boolean;
}

export const useBreakpoints = (): ReturnType => {
  //   const isPhone = useMedia("(min-width: 0px)");
  const isPhone = useMedia("(max-width: 576px)");
  const isTablet = useMedia("(max-width: 768px)");
  const isLaptop = useMedia("(min-width: 992px)");
  //   const xl = useMedia("(min-width: 1200px)");

  return { isPhone, isTablet, isLaptop };
};
