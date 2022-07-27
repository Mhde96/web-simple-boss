import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider, useSelector } from "react-redux";
import i18n from "./helper/i18n";
import { refreshTokenAsync } from "./redux/app/appAsync";
import { selectColorMode } from "./redux/app/appSlice";
import { useAppDispatch } from "./redux/hooks";
import { store } from "./redux/store";
import { Navigation } from "./Routes";
import { ConfirmBoxWidget } from "./widgets/confirm-box/ConfirmBoxWidget";

export const App = () => {
  return (
    <Provider store={store}>
      <AppProvidedByRedux />
    </Provider>
  );
};

const AppProvidedByRedux = () => {
  const dispatch = useAppDispatch();
  const colorMode = useSelector(selectColorMode);
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
