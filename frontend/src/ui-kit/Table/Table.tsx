import React, { PropsWithChildren, ReactElement, useMemo } from "react";
import { Column, useTable } from "react-table";
import classNames from "classnames";
import { Pagination } from "ui-kit";
import "./Table.scss";

export interface ITableProps<T extends Record<string, unknown>> {
  className?: string;
  columns: Column<T>[];
  currentPage?: number;
  data: T[];
  pagesCount?: number;
  isPagination?: boolean;
  onPageChange?: ({ selected }: { selected: number }) => void;
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
    isPagination,
    onPageChange,
  } = props;

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <table className={classNames("Table", className)} {...getTableProps()}>
        <thead className="Table-THead">
          {headerGroups.map(headerGroup => (
            <tr className="Table-TR" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="Table-TH" {...column.getHeaderProps()}>
                  {column.render("Header")}
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
                    <td className="Table-TD" {...cell.getCellProps()}>
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
