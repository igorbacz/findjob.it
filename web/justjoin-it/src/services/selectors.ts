import { BigOfferDetails } from "../types/types";
import { RootState } from "./store";

export const allOffersSelector = (state: RootState) => state;

export const offersRemoteSelector = (state: RootState) => {
  return state.filter((item: BigOfferDetails) => item.remote === true);
};

export const offersStackSelector =
  (state: RootState) => (currentStackParam: null | string, remoteOffersParam: null | string, currentSortParam: null | string) => {
    const filteredOffers: BigOfferDetails[] = [];
    state.forEach((item) => {
      item.techStack.forEach((nameStack) => {
        if (nameStack.stackName === currentStackParam) {
          filteredOffers.push(item);
        }
      });
    });
    if (!remoteOffersParam) {
      return filteredOffers;
    } else if (remoteOffersParam) {
      return filteredOffers.filter((item) => item.remote === true);
    } else if (currentSortParam) {
      console.log("currentSortParam latest ");
      return filteredOffers.sort((a: any, b: any) => new Date(b.dateAdded).valueOf() - new Date(a?.dateAdded).valueOf());
    }
  };

export const offersHighestSallarySelector = (state: RootState) => (currentStackParam: null | string, remoteOffersParam: null | string) => {
  const filteredOffers: BigOfferDetails[] = state.filter((item: BigOfferDetails) => item.amount).sort((a: any, b: any) => b?.amount - a?.amount);
  if (!remoteOffersParam) {
    return filteredOffers;
  } else if (remoteOffersParam) {
    return filteredOffers.filter((item) => item.remote === true);
  }
};

export const offersLowesttSallarySelector = (state: RootState) => (currentStackParam: null | string, remoteOffersParam: null | string) => {
  const filteredOffers: BigOfferDetails[] = state.filter((item: BigOfferDetails) => item.amount).sort((a: any, b: any) => a?.amount - b?.amount);
  if (!remoteOffersParam) {
    return filteredOffers;
  } else if (remoteOffersParam) {
    return filteredOffers.filter((item) => item.remote === true);
  }
};

export const offersLatestSelector = (state: RootState) => {
  const filteredOffers: BigOfferDetails[] = state
    .slice()
    .sort((a: any, b: any) => new Date(b.dateAdded).valueOf() - new Date(a?.dateAdded).valueOf());
  console.log("latest");
  return filteredOffers;
};
