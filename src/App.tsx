import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { refreshTokenAsync } from "./redux/app/appAsync";
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
  useEffect(() => {
    dispatch(refreshTokenAsync());
  }, []);

  return (
    <>
      <ConfirmBoxWidget />
      <Navigation />
    </>
  );
};
