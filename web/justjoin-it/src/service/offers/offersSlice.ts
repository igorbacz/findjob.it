import { createSlice } from "@reduxjs/toolkit";
import { BigOfferDetails } from "../../types/types";

export const offerSlice = createSlice({
  name: "offers",
  initialState: [],
  reducers: {
    getOffers: (state, action) => {
      state = action.payload;
      return state;
    },
    deleteOffer: (state, action) => {
      const { _id } = action.payload;
      state = state.filter((offer: BigOfferDetails) => offer._id !== _id);
    },
  },
});

export const { getOffers, deleteOffer } = offerSlice.actions;
