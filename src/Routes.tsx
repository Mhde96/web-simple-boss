import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { endroutes } from "./constant/endroutes";
import { AccountStatmentContainer } from "./containers/account-statment/AccountStatementContainer";
import { AccountsContainer } from "./containers/accounts/AccountsContainer";
import { ChangeForgetPasswordContainer } from "./containers/change-forget-password/ChangeForgetPasswordContainer";
import { BalanceSheetContainer } from "./containers/financial-statement/BalanceSheetContainer";
import { ProfitAndLossAccountContainer } from "./containers/financial-statement/ProfitAndLossAccountContainer";
import { TradingAccountContainer } from "./containers/financial-statement/TradingAccountContainer";
import { ForgetPasswordContainer } from "./containers/forget-password/ForgetPasswordContainer";
import { JournalEntryContainer } from "./containers/journal-entry/JournalEntryContainer";
import { JournalsContainer } from "./containers/journals/JournalsContainer";
import { LoginContainer } from "./containers/login/LoginContainer";
import { OtbContainer } from "./containers/otb-code/OtbContainer";
import { SignupContainer } from "./containers/register/SignupContainer";

import { selectUser } from "./redux/app/appSlice";
import { fetchAccountsAsync, fetchJournalsAsync } from "./redux/data/dataAsync";
import { useAppDispatch } from "./redux/hooks";
import { AuthLayout } from "./widgets/layout/AuthLayout";
import { PlatformLayout } from "./widgets/layout/PlatformLayout";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchAccountsAsync());
    dispatch(fetchJournalsAsync());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user?.id ? (
              <PlatformLayout />
            ) : (
              <Navigate to={endroutes.login} replace />
            )
          }
        >
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
          <Route path={endroutes.otp} element={<OtbContainer />} />
          <Route
            path={endroutes.changeforgetpassword}
            element={<ChangeForgetPasswordContainer />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
