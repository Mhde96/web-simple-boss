export enum columnsKey {
  id = "id",
  account_id = "account_id",
  accountName = "accountName",
  debit = "debit",
  credit = "credit",
}

export const account_table_columns = [
  { key: columnsKey.id, name: columnsKey.id },
  { key: columnsKey.account_id, name: columnsKey.account_id },
  { key: columnsKey.debit, name: columnsKey.debit },
  { key: columnsKey.credit, name: columnsKey.credit },
];

export type AccountStatementPagePropsType = {
  values: Array<any>;
};
