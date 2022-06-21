import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { endroutes } from "./constant/endroutes";
import { AccountStatmentContainer } from "./containers/account-statment/AccountStatementContainer";
import { AccountsContainer } from "./containers/accounts/AccountsContainer";
import { BalanceSheetContainer } from "./containers/financial-statement/BalanceSheetContainer";
import { ProfitAndLossAccountContainer } from "./containers/financial-statement/ProfitAndLossAccountContainer";
import { TradingAccountContainer } from "./containers/financial-statement/TradingAccountContainer";
import { ForgetPasswordContainer } from "./containers/forget-password/ForgetPasswordContainer";
import { JournalEntryContainer } from "./containers/journal-entry/JournalEntryContainer";
import { JournalsContainer } from "./containers/journals/JournalsContainer";
import { LoginContainer } from "./containers/login/LoginContainer";
import { SignupContainer } from "./containers/register/SignupContainer";
import { selectUser } from "./redux/app/appSlice";
import { AuthLayout } from "./widgets/layout/AuthLayout";
import { PlatformLayout } from "./widgets/layout/PlatformLayout";

export const Navigation = () => {
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlatformLayout />}>
          <Route
            path={endroutes.journalentaries().path}
            element={<JournalEntryContainer />}
          />
          <Route
            path={endroutes.journals.path}
            element={<JournalsContainer />}
          />
          <Route
            path={endroutes.accounts.path}
            element={<AccountsContainer />}
          />
          <Route
            path={endroutes.account_statment().null_path}
            element={<AccountStatmentContainer />}
          />
          <Route
            path={endroutes.account_statment().path}
            element={<AccountStatmentContainer />}
          />

          <Route
            path={endroutes.profit_and_loss_account.path}
            element={<ProfitAndLossAccountContainer />}
          />
          <Route
            path={endroutes.trading_account.path}
            element={<TradingAccountContainer />}
          />
          <Route
            path={endroutes.balancesheet.path}
            element={<BalanceSheetContainer />}
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={endroutes.login} element={<LoginContainer />} />
          <Route path={endroutes.register} element={<SignupContainer />} />
          <Route
            path={endroutes.forgetpassword}
            element={<ForgetPasswordContainer />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
