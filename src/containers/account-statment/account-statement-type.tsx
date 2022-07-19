import { endroutes } from "../../constant/endroutes";
import { accountType } from "../accounts/account-type";

export enum columnsKey {
  id = "id",
  number = "number",
  account_id = "account_id",
  accountName = "accountName",
  description = "description",
  debit = "debit",
  credit = "credit",
}

export const account_table_columns = [
  // { key: columnsKey.id, name: columnsKey.id },
  { key: columnsKey.number, name: columnsKey.number },
  {
    key: columnsKey.description,
    name: columnsKey.description,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.difference}</strong>;
    },
  },
 
  {
    key: columnsKey.credit,
    name: columnsKey.credit,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalCredit}</strong>;
    },
  },
  {
    key: columnsKey.debit,
    name: columnsKey.debit,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalDebit}</strong>;
    },
  },
];

export type AccountStatementPagePropsType = {
  account: accountType;
  entries: any;
  accounts: any;
  handleGetAccountData: any;
  summaryRows: any;
  selectedAccount: any;
};

export const navigateAccountStatement = ({ key, navigate }: any) => {
  if (key) {
    navigate(endroutes.account_statment(key).go);
  } else {
    alert("you didnt send account key ");
  }
};
