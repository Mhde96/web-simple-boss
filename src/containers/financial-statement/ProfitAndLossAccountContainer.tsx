import {  useFinancialStatement } from "./financial-statement-functions";
import { FinancialStatementPage } from "./FinancialStatementPage";

export const ProfitAndLossAccountContainer = () => {
  
  const state = useFinancialStatement().profit_account

  

  const props = { state };
  return <FinancialStatementPage {...props} />;
};
