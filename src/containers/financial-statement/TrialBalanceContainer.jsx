import { useFinancialStatement } from "./financial-statement-functions";
import { FinancialStatementPage } from "./FinancialStatementPage";

export const TrialBalanceContainer = () => {
  const { trial_balance_ammount, trial_balance } = useFinancialStatement();

  const state = trial_balance;

  const props = { state };
  return <FinancialStatementPage {...props} />;
};
