import { configureStore } from "@reduxjs/toolkit";
import { offerSlice } from "./offers/offersSlice";
import { UserSlice } from "./user/userSlice";

const rootReducer = {
  offers: offerSlice.reducer,
  user: UserSlice.reducer,
};

export const store = configureStore({ reducer: rootReducer });
