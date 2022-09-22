import { RootState } from "./store";

export const allOffersSelector = (state: RootState) => state;

export const filterAndSortSelector =
  (state: RootState) => (currentStackParam: null | string, remoteOffersParam: null | string, currentSortParam: null | string) => {
    return state
      ? state
          .filter((item) => {
            if (currentStackParam && item.techStack.map((item) => item.stackName).indexOf(currentStackParam) === -1) {
              //findindex
              console.log("tutaj");
              return false;
            }
            if (remoteOffersParam && !item.remote) {
              return false;
            }
            return true;
          })
          .sort((a, b) => {
            // if (!currentSortParam) {
            //   return 0;
            // }
            if (currentSortParam === "latest") {
              return new Date(b.dateAdded).valueOf() - new Date(a?.dateAdded).valueOf();
            }
            if (currentSortParam === "highest salary" && Number(b.amount) - Number(a.amount)) {
              return 1;
            }
            if (currentSortParam === "lowest salary" && Number(a.amount) - Number(b.amount)) {
              return -1;
            } else return 0;
          })
      : [];
  };
