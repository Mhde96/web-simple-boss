export enum columnsKey {
  id = "id",
  account_id = "account_id",
  accountName = "accountName",
  debit = "debit",
  credit = "credit",
}

export const account_table_columns = [
  { key: columnsKey.id, name: columnsKey.id },
  {
    key: columnsKey.account_id,
    name: columnsKey.account_id,
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
  values: any;
  accounts: any;
  handleGetAccountData: any;
  summaryRows: any;
};
