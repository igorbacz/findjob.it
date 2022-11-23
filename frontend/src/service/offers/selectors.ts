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
                (remoteOffersParam && !item.remote) ||
                (currentSortParam === "highest salary" && !item.amount) ||
                (currentSortParam === "lowest salary" && !item.amount)
              )
          )
          .sort((a, b) => {
            if (currentSortParam === "latest") {
              const x = new Date(b.dateAdded).valueOf();
              const y = new Date(a?.dateAdded).valueOf();
              return x - y;
            }
            if (currentSortParam === "highest salary") {
              const x = parseInt(b.amount);
              const y = parseInt(a.amount);
              return x - y;
            }
            if (currentSortParam === "lowest salary") {
              const x = parseInt(b.amount);
              const y = parseInt(a.amount);
              return y - x;
            } else return 0;
          })
      : [];
  };
