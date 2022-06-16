import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { endroutes } from "./constant/endroutes";
import { AccountsContainer } from "./containers/accounts/AccountsContainer";
import { JournalEntryContainer } from "./containers/journal-entry/JournalEntryContainer";
import { JournalsContainer } from "./containers/journals/JournalsContainer";
import { LoginContainer } from "./containers/login/LoginContainer";
import {SignupContainer} from "./containers/register/SignupContainer";
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
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={endroutes.login} element={<LoginContainer />} />
          <Route path={endroutes.register} element={<Signupconstant />} />  
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};
