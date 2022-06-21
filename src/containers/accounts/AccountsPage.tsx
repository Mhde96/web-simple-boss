// import { AccountTable } from "../../components/table/account/AccountTable";
import { Button } from "react-bootstrap";
import { AccountCard } from "../../components/cards/account/AccountCard";
import { AccountsPropsType } from "./account-type";

export const AccountsPage = (props: AccountsPropsType) => {
  return (
    <>
      {/* <AccountTable data={props.accounts} columns={props.columns} /> */}
      <div className="d-flex flex-column">
        <Button style={{ width: 100 }}>Add</Button>
        <hr />
        <AccountCard name={"name"} />
        {props.accounts.map((item) => (
          <AccountCard {...item} operations />
        ))}
      </div>
    </>
  );
};
