import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAccounts } from "../../redux/data/dataSlice";
import { accountType } from "../accounts/account-type";
import {
  columnsKey,
  empty_row,
  entryType,
  jounral_entry_columns,
  JournalEntryPagePropsType,
  journal_entry_rows,
} from "./journal-entry-type";
import { JournalEntaryPage } from "./JournalEntaryPage";

export const JournalEntryContainer = () => {
  const accounts = useSelector(selectAccounts);
  const { journal_id } = useParams();
  const { values, setValues } = useFormik({
    initialValues: {
      description: "",
      date: new Date(),
      journalentries: journal_entry_rows(),
    },
    onSubmit: () => {},
  });

  // ==============================================================================
  // useState
  const [rowIndex, setRowIndex] = useState(null);
  const [open, setOpen] = useState(false);
  // ==========================================
  const [current, setCurrent] = useState({
    idx: null,
    rowIdx: null,
    column: {},
  });
  const onSelectedCellChange = ({ idx, rowIdx }: { idx: any; rowIdx: any }) =>
    setCurrent({ ...current, idx, rowIdx, column: jounral_entry_columns[idx] });

  const onRowsChange = (
    newRows: Array<entryType>,
    data: { indexes: any; column: any }
  ) => {
    const { indexes } = data;
    const index = indexes[0];
    const value = newRows[data.indexes].accountName;

    if (data.column.key == columnsKey.credit) {
      // credit
      newRows[indexes].debit = 0;
    }
    // debit
    else if (data.column.key == columnsKey.debit) {
      newRows[indexes].credit = 0;
    }

    // account_name
    else if (data.column.key == columnsKey.accountName) {
      const accountsfiltered = accounts.filter((e: accountType) =>
        e.name.match(value)
      );

      if (accountsfiltered?.length > 1) {
        setValues({ ...values, journalentries: newRows });
        setRowIndex(index);
        setOpen(true);
        return;
      } else if (accountsfiltered?.length == 1) {
        return fillAccount(accountsfiltered[0], indexes);
      } else if (accountsfiltered?.length == 0) {
        newRows[indexes].accountName = "";
        newRows[indexes].account_id = null;
      }
    }

    if (index == values.journalentries?.length - 1) {
      setValues({
        ...values,
        journalentries: [...newRows, empty_row],
      });
    } else {
      setValues({ ...values, journalentries: newRows });
    }
  };

  const fillAccount = (account: accountType, rowIndex: number) => {
    setValues((prevValues) => ({
      ...prevValues,
      journalentries: prevValues.journalentries.map(
        (entary: entryType, index: number) => {
          if (index == rowIndex) {
            let _entary = { ...entary };

            return {
              ..._entary,
              [columnsKey.accountName]: account.name,
              [columnsKey.account_id]: account.id,
            };
          }
          // nothing happen
          else return entary;
        }
      ),
    }));
  };

  const props: JournalEntryPagePropsType = {
    values,
    onRowsChange,
    onSelectedCellChange,
  };
  return <JournalEntaryPage {...props} />;
};
