import { accountType } from "../accounts/account-type";

export enum columnsKey {
  id = "id",
  account_id = "account_id",
  accountName = "accountName",
  description = "description",
  debit = "debit",
  credit = "credit",
}

export const account_table_columns = [
  { key: columnsKey.id, name: columnsKey.id },
  {
    key: columnsKey.description,
    name: columnsKey.description,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.difference}</strong>;
    },
  },
  {
    key: columnsKey.debit,
    name: columnsKey.debit,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalDebit}</strong>;
    },
  },
  {
    key: columnsKey.credit,
    name: columnsKey.credit,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalCredit}</strong>;
    },
  },
];

export type AccountStatementPagePropsType = {
  account: accountType;
  entries: any;
  accounts: any;
  handleGetAccountData: any;
  summaryRows: any;
};
