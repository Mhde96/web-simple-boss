import DataGrid from "react-data-grid";
import {
  columnsKey,
  jounral_entry_columns,
  JournalEntryPagePropsType,
  journal_entry_rows,
} from "./journal-entry-type";

export const JournalEntaryPage = (props: JournalEntryPagePropsType) => {
  return (
    <>
      <DataGrid
        className={"rdg-light"}
        // rowRenderer={RowRenderer}
        columns={jounral_entry_columns}
        // onSelectedCellChange={props.onSelectedCellChange}
        rows={props.values.journalentries}
        onRowsChange={props.onRowsChange}
        // rowKeyGetter={rowKeyGetter}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
      />
    </>
  );
};
