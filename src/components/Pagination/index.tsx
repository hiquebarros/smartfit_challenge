import React from "react";
import ReactPaginate from "react-paginate";

export interface IPaginationProps {
  className?: string;
  initialPage?: number;
  marginPagesDisplayed?: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  changePage: ({ selected }: { selected: number }) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
    changePage,
    pageCount
}) => {
  return (
    <ReactPaginate
    previousLabel={"<"}
    nextLabel={">"}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={"paginationUl"}
    previousLinkClassName={"previousBttn"}
    nextLinkClassName={"nextBttn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
    pageClassName={"paginationPages"}
  />
  );
};