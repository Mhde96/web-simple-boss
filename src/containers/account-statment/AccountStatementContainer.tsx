import { useFormik } from "formik";
import _ from "lodash";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import { AccountStatementPagePropsType } from "./account-statement-type";
import { AccountStatmentPage } from "./AccountStatementPage";

export const AccountStatmentContainer = () => {
  const journals = useSelector(selectJournals);
  const accounts = useSelector(selectAccounts);

  const { values, setValues } = useFormik({
    initialValues: {
      account_id: null,
      entries: [],
    },
    onSubmit: () => {},
  });

  // const [entries, setEntries] = useState();

  const handleGetAccountData = (account_id: any) => {
    let data: any = [];

    journals.map((journal) => {
      journal.journal_entries?.map((entry) => {
        if (entry.account_id == values.account_id) {
          data.push(entry);
        }
      });
    });

    setValues({ ...values, account_id, entries: data });
  };

  const summaryRows = useMemo(() => {
    const totalCredit = _.sumBy(values.entries, (item: any) =>
      Number(item.credit)
    );
    const totalDebit = _.sumBy(values.entries, (item: any) =>
      Number(item.debit)
    );
    const accountLength = values?.entries?.filter(
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
  }, [values.entries]);



  const props: AccountStatementPagePropsType = {
    values,
    accounts,
    handleGetAccountData,
    summaryRows
  };
  return <AccountStatmentPage {...props} />;
};
