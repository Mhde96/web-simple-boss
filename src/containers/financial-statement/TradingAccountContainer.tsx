import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import { financialStatementFunctions } from "./financial-statement-functions";
import { FinancialStatementPage } from "./FinancialStatementPage";

export const TradingAccountContainer = () => {
  const journals = useSelector(selectJournals);
  const accounts = useSelector(selectAccounts);
  const [state, setState] = useState({});

  useEffect(() => {
    if (accounts.length && journals.length)
    financialStatementFunctions(accounts, journals, setState).tradingAccount();
  }, [journals.length, accounts.length]);

  const props = { state };
  return <FinancialStatementPage {...props} />;
};
