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
      const filteredArray = state.filter((offer: BigOfferDetails) => offer._id !== _id);
      state = filteredArray;
      return state;
    },
  },
});

export const { getOffers, deleteOffer } = offerSlice.actions;
