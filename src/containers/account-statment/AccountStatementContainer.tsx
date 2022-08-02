import { useFormik } from "formik";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { en } from "../../helper/languages/en";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import { AccountStatementPagePropsType } from "./account-statement-type";
import { AccountStatmentPage } from "./AccountStatementPage";

export const AccountStatmentContainer = () => {
  const { key } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const journals = useSelector(selectJournals);
  const accounts = useSelector(selectAccounts);

  const [entries, setEntries] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState({
    label: t(en.select_account),
    value: "",
  });
  const account = accounts.find((account) => account.key == key)?.id;

  useEffect(() => {
    if (key && accounts.length && journals.length) {
      handleGetAccountData(key);
    }
  }, [key, accounts, journals]);

  const handleGetAccountData = (key: string) => {
    const account = accounts.find((account) => account.key == key);
    const account_id = account.id;
    setSelectedAccount({
      value: account.key,
      label: account.name,
    });

    let data: any = [];

    journals.map((journal) => {
      journal.journal_entries?.map((entry) => {
        if (entry.account_id == account_id) {
          data.push({ ...entry, number: journal.number });
        }
      });
    });

    navigate(endroutes.account_statment(key).go);
    setEntries(data);
  };

  const summaryRows = useMemo(() => {
    const totalCredit = _.sumBy(entries, (item: any) => Number(item.credit));
    const totalDebit = _.sumBy(entries, (item: any) => Number(item.debit));
    const accountLength = entries?.filter(
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
  }, [entries]);

  const props: AccountStatementPagePropsType = {
    account,
    entries,
    accounts,
    handleGetAccountData,
    summaryRows,
    selectedAccount,
  };

  return <AccountStatmentPage {...props} />;
};
