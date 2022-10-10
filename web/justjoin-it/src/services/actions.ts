import { BigOfferDetails } from "../types/types";
import { offerActions } from "./offersSlice";

export const fetchOffersData = () => {
  return async (dispatch: (arg0: { payload: BigOfferDetails; type: string }) => void) => {
    const fetchOffers = async () => {
      const response = await fetch("http://localhost:3001/api/");
      if (!response.ok) {
        throw new Error("Could not fetch offers data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const offersData = await fetchOffers();
      console.log(offersData);
      dispatch(offerActions.getOffers(offersData));
    } catch (error) {
      console.log(error);
    }
  };
};
