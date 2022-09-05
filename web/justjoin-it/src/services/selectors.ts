import { BigOfferDetails } from "../types/types";
import { RootState } from "./store";

export const allOffersSelector = (state: RootState) => state;

export const offersRemoteSelector = (state: RootState) => {
  return state.filter((item: BigOfferDetails) => item.remote === true);
};
