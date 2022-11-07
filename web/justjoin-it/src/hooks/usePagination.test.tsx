// import React from "react";
// // import { renderHook, act } from "@testing-library/react-hooks";
// import { BigOfferDetails } from "../types/types";
import usePagination from "./usePagination";
import { renderHook, act } from "@testing-library/react";

const mockBigOfferDetails = {
  _id: "aa1",
  dateAdded: "25/09/2022",
  remote: true,
  title: "Tittle",
  city: "Warszawa",
  companyName: "string",
  logo: "logo.png",
  techStack: [{ stackName: "JS" }],
  adress: "aaaaa",
  companySize: "45",
  exp: "Junior",
  description: "aaaa",
  geolocation: {
    latitude: "45.000",
    longitude: "27.000",
  },
};
describe("usePagination", () => {
  test("xxx", async () => {
    let hook;
    let data;
    await act(() => {
      hook = renderHook(() => usePagination([mockBigOfferDetails], 12));
      data = hook.result.current.currentData();
    });

    expect(JSON.parse(JSON.stringify(data))).toEqual([mockBigOfferDetails]);
  });
});
