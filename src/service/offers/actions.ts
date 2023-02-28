import { BigOfferDetails } from "../../types/types";
import { offerSlice } from "./offersSlice";

export const getOffers = async () => {
  const response = await fetch("http://localhost:3000/offers");
  if (!response.ok) {
    throw new Error("Could not fetch offers data");
  }
  const data = await response.json();
  return data;
};


export const getOffersData = () => {
  return async (dispatch: (arg0: { payload: BigOfferDetails; type: string }) => void) => {
    try {
      const offersData = await getOffers();
      dispatch(offerSlice.actions.getOffers(offersData));
    } catch (error) {
      console.log(error);
    }
  };
};
