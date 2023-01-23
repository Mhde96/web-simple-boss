import { Button } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { Text } from "../../../components/text/Text";
import { useColors } from "../../../styles/variables-styles";

const URL = "https://wa.me";

export const ContactContainer = () => {
  const colors = useColors();
  let url = `${URL}/${"+971522215489"}`;

  return (
    <div
      onClick={() => {
        window.open(url);
      }}
    >
      <Button style={{ display: "flex" }}>
        <Text>Send A message </Text>

        <ReactSVG
          style={{
            fill: colors.text,
            minWidth: 24,
            maxWidth: 24,
            marginLeft: 10,
          }}
          src="assets/icons/whatsapp.svg"
        />
      </Button>
    </div>
  );
};
