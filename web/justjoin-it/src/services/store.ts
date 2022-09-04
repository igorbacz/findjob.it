import { configureStore, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const initialState: any = data;

const offersReducer = (state = initialState, action: any) => {
  return {
    state,
  };
};

const offerSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    offersReducer(state) {
      return state;
    },
  },
});

export const store = configureStore({ reducer: offerSlice.reducer });

export const state = {
  initialState: data,
};

export type RootState = ReturnType<typeof store.getState>;
