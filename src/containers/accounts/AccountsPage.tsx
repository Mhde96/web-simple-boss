import { AccountTable } from "../../components/table/account/AccountTable";
import { AccountsPropsType } from "./account-type";

export const AccountsPage = (props: AccountsPropsType) => {
  return (
    <>
      <AccountTable data={props.accounts} columns={props.columns} />
    </>
  );
};
