import { Table } from "../../components/table/Table";
import { AccountsPropsType } from "./account-type";

export const AccountsPage = (props: AccountsPropsType) => {
  return (
    <>
      <Table data={props.accounts} columns={props.columns} />
    </>
  );
};
