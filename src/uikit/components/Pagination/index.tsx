import clsx from "clsx";
import { memo } from "react";
import ReactPaginate from "react-paginate";

import { ETheme, Icon } from "uikit";

import type { TPaginationProps } from "./types";
import "./Pagination.scss";

const PaginationComponent: FC<TPaginationProps> = ({
  className,
  dataTestId = "uikit__pagination",
  forcePage,
  initialPage,
  marginPagesDisplayed = 3,
  onChange,
  pagesCount,
  pageRangeDisplayed = 3,
  theme,
}) => {
  const isDark = theme === ETheme.Dark;

  return (
    <ReactPaginate
      activeClassName="Pagination__active"
      breakClassName="Pagination__page-item"
      breakLinkClassName="Pagination__page-link"
      containerClassName={clsx("Pagination", { Pagination__dark: isDark }, className)}
      data-testid={dataTestId}
      forcePage={forcePage}
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      nextClassName="Pagination__page-item"
      nextLinkClassName="Pagination__page-link"
      onPageChange={onChange}
      pageClassName="Pagination__page-item"
      pageCount={pagesCount}
      pageLinkClassName="Pagination__page-link"
      pageRangeDisplayed={pageRangeDisplayed}
      previousClassName="Pagination__page-item"
      previousLinkClassName="Pagination__page-link"
      previousLabel={
        <>
          <Icon type="ArrowLeft" />
        </>
      }
      nextLabel={
        <>
          <Icon type="ArrowRight" />
        </>
      }
    />
  );
};

PaginationComponent.displayName = "Pagination";

export const Pagination = memo(PaginationComponent);
