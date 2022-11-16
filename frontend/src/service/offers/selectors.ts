import { BigOfferDetails, StackProp } from "../../types/types";
import { RootState } from "../../types/types";

export const allOffersSelector = (state: RootState) => state.offers;

export const filterAndSortSelector =
  (state: RootState) => (currentStackParam: null | string, remoteOffersParam: null | string, currentSortParam: null | string) => {
    return state.offers
      ? state.offers
          .filter(
            (item: BigOfferDetails) =>
              !(
                (currentStackParam && !item.techStack.find((s: StackProp) => s.stackName === currentStackParam)) ||
                (remoteOffersParam && !item.remote)
              )
          )
          .sort((a: BigOfferDetails, b: BigOfferDetails) => {
            if (currentSortParam === "latest") {
              const x = new Date(b.dateAdded).valueOf();
              const y = new Date(a?.dateAdded).valueOf();
              return x - y;
            }
            if (currentSortParam === "highest salary") {
              const x = Number(b.amount);
              const y = Number(a.amount);
              return y <= x ? 1 : -1;
            }
            if (currentSortParam === "lowest salary") {
              const x = Number(b.amount);
              const y = Number(a.amount);
              return y >= x ? 1 : -1;
            } else return 0;
          })
      : [];
  };
