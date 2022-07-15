import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import { useFinancialStatement } from "./financial-statement-functions";
import { FinancialStatementPage } from "./FinancialStatementPage";

export const BalanceSheetContainer = () => {
  const state = useFinancialStatement().balance_sheet;

  const props = { state };
  return <FinancialStatementPage {...props} />;
};
