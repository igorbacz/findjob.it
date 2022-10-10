import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "offers",
  initialState: [],
  reducers: {
    getOffers(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const offerActions = offerSlice.actions;

export default offerSlice;
