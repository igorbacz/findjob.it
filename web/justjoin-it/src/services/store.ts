import { Action, configureStore, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
import { BigOfferDetails } from "../types/types";


export type RootState = ReturnType<typeof store.getState>;

const initialState: BigOfferDetails[] = data;

const offersReducer = (state = initialState, action: Action) => {
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
