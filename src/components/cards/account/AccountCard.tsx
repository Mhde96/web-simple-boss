import { Button } from "react-bootstrap";
import "./account-card-styles.scss";
import { AccountCardTypeProps } from "./account-card-type";

export const AccountCard = ({ name, operations }: AccountCardTypeProps) => {
  return (
    <div id="account-card-styles">
      <div className="name">{name}</div>

      <div style={{ display: "flex", gap: "30px" }}>
        {operations?.open && <Button>Open</Button>}
        {operations?.update && (
          <Button onClick={operations.update}>Update</Button>
        )}
        {operations?.delete && <Button onClick={operations.delete} variant={"danger"}>Delete</Button>}
      </div>
    </div>
  );
};
