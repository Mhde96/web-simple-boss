import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import {
  financialStatementFunctions,
  useFinancialStatement,
} from "./financial-statement-functions";
import { FinancialStatementPage } from "./FinancialStatementPage";

export const TrialBalanceContainer = () => {
  const journals = useSelector(selectJournals);
  const accounts = useSelector(selectAccounts);

  const { trial_balance_ammount, trial_balance } = useFinancialStatement();

  const state = trial_balance;

  const props = { state };
  return <FinancialStatementPage {...props} />;
};
