import React, { useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider, useSelector } from "react-redux";
import i18n from "./helper/i18n";
import { refreshTokenAsync } from "./redux/app/appAsync";
import { selectColorMode } from "./redux/app/appSlice";
import { useAppDispatch } from "./redux/hooks";
import { store } from "./redux/store";
import { Navigation } from "./Routes";
import { ConfirmBoxWidget } from "./widgets/confirm-box/ConfirmBoxWidget";
import "./styles/themes.scss";
import { getColorMode } from "./utils/getColorMode";
import { useColorMemo } from "./hook/useColorMemo";
import axios from "axios";
export const App = () => {
  useEffect(() => {
    axios.get("/getCSRFToken").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Provider store={store}>
      <AppProvidedByRedux />
    </Provider>
  );
};

const AppProvidedByRedux = () => {
  const dispatch = useAppDispatch();
  const colorMode = useColorMemo();

  useEffect(() => {
    dispatch(refreshTokenAsync());
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className={`theme--${colorMode}`}>
        <ConfirmBoxWidget />
        <Navigation />
      </div>
    </I18nextProvider>
  );
};
