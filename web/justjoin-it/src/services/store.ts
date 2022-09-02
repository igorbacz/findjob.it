import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
import { BigOfferDetails } from "../types/types";

const initialState: BigOfferDetails[] = data;

const offersReducer = (state = initialState, action: any) => {
  return {
    state,
  };
};

//create selector => offer slice =>oferty

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

const state = {
  initialState: data,
};

const selectData1 = (state: any) => state.initialState;

// const selectData2 = createSelector([selectData1],( initialState))=>{
//   return initialState
// }
