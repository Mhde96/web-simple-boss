import { TextEditor } from "react-data-grid";
import { columnsKey, empty_row } from "./journal-entry-type";

export const jounral_entry_columns = [
  { key: columnsKey.id, name: columnsKey.id },
  { key: columnsKey.account_id, name: columnsKey.account_id },
  {
    key: columnsKey.accountName,
    name: columnsKey.accountName,
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return <strong>{"rows " + props.row.accountLength}</strong>;
    },
  },
  {
    key: columnsKey.description,
    name: columnsKey.description,
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.difference}</strong>;
    },
  },
  {
    key: columnsKey.credit,
    name: columnsKey.credit,
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalCredit}</strong>;
    },
  },
  {
    key: columnsKey.debit,
    name: columnsKey.debit,
    editor: TextEditor,
    summaryFormatter: (props: any) => {
      return <strong>{props.row.totalDebit}</strong>;
    },
  },
  // { key: columnsKey.status, name: columnsKey.status },
];

export const journal_entry_rows = (entries?: Array<any>): any => {
  if (entries?.length) {
    return entries;
  } else {
    let rows = [];
    for (let i = 0; i < 4; i++) {
      rows.push({ ...empty_row });
    }
    return rows;
  }
};

export function rowKeyGetter(row: any) {
  console.log(row);
  return row.id;
}

export const deleteRow = (rowIdx: number, setValues: any) => {
  setValues((prevValues: any) => ({
    ...prevValues,
    journalentries: prevValues.journalentries.filter(
      (entary: any, index: number) => index != rowIdx
    ),
  }));
};
