export const filterRemote = (state) => (remoteOffersParam) => {
  return state.offers ? state.offers.filter((item) => !(remoteOffersParam && !item.remote)) : [];
};
// export const filterAndSortSelector = (state) => (currentStackParam, remoteOffersParam, currentSortParam) => {
//   return state.offers
//     ? state.offers
//         .filter(
//           (item) => !((currentStackParam && !item.techStack.find((s) => s.stackName === currentStackParam)) || (remoteOffersParam && !item.remote))
//         )
//         .sort((a, b) => {
//           if (currentSortParam === "latest") {
//             const x = new Date(b.dateAdded).valueOf();
//             const y = new Date(a?.dateAdded).valueOf();
//             return x - y;
//           }
//           if (currentSortParam === "highest salary") {
//             const x = Number(b.amount);
//             const y = Number(a.amount);
//             return y <= x ? 1 : -1;
//           }
//           if (currentSortParam === "lowest salary") {
//             const x = Number(b.amount);
//             const y = Number(a.amount);
//             return y >= x ? 1 : -1;
//           } else return 0;
//         })
//     : [];
// };
