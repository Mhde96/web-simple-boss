import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { LoginContainer } from "./containers/login/LoginContainer";
import { Layout } from "./widgets/Layout";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
