import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState } from "../types/types";
import { AppStore } from "../service/store";
import { offerSlice } from "../service/offers/offersSlice";
import { UserSlice } from "../service/user/userSlice";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const rootReducer = {
  offers: offerSlice.reducer,
  userData: UserSlice.reducer,
};

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      offers: [],
      userData: undefined,
    },
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
