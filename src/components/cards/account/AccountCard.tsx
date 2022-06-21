import { Button } from "react-bootstrap";
import "./account-card-styles.scss";

export const AccountCard = ({ name, operations }: any) => {
  return (
    <div id="account-card-styles">
      <div className="name">{name}</div>
      {operations && (
        <div style={{ display: "flex", gap: "30px" }}>
          <Button>Open</Button>
          <Button>Update</Button>
          <Button>Delete</Button>
        </div>
      )}
    </div>
  );
};
