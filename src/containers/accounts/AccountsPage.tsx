import { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountCard } from "../../components/cards/account/AccountCard";
import { AccountsPropsType } from "./account-type";
import { AccountDialog, OpenAccountDialog } from "./AccountDialog";
import "./account-page-styles.scss";
export const AccountsPage = (props: AccountsPropsType) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div id="account-page-styles">
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
      {props.accounts.map((item: any, index) => (
        <div key={index}>
          <AccountCard
            isHeader
            name={item.name}
            account_key={item.key}
            index={index}
            operations={{
              open: () => props.handleNavigateAccount(item.key),
              update: () => OpenAccountDialog(location, navigate, item),
              delete: () => {
                props.DeleteAccountAsync(item);
              },
            }}
          />
        </div>
      ))}
    </div>
  );
};
