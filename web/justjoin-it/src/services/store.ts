import { configureStore } from "@reduxjs/toolkit";
import offerSlice from "./offersSlice";

export const store = configureStore({ reducer: offerSlice.reducer });
