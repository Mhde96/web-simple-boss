import { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountCard } from "../../components/cards/account/AccountCard";
import { AccountsPropsType } from "./account-type";
import { AccountDialog, OpenAccountDialog } from "./AccountDialog";

export const AccountsPage = (props: AccountsPropsType) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
     
      <div className="d-flex flex-column">
        <Button
          onClick={() => {
            OpenAccountDialog(location, navigate, undefined);
          }}
          style={{ width: 100 }}
        >
          Add
        </Button>
        <hr />
        <AccountCard name={"name"} />
        {props.accounts.map((item, index) => (
          <AccountCard
            key={index}
            {...item}
            operations={{
              update: () => OpenAccountDialog(location, navigate, item),
              delete: () => {},
            }}
          />
        ))}
      </div>
    </>
  );
};
