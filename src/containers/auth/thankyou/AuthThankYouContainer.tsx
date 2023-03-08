import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button/Button";
import { Text } from "../../../components/text/Text";
import { endroutes } from "../../../constant/endroutes";

export const AuthThankYouContainer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/db");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Text bold fs="f1">
        Thanks to be one of us
      </Text>
      <Text fs="f1">With</Text>
      <Text fs="f1">Boss Accounting</Text>
      <br />
      <br />
      <br />
      <Button onClick={handleNavigate}>Go To your Dashboard</Button>
    </div>
  );
};
