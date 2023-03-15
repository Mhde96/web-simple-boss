import { useFormik } from "formik";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import {
  fetchAccountsAsync,
  fetchJournalsAsync,
} from "../../redux/data/dataAsync";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import { useAppDispatch } from "../../redux/hooks";
import { SelectAccountDialog } from "../../widgets/select-account/SelectAccountDialog";
import { accountType } from "../accounts/account-type";
import { journalType } from "../journals/journal-type";
import {
  jounral_entry_columns,
  JournalApi,
  journal_entry_rows,
} from "./entries-functions";
import {
  columnsKey,
  empty_row,
  entryType,
  JournalEntryPagePropsType,
} from "./journal-entry-type";
import { EntriesPage } from "./EntriesPage";
import { useDbFetchAccounts } from "../../db/data/accountsDb";
import {
  saveJournalsIndexedDb,
  useFetchJournalsIndexedDb,
} from "../../db/data/journalsDb";

export const EntriesContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accounts = useDbFetchAccounts();
  const journals = useFetchJournalsIndexedDb();
  const { number } = useParams();

  useEffect(() => {
    dispatch(fetchJournalsAsync());
    dispatch(fetchAccountsAsync());
  }, []);

  useEffect(() => {
    if (accounts.length && journals.length) getData();
  }, [journals, accounts, number]);
  const { values, setValues, handleChange, handleSubmit } = useFormik({
    initialValues: {
      number,
      description: "",
      date: new Date(),
      journalentries: journal_entry_rows(),
    },
    onSubmit: (values) => {
      // JournalApi(values, navigate);
      console.log("values +> ", values);
      saveJournalsIndexedDb(values);
      // navigate(endroutes.journals.path);
    },
  });

  const getData = () => {
    let data: Array<entryType> = [];
    const journal = journals.find(
      (journal: journalType) => journal.number == number
    );

    journal?.journalentries?.map((item) => {
      const account = accounts.find(
        (account: accountType) => account.id == item.account_id
      );
      data.push({
        ...item,
        accountName: account?.name,
        accountKey: account?.key,
      });
    });

    if (number) {
      setValues({
        ...values,
        ...journal,
        number,

        journalentries: [...data, ...journal_entry_rows()],
      });
    }
  };

  const getNextJournal = () => {
    let index = journals.findIndex((item) => item.number == number) + 1;
    const length = journals.length;

    if (number == "new") {
      index = length - 1;
    }

    if (length > index) {
      const next = journals[index];
      console.log("next => ", next);
      navigate(endroutes.journalentaries(next.number).go);
      setValues({ ...values, number: next.number.toString() });
    }
  };

  const getPreviousJournal = () => {
    let index = journals.findIndex((item) => item.number == number);

    const length = journals.length;

    if (number == "new") {
      index = length;
    }

    if (index != 0) {
      const next = journals[index - 1];
      console.log("next => ", next);
      navigate(endroutes.journalentaries(next.number).go);
      setValues({ ...values, number: next.number.toString() });
    }
  };

  const handleNavigateNew = () => {
    navigate(endroutes.journalentaries().newJournal);
  };

  const handleNavigateJournals = () => navigate(endroutes.journals.path);
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
        e.name.toLowerCase().match(value.toLowerCase())
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
              [columnsKey.accountKey]: account.key,
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
    const accountLength = values?.journalentries?.filter(
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

    handleChange,
    handleSubmit,
    getNextJournal,
    getPreviousJournal,
    handleNavigateNew,
    handleNavigateJournals,
    // goAccountStatement
  };

  if (values?.journalentries?.length > 0)
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
        <EntriesPage {...props} />
      </>
    );

  return null;
};
