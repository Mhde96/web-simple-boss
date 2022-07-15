import { useFinancialStatement } from "./financial-statement-functions";
import { FinancialStatementPage } from "./FinancialStatementPage";

export const TradingAccountContainer = () => {
  const state = useFinancialStatement().trading_account;

  const props = { state };
  return <FinancialStatementPage {...props} />;
};
