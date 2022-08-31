import { configureStore, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
import { BigOfferDetails } from "../types/types";

const initialState: BigOfferDetails[] = data;

const offersReducer = (state = initialState, action: any) => {
  return {
    state,
  };
};

export const offerSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    offersReducer(state) {
      return state;
    },
  },
});

export const store = configureStore({ reducer: offerSlice.reducer });
