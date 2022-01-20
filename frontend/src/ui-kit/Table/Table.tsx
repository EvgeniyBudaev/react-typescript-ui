import React, { useMemo } from "react";
import { useTable } from "react-table";
import { IProduct } from "types/product";
import { IconButton } from "ui-kit";
import "./Table.scss";

export interface ITableColumn {
  Header: string;
  accessor: string;
}

export interface ITableProps {
  data: IProduct[];
}

export const Table: React.FC<ITableProps> = props => {
  const data = useMemo(() => props.data, [props.data]);

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Edit",
        accessor: "id",
        Cell: props => {
          const rowIdx = props.value;

          return (
            <div>
              <IconButton typeIcon="Edit" onClick={() => handleEdit(rowIdx)} />
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });

  const handleEdit = (id: number) => {
    console.log("selected edit id: ", id);
  };

  return (
    <table className="Table" {...getTableProps()}>
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
  );
};
