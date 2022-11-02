import { useState } from "react";
import { BigOfferDetails } from "../types/types";



const usePagination = (data: BigOfferDetails[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  //TODOTEST
  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };
  //TODOTEST
  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };
  //TODOTEST
  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };
  //TODOTEST
  const jump = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  return { next, prev, jump, currentData, currentPage, maxPage };
};

export default usePagination;
