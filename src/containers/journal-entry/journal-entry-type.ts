import { TextEditor } from "react-data-grid";
export enum columnsKey {
  id = "id",
  account_id = "account_id",
  accountName = "accountName",
  credit = "credit",
  debit = "debit",
  status = "status",
}

export const jounral_entry_columns = [
  { key: columnsKey.id, name: columnsKey.id },
  { key: columnsKey.account_id, name: columnsKey.account_id },
  {
    key: columnsKey.accountName,
    name: columnsKey.accountName,
    editor: TextEditor,
  },
  { key: columnsKey.credit, name: columnsKey.credit, editor: TextEditor },
  { key: columnsKey.debit, name: columnsKey.debit, editor: TextEditor },
  { key: columnsKey.status, name: columnsKey.status },
];

export type entryType = {
  [columnsKey.id]: number | null;
  [columnsKey.account_id]: number | null;
  [columnsKey.accountName]: string;
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
  [columnsKey.accountName]: "",
  [columnsKey.credit]: 0,
  [columnsKey.debit]: 0,
  [columnsKey.status]: status.empty,
};

export const journal_entry_rows = (entries?: Array<any>): any => {
  if (entries?.length) {
    return entries;
  } else {
    let rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({ ...empty_row });
      return rows;
    }
  }

  return [];
};

export type JournalEntryPagePropsType = {
  values: any;
  onSelectedCellChange: any;
  onRowsChange: any;
};
