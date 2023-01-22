import {
  mockFilteredByTechStackAndHighestSalary,
  mockFilteredByTechStackLatestAndRemote,
  mockFilteredByTechStackLowestSalaryAndRemote,
  mockOffers,
} from "../../utils/test-mocks";
import { allOffersSelector, filterAndSortSelector } from "./selectors";

describe("offers selcetors", () => {
  test("check if if all offers are in state", () => {
    const mockParameters = {
      offers: mockOffers,
      userData: {
        isAuthenticated: false,
        userEmail: "",
      },
    };
    const allOffers = allOffersSelector(mockParameters);
    expect(allOffers).toBe(mockOffers);
  });

  test("check if filtering and sorting by highest salary, techStack work correctly and remote", () => {
    const mockParameters = {
      offers: mockOffers,
      userData: {
        isAuthenticated: false,
        userEmail: "",
      },
    };
    const callbackFilterAndSortSelector = filterAndSortSelector(mockParameters);
    const currentStackParam = "CSS";
    const remoteOffersParam = "remote";
    const currentSortParam = "highest salary";
    const filteredByTechStackAndHighestSalary = callbackFilterAndSortSelector(currentStackParam, remoteOffersParam, currentSortParam);
    expect(filteredByTechStackAndHighestSalary).toStrictEqual(mockFilteredByTechStackAndHighestSalary);
  });
  test("check if filtering and sorting by lowest salary,  techStack and remote work correctly", () => {
    const mockParameters = {
      offers: mockOffers,
      userData: {
        isAuthenticated: false,
        userEmail: "",
      },
    };
    const callbackFilterAndSortSelector = filterAndSortSelector(mockParameters);
    const currentStackParam = "HTML";
    const remoteOffersParam = "remote";
    const currentSortParam = "lowest salary";
    const filteredByTechStackLowestSalaryAndRemote = callbackFilterAndSortSelector(currentStackParam, remoteOffersParam, currentSortParam);
    expect(filteredByTechStackLowestSalaryAndRemote).toStrictEqual(mockFilteredByTechStackLowestSalaryAndRemote);
  });

  test("check if filtering and sorting by latest,  techStack and remote work correctly", () => {
    const mockParameters = {
      offers: mockOffers,
      userData: {
        isAuthenticated: false,
        userEmail: "",
      },
    };
    const callbackFilterAndSortSelector = filterAndSortSelector(mockParameters);
    const currentStackParam = "HTML";
    const remoteOffersParam = "remote";
    const currentSortParam = "latest";
    const filteredByTechStackLowestSalaryAndRemote = callbackFilterAndSortSelector(currentStackParam, remoteOffersParam, currentSortParam);
    expect(filteredByTechStackLowestSalaryAndRemote).toStrictEqual(mockFilteredByTechStackLatestAndRemote);
  });
});
