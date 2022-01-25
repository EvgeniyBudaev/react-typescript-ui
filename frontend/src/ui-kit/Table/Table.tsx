import React, { PropsWithChildren, ReactElement, useMemo } from "react";
import { Column, IdType, useSortBy, useTable } from "react-table";
import classNames from "classnames";
import { Pagination, Search } from "ui-kit";
import "./Table.scss";
import { SortingIcon } from "./SortingIcon";

export type SortingType = IdType<string> | `-${IdType<string>}`;
export type TableSortingType = { [key: string]: SortingType };

export interface ITableProps<T extends Record<string, unknown>> {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  columns: readonly Column<object>[];
  currentPage?: number;
  data: T[];
  pagesCount?: number;
  searchedKeyword?: string;
  sorting?: TableSortingType;
  isPagination?: boolean;
  isSearch?: boolean;
  onPageChange?: ({ selected }: { selected: number }) => void;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSort?: (sorting: TableSortingType) => void;
}

export const Table = <T extends Record<string, unknown>>(
  props: PropsWithChildren<ITableProps<T>>
): ReactElement => {
  const data = useMemo(() => props.data, [props.data]);
  const {
    className,
    columns,
    currentPage,
    pagesCount,
    searchedKeyword,
    sorting,
    isPagination,
    isSearch,
    onPageChange,
    onSearchChange,
    onSort,
  } = props;

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const getNewSort = (currentSort: SortingType, key: string): string => {
    switch (currentSort) {
      case `-${key}`:
        return undefined;
      case key:
        return `-${key}`;
      default:
        return key;
    }
  };

  const handleSortClick = (column: Column) => {
    const newSort = getNewSort(sorting?.[column.id], column.id);
    onSort({ [column.id]: newSort as SortingType });
  };

  return (
    <>
      {isSearch && (
        <Search
          searchedKeyword={searchedKeyword}
          onSearchChange={onSearchChange}
        />
      )}
      <table className={classNames("Table", className)} {...getTableProps()}>
        <thead className="Table-THead">
          {headerGroups.map(headerGroup => (
            <tr className="Table-TR" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  className="Table-TH"
                  {...column.getHeaderProps({
                    style: { minWidth: column.minWidth, width: column.width },
                  })}
                >
                  <div
                    className="Table-THInner"
                    onClick={() => handleSortClick(column)}
                  >
                    <div className="Table-THText">
                      {column.render("Header")}
                    </div>
                    <>
                      {column.canSort && (
                        <div className="Table-SortingIcon">
                          <SortingIcon
                            sort={sorting?.[column.id]}
                            sortVariant={column.id}
                          />
                        </div>
                      )}
                    </>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="Table-TBody" {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className="Table-TR" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      className="Table-TD"
                      {...cell.getCellProps({
                        style: {
                          minWidth: cell.column.minWidth,
                          width: cell.column.width,
                        },
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {isPagination && (
        <Pagination
          initialPage={currentPage - 1}
          pagesCount={pagesCount}
          onChange={onPageChange}
        />
      )}
    </>
  );
};
