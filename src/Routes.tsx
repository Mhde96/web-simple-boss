import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { endroutes } from "./constant/endroutes";
import { AccountStatmentContainer } from "./containers/account-statment/AccountStatementContainer";
import { AccountsContainer } from "./containers/accounts/AccountsContainer";
import { AuthThankYouContainer } from "./containers/auth/thankyou/AuthThankYouContainer";
import { ChangeForgetPasswordContainer } from "./containers/change-forget-password/ChangeForgetPasswordContainer";
import { BalanceSheetContainer } from "./containers/financial-statement/BalanceSheetContainer";

import { IncomeStatementContainer } from "./containers/financial-statement/IncomeStatementContainer";
import { ProfitAndLossAccountContainer } from "./containers/financial-statement/ProfitAndLossAccountContainer";
import { TradingAccountContainer } from "./containers/financial-statement/TradingAccountContainer";
import { TrialBalanceContainer } from "./containers/financial-statement/TrialBalanceContainer";
import { ForgetPasswordContainer } from "./containers/forget-password/ForgetPasswordContainer";
import { EntriesContainer } from "./containers/entry/EntriesContainer";
import { JournalsContainer } from "./containers/journals/JournalsContainer";
import { LoginContainer } from "./containers/login/LoginContainer";
import { OtbContainer } from "./containers/otb-code/OtbContainer";
import { SignupContainer } from "./containers/register/SignupContainer";
import { AboutContainer } from "./containers/system/about/AboutContainer";

import { selectUser } from "./redux/app/appSlice";
import { fetchAccountsAsync, fetchJournalsAsync } from "./redux/data/dataAsync";
import { useAppDispatch } from "./redux/hooks";
import { AuthLayout } from "./widgets/layout/AuthLayout";
import { PlatformLayout } from "./widgets/layout/PlatformLayout";
import { HomeContainer } from "./containers/home/HomeContainer";
import { BlogContainer } from "./containers/system/blog/BlogContainer";
import { ContactContainer } from "./containers/system/contact/ContactContainer";
import { endpoints } from "./constant/endpoints";
import { DbControlContainer } from "./containers/db-control/DbControlContainer";

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
        <Route element={<AuthLayout />}>
          <Route
            path={endroutes.thankyou}
            element={<AuthThankYouContainer />}
          />
        </Route>

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
          <Route index element={<HomeContainer />} />
          <Route
            path={endroutes.journalentaries().path}
            element={<EntriesContainer />}
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
            path={endroutes.trial_balance.path}
            element={<TrialBalanceContainer />}
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
          <Route
            path={endroutes.income_statement.path}
            element={<IncomeStatementContainer />}
          />

          <Route path={endroutes.about.path} element={<AboutContainer />} />
          <Route path={endroutes.blog.path} element={<BlogContainer />} />
          <Route path={endroutes.contact.path} element={<ContactContainer />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={endroutes.login} element={<LoginContainer />} />
          <Route path={endroutes.register} element={<SignupContainer />} />
          <Route
            path={endroutes.thankyou}
            element={<AuthThankYouContainer />}
          />
          <Route path={endroutes.db} element={<DbControlContainer />} />
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
