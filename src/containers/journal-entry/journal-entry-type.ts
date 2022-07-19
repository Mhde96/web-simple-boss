export enum columnsKey {
  id = "id",
  account_id = "account_id",
  accountKey = "accountKey",
  accountName = "accountName",
  description = "description",
  credit = "credit",
  debit = "debit",
  status = "status",
}

export type entryType = {
  [columnsKey.id]: number | null;
  [columnsKey.account_id]: number | null;
  [columnsKey.accountKey]: string;
  [columnsKey.accountName]: string;
  [columnsKey.description]: string;
  [columnsKey.credit]: number;
  [columnsKey.debit]: number;
  [columnsKey.status]: number;
};

enum status {
  empty = 0,
  nothing = 1,
  add = 2,
  update = 3,
  delete = 4,
}

export const empty_row: entryType = {
  [columnsKey.id]: null,
  [columnsKey.account_id]: null,
  [columnsKey.accountKey]: "",
  [columnsKey.accountName]: "",
  [columnsKey.description]: "",
  [columnsKey.credit]: 0,
  [columnsKey.debit]: 0,
  [columnsKey.status]: status.empty,
};

export type JournalEntryPagePropsType = {
  values: any;
  onSelectedCellChange: any;
  onRowsChange: any;
  summaryRows: any;
  current: any;
  rowIndex: number;
  setRowIndex: any;
  setValues: any;
  handleChange: any;
  handleSubmit: any;
  getNextJournal: any;
  getPreviousJournal: any;
  handleNavigateNew: any;
  handleNavigateJournals: any;
};
