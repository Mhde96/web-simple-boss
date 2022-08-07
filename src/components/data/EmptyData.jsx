import { Button } from "react-bootstrap";
import { ExclamationIcon } from "../../assets/icons/ExclamationIcon";
import { useColors } from "../../styles/variables-styles";

export const EmptyData = () => {
  const colors = useColors();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        color: colors.text,
      }}
    >
      <ExclamationIcon size={128} />
      <h1 style={{ width: 600, textAlign: "center" }}>
        You Dont have any account yet how do you think you will start working
      </h1>

      <br />
      <Button>Add First Account</Button>
    </div>
  );
};
