import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import { financialStatementFunctions } from "./financial-statement-functions";
import { FinancialStatementPage } from "./FinancialStatementPage";

export const ProfitAndLossAccountContainer = () => {
  const journals = useSelector(selectJournals);
  const accounts = useSelector(selectAccounts);
  const [state, setState] = useState({});

  useEffect(() => {
    if (accounts.length && journals.length)
      setState(
        financialStatementFunctions(accounts, journals, setState).profit
      );
  }, [journals.length, accounts.length]);

  const props = { state };
  return <FinancialStatementPage {...props} />;
};
