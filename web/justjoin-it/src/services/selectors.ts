import { BigOfferDetails } from "../types/types";
import { RootState } from "./store";

export const allOffersSelector = (state: RootState) => state;

export const offersRemoteSelector = (state: RootState) => {
  return state.filter((item: BigOfferDetails) => item.remote === true);
};

//TODO

export const offersStackSelector2 = (currentStackParam: null | string) => (state: RootState) => {
  return state
  // .filter((item: BigOfferDetails) => {
  //   return item.techStack.filter((nameStack) => {
  //     return  nameStack?.stackName === currentStackParam;
  //   });
  // });
};

export const offersHighestSallarySelector = (state: RootState) => {
  return state.filter((item: BigOfferDetails) => item.amount).sort((a: any, b: any) => b?.amount - a?.amount);
};

export const offersLowesttSallarySelector = (state: RootState) => {
  return state.filter((item: BigOfferDetails) => item.amount).sort((a: any, b: any) => a?.amount - b?.amount);
};

export const offersLatestSelector = (state: RootState) => {
  return state.slice().sort((a: any, b: any) => new Date(b.dateAdded).valueOf() - new Date(a?.dateAdded).valueOf());
};
