import { createSlice, Slice } from "@reduxjs/toolkit";
import { BigOfferDetails } from "../../types/types";

export const offerSlice: Slice<BigOfferDetails[]> = createSlice({
  name: "offers",
  initialState: [],
  reducers: {
    getOffers: (state: BigOfferDetails[], action) => {
      state = action.payload;
      return state;
    },
    deleteOffer: (state, action) => {
      const { _id } = action.payload;
      const filteredArray: BigOfferDetails[] = state.filter((offer: BigOfferDetails) => offer._id !== _id);
      state = filteredArray;
      return state;
    },
  },
});

export const { getOffers, deleteOffer } = offerSlice.actions;
