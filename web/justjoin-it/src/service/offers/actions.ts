import { BigOfferDetails } from "../../types/types";
import { offerSlice } from "./offersSlice";

const getOffers = async () => {
  const response = await fetch("http://localhost:3001/api/");
  if (!response.ok) {
    throw new Error("Could not fetch offers data");
  }
  console.log(offerSlice.reducer);
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
