import { useFormik } from "formik";
import _ from "lodash";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAccounts } from "../../redux/data/dataSlice";
import { SelectAccountDialog } from "../../widgets/select-account/SelectAccountDialog";
import { accountType } from "../accounts/account-type";
import {
  jounral_entry_columns,
  journal_entry_rows,
} from "./journal-entry-functions";
import {
  columnsKey,
  empty_row,
  entryType,
  JournalEntryPagePropsType,
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
  const [rowIndex, setRowIndex] = useState(0);
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

  const summaryRows = useMemo(() => {
    const totalCredit = _.sumBy(values.journalentries, (item: any) =>
      Number(item.credit)
    );
    const totalDebit = _.sumBy(values.journalentries, (item: any) =>
      Number(item.debit)
    );
    const accountLength = values.journalentries.filter(
      (item: any) => item.account_id
    )?.length;

    const difference = totalDebit - totalCredit;
    return [
      {
        totalCredit,
        totalDebit,
        accountLength,
        difference,
      },
    ];
  }, [values.journalentries]);

  const props: JournalEntryPagePropsType = {
    values,
    onRowsChange,
    onSelectedCellChange,
    summaryRows,
    current,
    rowIndex,
    setRowIndex,
    setValues,
    // goAccountStatement
  };
  return (
    <>
      <SelectAccountDialog
        onSubmit={(account: accountType) => {
          setOpen(false);
          fillAccount(account, rowIndex);
        }}
        open={open}
        setOpen={setOpen}
        rowIndex={1}
        text={"2"}
        onClose={() => {}}
      />
      <JournalEntaryPage {...props} />{" "}
    </>
  );
};
