import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { LoginContainer } from "./containers/login/LoginContainer";
import { DashboardLayout } from "./widgets/DashboardLayout";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}></Route>
        <Route path="login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
