import { useLottie } from "lottie-react";
import { useEffect } from "react";
import balance from "./balance.json";
const size = 132;
export const BalanceLottie = () => {
  const options = {
    animationData: balance,
    loop: true,
    speed: 0.2,
    style: {
      width: size,
      height: size,
      alignSelf: "center",
    },
  };

  const { View, setSpeed } = useLottie(options);
  useEffect(() => {
    setSpeed(0.7);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          // background: colors.surface,
          borderRadius: 100,
          width: size + 10,
          height: size + 10,
        }}
      >
        {View}
      </div>
    </div>
  );
};
